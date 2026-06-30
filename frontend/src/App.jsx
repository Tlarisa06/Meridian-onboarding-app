import React, { useState, useEffect } from 'react';
import { login } from './services/authRpcService';
import { subscribeToEmployees } from './services/directoryRpcService';
import { subscribeToMessages, sendChatMessage, getChatHistory } from './services/chatRpcService';
import LoginForm from './components/LoginForm';
import EmployeeTable from './components/EmployeeTable';
import HybridScheduleTable from './components/HybridScheduleTable';
import MySchedule from './components/MySchedule';
import MeetingSchedule from './components/MeetingSchedule';
import WelcomeWidget from './components/WelcomeWidget';
import styles from './styles/appStyles';

function App() {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('departments');
    const [user, setUser] = useState(null);
    const [loginError, setLoginError] = useState(null);

    const [activeChatTarget, setActiveChatTarget] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Session Recovery Effect: Load token seamlessly on application initialization
    useEffect(() => {
        const cachedUser = localStorage.getItem('meridian_user');
        const cachedToken = localStorage.getItem('meridian_token');
        if (cachedUser && cachedToken) {
            setUser(JSON.parse(cachedUser));
        }
    }, []);

    // Synchronize global gRPC streams (Employee directory listing and live chat messages)
    useEffect(() => {
        if (!user) return;

        const currentUserId = Number(user.id || user.Id || 0);
        if (currentUserId === 0) return;

        const unsubscribeEmployees = subscribeToEmployees(
            currentUserId,
            (newData) => {
                setEmployees(newData);
                setError(null);
            },
            (err) => {
                console.error(err);
                setError("gRPC Stream failed. Check if backend server is running!");
            }
        );

        const unsubscribeMessages = subscribeToMessages(currentUserId, (incomingMsg) => {
            const msgSender = Number(incomingMsg.senderId ?? incomingMsg.sender_id ?? 0);
            const msgReceiver = Number(incomingMsg.receiverId ?? incomingMsg.receiver_id ?? 0);

            if (msgSender === currentUserId || msgReceiver === currentUserId) {
                setMessages(prev => {
                    const isDuplicate = prev.some(m =>
                        Number(m.senderId) === msgSender &&
                        m.text === incomingMsg.text &&
                        m.time === incomingMsg.time
                    );
                    if (isDuplicate) return prev;

                    return [...prev, {
                        senderId: msgSender,
                        receiverId: msgReceiver,
                        text: incomingMsg.text ?? "",
                        time: incomingMsg.time ?? ""
                    }];
                });
            }
        });

        return () => {
            if (unsubscribeEmployees) unsubscribeEmployees();
            if (unsubscribeMessages) unsubscribeMessages();
        };
    }, [user]);

    // Pull saved dialogue context history from persistent storage when switching active targets
    useEffect(() => {
        const loadHistory = async () => {
            if (!user || !activeChatTarget) return;
            try {
                const senderId = Number(user.id || user.Id || 0);
                const receiverId = Number(activeChatTarget.id || activeChatTarget.Id || 0);

                if (senderId === 0 || receiverId === 0) return;

                const history = await getChatHistory(senderId, receiverId);

                const normalizedHistory = history.map(m => ({
                    senderId: Number(m.senderId ?? m.sender_id ?? 0),
                    receiverId: Number(m.receiverId ?? m.receiver_id ?? 0),
                    text: m.text ?? "",
                    time: m.time ?? ""
                }));

                setMessages(prev => {
                    const filteredMessages = prev.filter(m =>
                        !((Number(m.senderId) === senderId && Number(m.receiverId) === receiverId) ||
                            (Number(m.senderId) === receiverId && Number(m.receiverId) === senderId))
                    );
                    return [...filteredMessages, ...normalizedHistory];
                });
            } catch (err) {
                console.error("Failed to load chat history:", err);
            }
        };

        loadHistory();
    }, [activeChatTarget, user]);

    // Dispatch credentials validation payload over unary RPC handler
    const handleLoginSubmit = async (username, password) => {
        setLoginError(null);
        try {
            const response = await login(username, password);
            if (response && response.success) {
                const rawEmp = response.employee;

                const loggedInUser = {
                    id: Number(rawEmp.id ?? rawEmp.Id ?? 0),
                    firstName: rawEmp.firstName ?? rawEmp.FirstName ?? rawEmp.first_name ?? "",
                    lastName: rawEmp.lastName ?? rawEmp.LastName ?? rawEmp.last_name ?? "",
                    department: rawEmp.department ? {
                        id: Number(rawEmp.department.id ?? rawEmp.department.Id ?? 0),
                        name: rawEmp.department.name ?? rawEmp.department.Name ?? ""
                    } : null
                };

                localStorage.setItem('meridian_token', response.token);
                localStorage.setItem('meridian_user', JSON.stringify(loggedInUser));

                setUser(loggedInUser);
            } else {
                setLoginError(response.errorMessage || "Invalid credentials.");
            }
        } catch (err) {
            console.error("gRPC Login Error:", err);
            setLoginError("gRPC connection error to backend server.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('meridian_token');
        localStorage.removeItem('meridian_user');

        setUser(null);
        setActiveChatTarget(null);
        setEmployees([]);
        setMessages([]);
        setSearchTerm('');
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!messageText.trim() || !activeChatTarget || !user) return;

        try {
            const senderId = Number(user.id || user.Id || 0);
            const receiverId = Number(activeChatTarget.id || activeChatTarget.Id || 0);
            const textToSend = messageText.trim();

            setMessageText('');
            await sendChatMessage(senderId, receiverId, textToSend);
        } catch (err) {
            console.error("Chat Send Error:", err);
            alert("Failed to send message over gRPC.");
        }
    };

    if (error) return <p style={{ ...styles.message, color: 'red' }}>{error}</p>;

    if (!user) {
        return <LoginForm onLogin={handleLoginSubmit} loginError={loginError} />;
    }

    const currentUserId = Number(user.id || user.Id || 0);
    const targetUserId = activeChatTarget ? Number(activeChatTarget.id || activeChatTarget.Id || 0) : 0;

    const currentChatMessages = messages.filter(m =>
        (Number(m.senderId) === currentUserId && Number(m.receiverId) === targetUserId) ||
        (Number(m.senderId) === targetUserId && Number(m.receiverId) === currentUserId)
    );

    const filteredEmployees = employees.filter(emp => {
        const fullName = `${emp.firstName || ""} ${emp.lastName || ""}`.toLowerCase();
        const deptName = (emp.department?.name || emp.department?.Name || "").toLowerCase();
        const normalizedTerm = searchTerm.toLowerCase();

        return fullName.includes(normalizedTerm) || deptName.includes(normalizedTerm);
    });

    const showSearchBar = activeTab === 'departments' || activeTab === 'schedule';

    return (
        <div style={styles.appLayout}>
            <div style={styles.mainContent}>
                <div style={styles.headerRow}>
                    <h1 style={styles.title}>Meridian Onboarding Portal</h1>
                    <div style={styles.userInfo}>
                        <span>User: <strong>{user.firstName} {user.lastName}</strong></span>
                        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
                    </div>
                </div>

                <WelcomeWidget
                    loggedInUser={user}
                    employees={employees}
                    onSelectEmployee={setActiveChatTarget}
                />

                {/* Tab Navigation Container */}
                <div style={styles.tabContainer}>
                    <button
                        style={activeTab === 'departments' ? styles.activeTabButton : styles.tabButton}
                        onClick={() => { setActiveTab('departments'); setSearchTerm(''); }}
                    >
                        📁 Employees by Department
                    </button>
                    <button
                        style={activeTab === 'schedule' ? styles.activeTabButton : styles.tabButton}
                        onClick={() => { setActiveTab('schedule'); setSearchTerm(''); }}
                    >
                        📅 Hybrid Schedule by Department
                    </button>
                    <button
                        style={activeTab === 'my-schedule' ? styles.activeTabButton : styles.tabButton}
                        onClick={() => { setActiveTab('my-schedule'); setSearchTerm(''); }}
                    >
                        ⚙️ My Schedule
                    </button>
                    <button
                        style={activeTab === 'meetings' ? styles.activeTabButton : styles.tabButton}
                        onClick={() => { setActiveTab('meetings'); setSearchTerm(''); }}
                    >
                        🎥 Google Meet Schedule
                    </button>
                </div>

                {/* White Search Bar with absolute Clear "✕" Action Button */}
                {showSearchBar && (
                    <div style={{ marginBottom: '20px', marginTop: '-10px', position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="🔍 Search employees by name or department..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 40px 12px 16px', // Extra right padding to avoid text overlapping the X button
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                fontSize: '14px',
                                outline: 'none',
                                boxSizing: 'border-box',
                                backgroundColor: '#ffffff',
                                color: '#0f172a',
                                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.2s'
                            }}
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                style={{
                                    position: 'absolute',
                                    right: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    color: '#94a3b8',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'color 0.2s'
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#475569'}
                                onMouseLeave={(e) => e.target.value = '#64748b'}
                            >
                                ✕
                            </button>
                        )}
                    </div>
                )}

                {activeTab === 'departments' && <EmployeeTable employees={filteredEmployees} onOpenChat={setActiveChatTarget} />}
                {activeTab === 'schedule' && <HybridScheduleTable employees={filteredEmployees} />}

                {activeTab === 'my-schedule' && <MySchedule employees={employees} loggedInUser={user} />}
                {activeTab === 'meetings' && <MeetingSchedule loggedInUser={user} employees={employees} />}
            </div>

            {activeChatTarget && (
                <div style={styles.sidebarChat}>
                    <div style={styles.sidebarHeader}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: (!!activeChatTarget.isOnline || !!activeChatTarget.IsOnline) ? '#16a34a' : '#cbd5e1'
                            }} />
                            <h3 style={styles.sidebarTitle}>{activeChatTarget.firstName || activeChatTarget.first_name} {activeChatTarget.lastName || activeChatTarget.last_name}</h3>
                        </div>
                        <button style={styles.closeButton} onClick={() => setActiveChatTarget(null)}>✕</button>
                    </div>

                    <div style={styles.chatBox}>
                        {currentChatMessages.length === 0 ? (
                            <p style={styles.emptyChat}>No messages yet. Say hello!</p>
                        ) : (
                            currentChatMessages.map((msg, index) => {
                                const isMe = Number(msg.senderId) === currentUserId;
                                return (
                                    <div key={index} style={{ ...styles.msgRow, justifyContent: isMe ? 'flex-end' : 'flex-start' }}>
                                        <div style={{
                                            ...styles.msgBubble,
                                            background: isMe ? '#3b82f6' : '#e2e8f0',
                                            color: isMe ? '#fff' : '#1e293b',
                                            borderRadius: isMe ? '12px 12px 0 12px' : '12px 12px 12px 0'
                                        }}>
                                            <p style={styles.msgText}>{msg.text}</p>
                                            <span style={{ ...styles.msgTime, color: isMe ? '#bfdbfe' : '#64748b' }}>{msg.time}</span>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    <form onSubmit={handleSendMessage} style={styles.inputArea}>
                        <input
                            type="text"
                            style={styles.input}
                            placeholder="Type a message..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                        />
                        <button type="submit" style={styles.sendButton}>Send</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default App;
import React, { useState, useEffect } from 'react';
import { login } from './services/authRpcService';
import { subscribeToEmployees } from './services/directoryRpcService';
import { subscribeToMessages, sendChatMessage, getChatHistory } from './services/chatRpcService';
import LoginForm from './components/LoginForm';
import EmployeeTable from './components/EmployeeTable';
import HybridScheduleTable from './components/HybridScheduleTable';
import MySchedule from './components/MySchedule';
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

    // Synchronize global gRPC streams (Employee directory listing and live chat messages)
    useEffect(() => {
        if (!user) return;

        const currentUserId = Number(user.id || user.Id || 0);
        if (currentUserId === 0) return;

        // Subscribe to real-time corporate directory status changes
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

        // Listen for live inbound chat messages over the bi-directional pipe
        const unsubscribeMessages = subscribeToMessages(currentUserId, (incomingMsg) => {
            const msgSender = Number(incomingMsg.senderId ?? incomingMsg.sender_id ?? 0);
            const msgReceiver = Number(incomingMsg.receiverId ?? incomingMsg.receiver_id ?? 0);

            if (msgSender === currentUserId || msgReceiver === currentUserId) {
                setMessages(prev => {
                    // Prevent message duplication if records have already loaded via local database history queries
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

                // Map database entity properties into a unified local UI data structure
                const normalizedHistory = history.map(m => ({
                    senderId: Number(m.senderId ?? m.sender_id ?? 0),
                    receiverId: Number(m.receiverId ?? m.receiver_id ?? 0),
                    text: m.text ?? "",
                    time: m.time ?? ""
                }));

                setMessages(prev => {
                    // Flush lingering runtime entries to insert a clean database historical line array
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
            if (response && (response.success || response.Success)) {
                const rawEmp = response.employee || response.Employee;

                // Normalize variations into a strict camelCase layout structure
                const loggedInUser = {
                    id: Number(rawEmp.id ?? rawEmp.Id ?? 0),
                    firstName: rawEmp.firstName ?? rawEmp.FirstName ?? rawEmp.first_name ?? "",
                    lastName: rawEmp.lastName ?? rawEmp.LastName ?? rawEmp.last_name ?? ""
                };
                setUser(loggedInUser);
            } else {
                setLoginError(response.errorMessage || response.ErrorMessage || "Invalid credentials.");
            }
        } catch (err) {
            console.error("gRPC Login Error:", err);
            setLoginError("gRPC connection error to backend server.");
        }
    };

    // Purge active context allocations on disconnect routines
    const handleLogout = () => {
        setUser(null);
        setActiveChatTarget(null);
        setEmployees([]);
        setMessages([]);
    };

    // Transmit textual message properties over unary client proxies
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!messageText.trim() || !activeChatTarget || !user) return;

        try {
            const senderId = Number(user.id || user.Id || 0);
            const receiverId = Number(activeChatTarget.id || activeChatTarget.Id || 0);
            const textToSend = messageText.trim();

            // Instant clear text fields for dynamic UI processing responses
            setMessageText('');

            await sendChatMessage(senderId, receiverId, textToSend);
        } catch (err) {
            console.error("Chat Send Error:", err);
            alert("Failed to send message over gRPC. Make sure backend is updated and running.");
        }
    };

    if (error) return <p style={{ ...styles.message, color: 'red' }}>{error}</p>;

    if (!user) {
        return <LoginForm onLogin={handleLoginSubmit} loginError={loginError} />;
    }

    // Cast numeric identifiers for stable conditional rendering filters
    const currentUserId = Number(user.id || user.Id || 0);
    const targetUserId = activeChatTarget ? Number(activeChatTarget.id || activeChatTarget.Id || 0) : 0;

    // Filter dynamic dialogue streams to capture targeted mutual conversation segments
    const currentChatMessages = messages.filter(m =>
        (Number(m.senderId) === currentUserId && Number(m.receiverId) === targetUserId) ||
        (Number(m.senderId) === targetUserId && Number(m.receiverId) === currentUserId)
    );

    return (
        <div style={styles.appLayout}>
            {/* Core tracking module viewport */}
            <div style={styles.mainContent}>
                <div style={styles.headerRow}>
                    <h1 style={styles.title}>Meridian Onboarding Portal</h1>
                    <div style={styles.userInfo}>
                        <span>User: <strong>{user.firstName} {user.lastName}</strong></span>
                        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
                    </div>
                </div>

                <div style={styles.tabContainer}>
                    <button
                        style={activeTab === 'departments' ? styles.activeTabButton : styles.tabButton}
                        onClick={() => setActiveTab('departments')}
                    >
                        📁 Employees by Department
                    </button>
                    <button
                        style={activeTab === 'schedule' ? styles.activeTabButton : styles.tabButton}
                        onClick={() => setActiveTab('schedule')}
                    >
                        📅 Hybrid Schedule by Department
                    </button>
                    <button
                        style={activeTab === 'my-schedule' ? styles.activeTabButton : styles.tabButton}
                        onClick={() => setActiveTab('my-schedule')}
                    >
                        ⚙️ My Schedule
                    </button>
                </div>

                {activeTab === 'departments' && <EmployeeTable employees={employees} onOpenChat={setActiveChatTarget} />}
                {activeTab === 'schedule' && <HybridScheduleTable employees={employees} />}
                {activeTab === 'my-schedule' && <MySchedule employees={employees} loggedInUser={user} />}
            </div>

            {/* Collapsible sidebar chat panel integration */}
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
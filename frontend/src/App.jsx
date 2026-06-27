import React, { useState, useEffect } from 'react';
import { subscribeToEmployees, login } from './services/employeeRpcService';
import LoginForm from './components/LoginForm';
import EmployeeTable from './components/EmployeeTable';
import HybridScheduleTable from './components/HybridScheduleTable';
import MySchedule from './components/MySchedule';

function App() {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('departments');

    const [user, setUser] = useState(null);
    const [loginError, setLoginError] = useState(null);

    useEffect(() => {
        const unsubscribe = subscribeToEmployees(
            (newData) => {
                setEmployees(newData);
                setError(null);
            },
            (err) => {
                console.error(err);
                setError("gRPC Stream failed. Check if backend server is running!");
            }
        );

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    const handleLoginSubmit = async (username, password) => {
        setLoginError(null);
        try {
            const response = await login(username, password);
            if (response.success) {
                setUser(response.employee);
            } else {
                setLoginError(response.errorMessage || "Invalid credentials.");
            }
        } catch (err) {
            setLoginError("gRPC connection error to backend server.");
        }
    };

    const handleLogout = () => {
        setUser(null);
    };

    if (error) return <p style={{ ...styles.message, color: 'red' }}>{error}</p>;

    if (!user) {
        return <LoginForm onLogin={handleLoginSubmit} loginError={loginError} />;
    }

    return (
        <div style={styles.container}>
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

            {activeTab === 'departments' && <EmployeeTable employees={employees} />}
            {activeTab === 'schedule' && <HybridScheduleTable employees={employees} />}
            {activeTab === 'my-schedule' && <MySchedule employees={employees} loggedInUser={user} />}
        </div>
    );
}

const styles = {
    container: { padding: '30px', fontFamily: '"Segoe UI", Roboto, sans-serif', backgroundColor: '#f9fbfd', minHeight: '100vh' },
    headerRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '25px' },
    title: { color: '#1e293b', margin: 0, fontSize: '28px' },
    userInfo: { display: 'flex', alignItems: 'center', gap: '15px', fontSize: '15px', color: '#475569' },
    logoutButton: { padding: '6px 12px', fontSize: '13px', border: '1px solid #cbd5e1', background: '#fff', color: '#ef4444', cursor: 'pointer', borderRadius: '4px', fontWeight: '500' },
    message: { padding: '20px', fontSize: '16px', fontFamily: 'sans-serif' },
    tabContainer: { display: 'flex', gap: '10px', marginBottom: '25px' },
    tabButton: { padding: '12px 20px', fontSize: '15px', border: '1px solid #cbd5e1', background: '#fff', color: '#64748b', cursor: 'pointer', borderRadius: '6px' },
    activeTabButton: { padding: '12px 20px', fontSize: '15px', border: '1px solid #3b82f6', background: '#3b82f6', color: '#fff', cursor: 'pointer', borderRadius: '6px', fontWeight: 'bold' }
};

export default App;
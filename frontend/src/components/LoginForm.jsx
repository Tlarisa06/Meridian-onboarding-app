import React, { useState } from 'react';

export default function LoginForm({ onLogin, loginError }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginCard}>
                <h2 style={styles.loginTitle}>Meridian Portal Login</h2>
                {loginError && <p style={styles.loginError}>{loginError}</p>}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.inputLabel}>Username</label>
                        <input
                            type="text"
                            style={styles.input}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.inputLabel}>Password</label>
                        <input
                            type="password"
                            style={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.loginButton}>Sign In</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    loginContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f1f5f9', fontFamily: '"Segoe UI", Roboto, sans-serif' },
    loginCard: { background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)', width: '100%', maxWidth: '400px' },
    loginTitle: { margin: '0 0 20px 0', fontSize: '24px', color: '#1e293b', textAlign: 'center', fontWeight: 'bold' },
    loginError: { color: '#ef4444', backgroundColor: '#fef2f2', padding: '10px', borderRadius: '6px', fontSize: '14px', marginBottom: '15px', textAlign: 'center', border: '1px solid #fee2e2' },
    form: { display: 'flex', flexDirection: 'column', gap: '20px' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
    inputLabel: { fontSize: '14px', fontWeight: '600', color: '#475569' },
    input: { padding: '10px 14px', fontSize: '15px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none' },
    loginButton: { padding: '12px', fontSize: '16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }
};
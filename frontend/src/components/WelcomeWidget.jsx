import React from 'react';

export default function WelcomeWidget({ loggedInUser, employees, onSelectEmployee }) {
    const currentHour = new Date().getHours();

    // 1. Dynamic greeting based on the time of day
    let greetingMessage = "👋 Welcome";
    if (currentHour < 12) greetingMessage = "🌅 Good morning";
    else if (currentHour < 18) greetingMessage = "☀️ Good afternoon";
    else greetingMessage = "🌆 Good evening";

    const userFirstName = loggedInUser?.firstName || loggedInUser?.FirstName || "there";

    // 2. Filter employees hired within the last 30 days
    const newHires = employees.filter(emp => {
        if (!emp.hireDate) return false;

        // Skip the logged-in user themselves
        const empId = Number(emp.id || emp.Id);
        const currentUserId = Number(loggedInUser?.id || loggedInUser?.Id);
        if (empId === currentUserId) return false;

        const hireDate = new Date(emp.hireDate);
        const today = new Date();
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30);

        return hireDate >= thirtyDaysAgo && hireDate <= today;
    });

    return (
        <div style={styles.container}>
            {/* Header with dynamic greeting */}
            <div style={styles.headerSection}>
                <h1 style={styles.greetingTitle}>
                    {greetingMessage}, <span style={styles.userName}>{userFirstName}</span>!
                </h1>
                <p style={styles.subtitle}>Welcome to your onboarding dashboard. Here is what's happening with the team today.</p>
            </div>

            <hr style={styles.divider} />

            {/* New Hires Section */}
            <div style={styles.newHiresSection}>
                <h3 style={styles.sectionTitle}>🎉 New Members This Month</h3>
                {newHires.length === 0 ? (
                    <p style={styles.emptyText}>No other new members joined in the last 30 days. You're the freshest face! 😎</p>
                ) : (
                    <div style={styles.grid}>
                        {newHires.map(emp => {
                            const empId = emp.id || emp.Id;
                            const deptName = emp.department?.name || emp.department?.Name || "General";
                            const fullName = `${emp.firstName || ""} ${emp.lastName || ""}`;

                            return (
                                <div key={empId} style={styles.card}>
                                    <div style={styles.avatarRow}>
                                        <div style={styles.avatar}>
                                            {emp.firstName?.[0]}{emp.lastName?.[0]}
                                        </div>
                                        <div>
                                            <h4 style={styles.empName}>{fullName}</h4>
                                            <span style={styles.deptBadge}>{deptName}</span>
                                        </div>
                                    </div>
                                    {/* Line 69 Fixed: Corrected standard open/close tag syntax */}
                                    <button
                                        onClick={() => onSelectEmployee && onSelectEmployee(emp)}
                                        style={styles.chatButton}
                                    >
                                        Chat 👋
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    container: { background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '24px', boxSizing: 'border-box', marginBottom: '20px' },
    headerSection: { display: 'flex', flexDirection: 'column', gap: '4px' },
    greetingTitle: { fontSize: '24px', color: '#0f172a', margin: '0', fontWeight: '700' },
    userName: { color: '#2563eb' },
    subtitle: { fontSize: '14px', color: '#64748b', margin: '0' },
    divider: { border: '0', height: '1px', background: '#f1f5f9', margin: '20px 0' },
    newHiresSection: { display: 'flex', flexDirection: 'column', gap: '12px' },
    sectionTitle: { fontSize: '15px', color: '#334155', margin: '0', fontWeight: '600', letterSpacing: '0.3px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px', marginTop: '4px' },
    card: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #f1f5f9' },
    avatarRow: { display: 'flex', alignItems: 'center', gap: '12px' },
    avatar: { width: '36px', height: '36px', borderRadius: '50%', background: '#e2e8f0', color: '#475569', display: 'flex', alignItems: 'center', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', justifyContent: 'center' },
    empName: { fontSize: '14px', color: '#1e293b', margin: '0', fontWeight: '500' },
    deptBadge: { fontSize: '11px', color: '#64748b', fontWeight: '400' },
    chatButton: { background: '#eff6ff', border: 'none', borderRadius: '6px', color: '#2563eb', fontSize: '13px', fontWeight: '500', padding: '6px 12px', cursor: 'pointer', transition: 'all 0.2s' },
    emptyText: { fontSize: '13px', color: '#94a3b8', fontStyle: 'italic', margin: '5px 0 0 0' }
};
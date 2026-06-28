// CSS-in-JS style rules for structural component containers
const styles = {
    appLayout: { display: 'flex', minHeight: '100vh', maxHeight: '100vh', backgroundColor: '#f9fbfd', fontFamily: '"Segoe UI", Roboto, sans-serif', overflow: 'hidden', boxSizing: 'border-box' },
    mainContent: { flex: '1', padding: '30px', overflowY: 'auto', height: '100vh', boxSizing: 'border-box' },
    headerRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '25px' },
    title: { color: '#1e293b', margin: 0, fontSize: '28px' },
    userInfo: { display: 'flex', alignItems: 'center', gap: '15px', fontSize: '15px', color: '#475569' },
    logoutButton: { padding: '6px 12px', fontSize: '13px', border: '1px solid #cbd5e1', background: '#fff', color: '#ef4444', cursor: 'pointer', borderRadius: '4px', fontWeight: '500' },
    message: { padding: '20px', fontSize: '16px', fontFamily: 'sans-serif' },
    tabContainer: { display: 'flex', gap: '10px', marginBottom: '25px' },
    tabButton: { padding: '12px 20px', fontSize: '15px', border: '1px solid #cbd5e1', background: '#fff', color: '#64748b', cursor: 'pointer', borderRadius: '6px' },
    activeTabButton: { padding: '12px 20px', fontSize: '15px', border: '1px solid #3b82f6', background: '#3b82f6', color: '#fff', cursor: 'pointer', borderRadius: '6px', fontWeight: 'bold' },
    sidebarChat: { width: '350px', background: '#fff', borderLeft: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', padding: '20px', gap: '15px', height: '100vh', boxSizing: 'border-box', boxShadow: '-2px 0 5px rgba(0,0,0,0.02)' },
    sidebarHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px', flexShrink: 0 },
    sidebarTitle: { margin: 0, fontSize: '16px', color: '#1e293b', fontWeight: 'bold' },
    closeButton: { background: 'none', border: 'none', fontSize: '16px', color: '#94a3b8', cursor: 'pointer' },
    chatBox: { flex: '1', overflowY: 'auto', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px' },
    emptyChat: { color: '#94a3b8', fontSize: '13px', textAlign: 'center', margin: 'auto' },
    msgRow: { display: 'flex' },
    msgBubble: { padding: '10px 14px', maxWidth: '80%', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' },
    msgText: { margin: '0', fontSize: '14px', lineHeight: '1.4', wordBreak: 'break-word' },
    msgTime: { fontSize: '9px', display: 'block', marginTop: '4px', textAlign: 'right' },
    inputArea: { display: 'flex', gap: '10px', flexShrink: 0, marginTop: 'auto' },
    input: { flex: '1', padding: '12px', fontSize: '14px', border: '1px solid #cbd5e1', borderRadius: '6px', outline: 'none' },
    sendButton: { padding: '12px 16px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }
};

export default styles;
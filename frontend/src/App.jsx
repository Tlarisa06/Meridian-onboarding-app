import { useState, useEffect } from 'react';
import { fetchEmployees, getUniqueDepartments, getEmployeesGroupedAndSorted, calculateSeniorityInMonths } from './services/employeeService';

function App() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('departments');
    const [selectedDeptName, setSelectedDeptName] = useState('Engineering'); // State updated via buttons now
    const [expandedDepts, setExpandedDepts] = useState({});

    useEffect(() => {
        fetchEmployees()
            .then(data => {
                setEmployees(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError("Failed to load employees. Check if backend is running!");
                setLoading(false);
            });
    }, []);

    const toggleDepartment = (deptName) => {
        setExpandedDepts(prev => ({
            ...prev,
            [deptName]: !prev[deptName]
        }));
    };

    if (loading) return <p style={styles.message}>Loading data...</p>;
    if (error) return <p style={{ ...styles.message, color: 'red' }}>{error}</p>;

    const uniqueDepartments = getUniqueDepartments();
    const groupedByDepartment = getEmployeesGroupedAndSorted(employees);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Meridian Onboarding Portal</h1>

            {/* Main Tab Navigation */}
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
            </div>

            {/* TAB 1: Accordion Department View */}
            {activeTab === 'departments' && (
                <div>
                    {Object.keys(groupedByDepartment).map(deptName => {
                        const isExpanded = !!expandedDepts[deptName];
                        return (
                            <div key={deptName} style={styles.accordionSection}>
                                <div style={styles.accordionHeader} onClick={() => toggleDepartment(deptName)}>
                                    <h2 style={styles.deptTitle}>🏢 Department: {deptName}</h2>
                                    <span style={styles.arrow}>{isExpanded ? '▼' : '▶'}</span>
                                </div>

                                {isExpanded && (
                                    <div style={styles.accordionContent}>
                                        <table style={styles.table}>
                                            <thead>
                                            <tr style={styles.tableHeaderRow}>
                                                <th style={styles.th}>Full Name</th>
                                                <th style={styles.th}>Slack Handle</th>
                                                <th style={styles.th}>Hire Date</th>
                                                <th style={styles.th}>Seniority</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {groupedByDepartment[deptName].map(emp => (
                                                <tr key={emp.id} style={styles.tableRow}>
                                                    <td style={styles.td}><strong>{emp.firstName} {emp.lastName}</strong></td>
                                                    <td style={styles.td}>@{emp.slackHandle}</td>
                                                    <td style={styles.td}>{new Date(emp.hireDate).toLocaleDateString('ro-RO')}</td>
                                                    <td style={styles.td}>{calculateSeniorityInMonths(emp.hireDate)} months</td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* TAB 2: Hybrid Schedule View with Pill Buttons */}
            {activeTab === 'schedule' && (
                <div style={styles.scheduleSection}>
                    <div style={styles.filterContainer}>
                        <span style={styles.label}>Select Department: </span>
                        {/* Replacing the dropdown with clickable clean buttons */}
                        <div style={styles.pillContainer}>
                            {uniqueDepartments.map(dept => {
                                const isSelected = dept.name.toLowerCase() === selectedDeptName.toLowerCase();
                                return (
                                    <button
                                        key={dept.id}
                                        style={isSelected ? styles.activePill : styles.pill}
                                        onClick={() => setSelectedDeptName(dept.name)}
                                    >
                                        {dept.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <table style={styles.table}>
                        <thead>
                        <tr style={styles.tableHeaderRow}>
                            <th style={styles.th} style={{ width: '25%' }}>Employee</th>
                            <th style={styles.th} style={{ textAlign: 'center' }}>Mon</th>
                            <th style={styles.th} style={{ textAlign: 'center' }}>Tue</th>
                            <th style={styles.th} style={{ textAlign: 'center' }}>Wed</th>
                            <th style={styles.th} style={{ textAlign: 'center' }}>Thu</th>
                            <th style={styles.th} style={{ textAlign: 'center' }}>Fri</th>
                        </tr>
                        </thead>
                        <tbody>
                        {employees
                            .filter(emp => (emp.department?.name || '').toLowerCase() === selectedDeptName.toLowerCase())
                            .map(emp => (
                                <tr key={emp.id} style={styles.tableRow}>
                                    <td style={styles.td}><strong>{emp.firstName} {emp.lastName}</strong></td>
                                    <td style={emp.hybridSchedule?.monday ? styles.officeCell : styles.remoteCell}>
                                        {emp.hybridSchedule?.monday ? '🏢 Office' : '🏠 Remote'}
                                    </td>
                                    <td style={emp.hybridSchedule?.tuesday ? styles.officeCell : styles.remoteCell}>
                                        {emp.hybridSchedule?.tuesday ? '🏢 Office' : '🏠 Remote'}
                                    </td>
                                    <td style={emp.hybridSchedule?.wednesday ? styles.officeCell : styles.remoteCell}>
                                        {emp.hybridSchedule?.wednesday ? '🏢 Office' : '🏠 Remote'}
                                    </td>
                                    <td style={emp.hybridSchedule?.thursday ? styles.officeCell : styles.remoteCell}>
                                        {emp.hybridSchedule?.thursday ? '🏢 Office' : '🏠 Remote'}
                                    </td>
                                    <td style={emp.hybridSchedule?.friday ? styles.officeCell : styles.remoteCell}>
                                        {emp.hybridSchedule?.friday ? '🏢 Office' : '🏠 Remote'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: { padding: '30px', fontFamily: '"Segoe UI", Roboto, sans-serif', backgroundColor: '#f9fbfd', minHeight: '100vh' },
    title: { color: '#1e293b', marginBottom: '25px', fontSize: '28px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' },
    message: { padding: '20px', fontSize: '16px', fontFamily: 'sans-serif' },
    tabContainer: { display: 'flex', gap: '10px', marginBottom: '25px' },
    tabButton: { padding: '12px 20px', fontSize: '15px', border: '1px solid #cbd5e1', background: '#fff', color: '#64748b', cursor: 'pointer', borderRadius: '6px' },
    activeTabButton: { padding: '12px 20px', fontSize: '15px', border: '1px solid #3b82f6', background: '#3b82f6', color: '#fff', cursor: 'pointer', borderRadius: '6px', fontWeight: 'bold' },
    accordionSection: { background: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', marginBottom: '15px', border: '1px solid #e2e8f0', overflow: 'hidden' },
    accordionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', background: '#fff', cursor: 'pointer', userSelect: 'none', transition: 'background 0.2s' },
    accordionContent: { padding: '20px', borderTop: '1px solid #e2e8f0', backgroundColor: '#fff' },
    deptTitle: { color: '#334155', margin: '0', fontSize: '18px', fontWeight: '600' },
    arrow: { fontSize: '14px', color: '#64748b' },
    scheduleSection: { background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' },
    filterContainer: { marginBottom: '25px', display: 'flex', flexDirection: 'column', gap: '10px' },
    label: { fontSize: '16px', fontWeight: '600', color: '#475569' },
    pillContainer: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
    pill: { padding: '8px 16px', fontSize: '14px', border: '1px solid #cbd5e1', background: '#f8fafc', color: '#475569', cursor: 'pointer', borderRadius: '20px', transition: 'all 0.2s' },
    activePill: { padding: '8px 16px', fontSize: '14px', border: '1px solid #3b82f6', background: '#eff6ff', color: '#1d4ed8', cursor: 'pointer', borderRadius: '20px', fontWeight: 'bold' },
    table: { width: '100%', borderCollapse: 'collapse', fontSize: '15px', tableLayout: 'fixed' },
    tableHeaderRow: { backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1' },
    th: { padding: '12px 20px', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.5px', color: '#475569', textAlign: 'left', fontWeight: '600' },
    tableRow: { borderBottom: '1px solid #e2e8f0' },
    td: { padding: '12px 20px', color: '#334155', textAlign: 'left' },
    officeCell: { padding: '12px', color: '#16a34a', backgroundColor: '#f0fdf4', fontWeight: '500', textAlign: 'center' },
    remoteCell: { padding: '12px', color: '#2563eb', backgroundColor: '#eff6ff', fontWeight: '500', textAlign: 'center' }
};

export default App;
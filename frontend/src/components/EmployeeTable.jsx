import React, { useState } from 'react';
import { getEmployeesGroupedAndSorted, calculateSeniorityInMonths } from '../services/employeeService';

export default function EmployeeTable({ employees, onOpenChat }) {
    // Manage expanded/collapsed state visibility for department blocks
    const [expandedDepts, setExpandedDepts] = useState({});

    const toggleDepartment = (deptName) => {
        setExpandedDepts(prev => ({ ...prev, [deptName]: !prev[deptName] }));
    };

    // Extract dynamic directory data structural layers
    const groupedByDepartment = getEmployeesGroupedAndSorted(employees);

    return (
        <div>
            {Object.keys(groupedByDepartment).map(deptName => {
                const isExpanded = !!expandedDepts[deptName];
                return (
                    <div key={deptName} style={styles.accordionSection}>
                        {/* Accordion header toggling directory rows */}
                        <div style={styles.accordionHeader} onClick={() => toggleDepartment(deptName)}>
                            <h2 style={styles.deptTitle}>🏢 Department: {deptName}</h2>
                            <span style={styles.arrow}>{isExpanded ? '▼' : '▶'}</span>
                        </div>

                        {/* Expandable tabular content block */}
                        {isExpanded && (
                            <div style={styles.accordionContent}>
                                <table style={styles.table}>
                                    <thead>
                                    <tr style={styles.tableHeaderRow}>
                                        <th style={{ ...styles.th, width: '30%' }}>Full Name</th>
                                        <th style={{ ...styles.th, width: '25%' }}>Slack Handle</th>
                                        <th style={{ ...styles.th, width: '20%' }}>Hire Date</th>
                                        <th style={{ ...styles.th, width: '13%' }}>Seniority</th>
                                        <th style={{ ...styles.th, width: '12%', textAlign: 'center' }}>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {groupedByDepartment[deptName].map(emp => {
                                        const isOnline = !!emp.isOnline || !!emp.IsOnline;
                                        return (
                                            <tr key={emp.id} style={styles.tableRow}>
                                                <td style={styles.td}>
                                                    <div style={styles.nameCell}>
                                                        {/* Status indicator tracking live gRPC stream présence */}
                                                        <span style={{
                                                            ...styles.statusDot,
                                                            backgroundColor: isOnline ? '#16a34a' : '#cbd5e1'
                                                        }} title={isOnline ? "Online" : "Offline"} />
                                                        <strong>{emp.firstName} {emp.lastName}</strong>
                                                    </div>
                                                </td>
                                                <td style={styles.td}>@{emp.slackHandle}</td>
                                                <td style={styles.td}>{new Date(emp.hireDate).toLocaleDateString('en-US')}</td>
                                                <td style={styles.td}>{calculateSeniorityInMonths(emp.hireDate)} months</td>
                                                <td style={{ ...styles.td, textAlign: 'center' }}>
                                                    {/* Action link binding target user reference to chat panel hook */}
                                                    <button
                                                        style={styles.chatButton}
                                                        onClick={() => onOpenChat(emp)}
                                                    >
                                                        💬 Chat
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

const styles = {
    accordionSection: { background: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', marginBottom: '15px', border: '1px solid #e2e8f0', overflow: 'hidden' },
    accordionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', background: '#fff', cursor: 'pointer', userSelect: 'none' },
    accordionContent: { padding: '20px', borderTop: '1px solid #e2e8f0', backgroundColor: '#fff' },
    deptTitle: { color: '#334155', margin: '0', fontSize: '18px', fontWeight: '600' },
    arrow: { fontSize: '14px', color: '#64748b' },
    table: { width: '100%', borderCollapse: 'collapse', fontSize: '15px', tableLayout: 'fixed' },
    tableHeaderRow: { backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1' },
    th: { padding: '12px 20px', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.5px', color: '#475569', fontWeight: '600', textAlign: 'left' },
    tableRow: { borderBottom: '1px solid #e2e8f0' },
    td: { padding: '12px 20px', color: '#334155', textAlign: 'left', verticalAlign: 'middle' },
    nameCell: { display: 'flex', alignItems: 'center', gap: '10px' },
    statusDot: { width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block', flexShrink: 0 },
    chatButton: { padding: '6px 12px', fontSize: '13px', background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }
};
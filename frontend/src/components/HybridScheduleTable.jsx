import React, { useState } from 'react';
import { getUniqueDepartments } from '../services/employeeService';

export default function HybridScheduleTable({ employees }) {
    // Default fallback filter state targets the Engineering department
    const [selectedDeptName, setSelectedDeptName] = useState('Engineering');

    // Extract dynamic department listing using the global employee dataset
    const uniqueDepartments = getUniqueDepartments(employees);
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

    return (
        <div style={styles.scheduleSection}>
            {/* Filtering interface section */}
            <div style={styles.filterContainer}>
                <span style={styles.label}>Select Department: </span>
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

            {/* Attendance schedule grid */}
            <table style={styles.table}>
                <thead>
                <tr style={styles.tableHeaderRow}>
                    <th style={{ ...styles.th, width: '25%' }}>Employee</th>
                    <th style={{ ...styles.th, textAlign: 'center' }}>Mon</th>
                    <th style={{ ...styles.th, textAlign: 'center' }}>Tue</th>
                    <th style={{ ...styles.th, textAlign: 'center' }}>Wed</th>
                    <th style={{ ...styles.th, textAlign: 'center' }}>Thu</th>
                    <th style={{ ...styles.th, textAlign: 'center' }}>Fri</th>
                </tr>
                </thead>
                <tbody>
                {/* Filter and map employee data columns dynamically */}
                {employees
                    .filter(emp => (emp.department?.name || '').toLowerCase() === selectedDeptName.toLowerCase())
                    .map(emp => (
                        <tr key={emp.id} style={styles.tableRow}>
                            <td style={styles.td}><strong>{emp.firstName} {emp.lastName}</strong></td>
                            {daysOfWeek.map(day => (
                                <td key={day} style={emp.hybridSchedule?.[day] ? styles.officeCell : styles.remoteCell}>
                                    {emp.hybridSchedule?.[day] ? '🏢 Office' : '🏠 Remote'}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    scheduleSection: { background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' },
    filterContainer: { marginBottom: '25px', display: 'flex', flexDirection: 'column', gap: '10px' },
    label: { fontSize: '16px', fontWeight: '600', color: '#475569' },
    pillContainer: { display: 'flex', gap: '8px', flexWrap: 'wrap' },
    pill: { padding: '8px 16px', fontSize: '14px', border: '1px solid #cbd5e1', background: '#f8fafc', color: '#475569', cursor: 'pointer', borderRadius: '20px' },
    activePill: { padding: '8px 16px', fontSize: '14px', border: '1px solid #3b82f6', background: '#eff6ff', color: '#1d4ed8', cursor: 'pointer', borderRadius: '20px', fontWeight: 'bold' },
    table: { width: '100%', borderCollapse: 'collapse', fontSize: '15px', tableLayout: 'fixed' },
    tableHeaderRow: { backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1' },
    th: { padding: '12px 20px', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.5px', color: '#475569', fontWeight: '600' },
    tableRow: { borderBottom: '1px solid #e2e8f0' },
    td: { padding: '12px 20px', color: '#334155', textAlign: 'left' },
    officeCell: { padding: '12px', color: '#16a34a', backgroundColor: '#f0fdf4', fontWeight: '500', textAlign: 'center' },
    remoteCell: { padding: '12px', color: '#2563eb', backgroundColor: '#eff6ff', fontWeight: '500', textAlign: 'center' }
};
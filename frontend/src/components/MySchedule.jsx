import React, { useState } from 'react';
import { updateHybridSchedule } from "../services/directoryRpcService";
export default function MySchedule({ employees, loggedInUser }) {
    const [activeSwap, setActiveSwap] = useState(null);

    const myData = employees.find(emp => emp.id === loggedInUser.id);
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

    if (!myData) return <p style={styles.text}>Loading schedule data...</p>;

    const handleDayClick = (dayName, isCurrentlyOffice) => {
        if (!isCurrentlyOffice) {
            setActiveSwap({
                employeeId: myData.id,
                newOfficeDay: dayName,
                currentSchedule: myData.hybridSchedule
            });
        }
    };

    const executeSwap = async (currentOfficeDayToMakeRemote) => {
        try {
            // Ensure schedule keys are lowercase
            const updatedSchedule = {
                monday: !!activeSwap.currentSchedule.monday || activeSwap.currentSchedule.Monday,
                tuesday: !!activeSwap.currentSchedule.tuesday || activeSwap.currentSchedule.Tuesday,
                wednesday: !!activeSwap.currentSchedule.wednesday || activeSwap.currentSchedule.Wednesday,
                thursday: !!activeSwap.currentSchedule.thursday || activeSwap.currentSchedule.Thursday,
                friday: !!activeSwap.currentSchedule.friday || activeSwap.currentSchedule.Friday,
            };

            // Apply swaps
            updatedSchedule[activeSwap.newOfficeDay.toLowerCase()] = true;
            updatedSchedule[currentOfficeDayToMakeRemote.toLowerCase()] = false;

            const response = await updateHybridSchedule(activeSwap.employeeId, updatedSchedule);
            console.log("gRPC Swap Response Content:", response);

            if (!response || response.success === false) {
                alert(response?.errorMessage || "Error updating schedule.");
            }
        } catch (err) {
            console.error("Swap Catch Error:", err);
            alert("gRPC connection error.");
        } finally {
            setActiveSwap(null);
        }
    };

    return (
        <div style={styles.card}>
            <h2 style={styles.title}>📅 Manage Personal Hybrid Schedule</h2>
            <p style={styles.subtitle}>
                Click on any <strong>Remote (🏠)</strong> day to change it to an <strong>In-Office (🏢)</strong> day.
                The system will automatically guarantee the mandatory <strong>3 Office / 2 Remote days</strong> rule.
            </p>

            <div style={styles.daysContainer}>
                {daysOfWeek.map(day => {
                    const isOffice = myData.hybridSchedule?.[day];
                    return (
                        <div
                            key={day}
                            style={isOffice ? styles.officeCard : styles.remoteCard}
                            onClick={() => handleDayClick(day, isOffice)}
                        >
                            <span style={styles.dayName}>{day.toUpperCase()}</span>
                            <div style={styles.statusLabel}>
                                {isOffice ? '🏢 In-Office' : '🏠 Remote'}
                            </div>
                            {!isOffice && <span style={styles.editHint}>Click to swap ✎</span>}
                        </div>
                    );
                })}
            </div>

            {activeSwap && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modal}>
                        <h3 style={styles.modalTitle}>Choose Day to Swap</h3>
                        <p style={styles.modalText}>
                            You selected <strong>{activeSwap.newOfficeDay.toUpperCase()}</strong> to become an <strong>Office</strong> day.
                        </p>
                        <p style={styles.modalText}>
                            To maintain the mandatory ratio, choose which of your current In-Office days will become <strong>Remote</strong>:
                        </p>
                        <div style={styles.modalActions}>
                            {daysOfWeek
                                .filter(day => activeSwap.currentSchedule[day] === true)
                                .map(day => (
                                    <button
                                        key={day}
                                        style={styles.swapButton}
                                        onClick={() => executeSwap(day)}
                                    >
                                        Swap with {day.toUpperCase()}
                                    </button>
                                ))}
                        </div>
                        <button style={styles.cancelButton} onClick={() => setActiveSwap(null)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    card: { background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' },
    title: { color: '#1e293b', margin: '0 0 10px 0', fontSize: '22px' },
    subtitle: { color: '#64748b', fontSize: '15px', marginBottom: '25px', lineHeight: '1.5' },
    daysContainer: { display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'space-between' },
    officeCard: { flex: '1', minWidth: '140px', padding: '20px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', textAlign: 'center', color: '#16a34a' },
    remoteCard: { flex: '1', minWidth: '140px', padding: '20px', background: '#eff6ff', border: '1px dashed #bfdbfe', borderRadius: '8px', textAlign: 'center', color: '#2563eb', cursor: 'pointer' },
    dayName: { display: 'block', fontSize: '13px', fontWeight: 'bold', color: '#475569', marginBottom: '8px' },
    statusLabel: { fontSize: '16px', fontWeight: '600', marginBottom: '5px' },
    editHint: { fontSize: '11px', color: '#3b82f6', display: 'block', marginTop: '5px' },
    text: { color: '#475569', fontSize: '15px' },
    modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
    modal: { background: '#fff', padding: '30px', borderRadius: '12px', maxWidth: '400px', width: '100%', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' },
    modalTitle: { margin: '0 0 15px 0', fontSize: '18px', color: '#1e293b', fontWeight: 'bold' },
    modalText: { fontSize: '14px', color: '#475569', marginBottom: '12px', lineHeight: '1.5' },
    modalActions: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' },
    swapButton: { padding: '10px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' },
    cancelButton: { padding: '10px', background: '#fff', color: '#64748b', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', width: '100%' }
};
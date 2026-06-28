import React, { useState, useEffect } from 'react';
import { getMeetings } from '../services/meetingRpcService';

export default function MeetingSchedule({ loggedInUser, employees }) {
    const [meetings, setMeetings] = useState([]);
    const currentUserId = Number(loggedInUser.id || loggedInUser.Id || 0);
    const userDept = loggedInUser.department?.name || "Engineering";

    useEffect(() => {
        getMeetings(currentUserId, userDept)
            .then(data => setMeetings(data))
            .catch(err => console.error("Failed to load meetings:", err));
    }, [currentUserId, userDept]);

    // Helper to map attendee IDs to real names from the global employee list
    const getAttendeeNames = (ids = []) => {
        const parsedIds = Array.isArray(ids) ? ids : [];
        return parsedIds
            .map(id => employees.find(e => Number(e.id || e.Id) === Number(id)))
            .filter(Boolean)
            .map(e => `${e.firstName || e.FirstName || ""} ${e.lastName || e.LastName || ""}`)
            .join(', ');
    };

    // Filter left side: Department-wide or General/All company syncs
    const departmentMeetings = meetings.filter(m => {
        const deptName = (m.departmentName ?? m.DepartmentName ?? m.department_name ?? "").toLowerCase();
        return deptName === userDept.toLowerCase() || deptName === 'all';
    });

    // Filter right side: Personalized (User is explicitly added as an attendee)
    const personalMeetings = meetings.filter(m => {
        const attendeeIds = m.attendeeIds ?? m.AttendeeIds ?? m.attendee_ids ?? [];
        return Array.isArray(attendeeIds) && attendeeIds.map(Number).includes(currentUserId);
    });

    return (
        <div style={styles.container}>
            {/* Left Side: Department & General Schedule */}
            <div style={styles.halfColumn}>
                <h2 style={styles.columnTitle}>🏢 {userDept} & General Syncs</h2>
                {departmentMeetings.length === 0 ? (
                    <p style={styles.emptyText}>No department meetings scheduled for today.</p>
                ) : (
                    departmentMeetings.map((meet, index) => {
                        const title = meet.title ?? meet.Title ?? meet.title_string ?? "";
                        const timeStr = meet.timeString ?? meet.TimeString ?? meet.time_string ?? "";
                        const deptName = meet.departmentName ?? meet.DepartmentName ?? m.department_name ?? "";
                        const meetLink = meet.meetLink ?? meet.MeetLink ?? meet.meet_link ?? "#";
                        const mId = meet.id ?? meet.Id ?? index;

                        return (
                            <div key={mId} style={styles.meetingCard}>
                                <div style={styles.metaRow}>
                                    <span style={styles.timeBadge}>🕒 {timeStr}</span>
                                    <span style={styles.deptBadge}>{deptName.toUpperCase()}</span>
                                </div>
                                <h3 style={styles.meetTitle}>{title}</h3>
                                <a href={meetLink} target="_blank" rel="noreferrer" style={styles.linkButton}>🎥 Join Google Meet</a>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Right Side: Personalized Onboarding Calendar */}
            <div style={{ ...styles.halfColumn, borderLeft: '1px solid #e2e8f0' }}>
                <h2 style={styles.columnTitle}>👤 My Personal Onboarding Schedule</h2>
                {personalMeetings.length === 0 ? (
                    <p style={styles.emptyText}>Your personal calendar is clear. Time to study documentation!</p>
                ) : (
                    personalMeetings.map((meet, index) => {
                        const title = meet.title ?? meet.Title ?? meet.title_string ?? "";
                        const timeStr = meet.timeString ?? meet.TimeString ?? meet.time_string ?? "";
                        const meetLink = meet.meetLink ?? meet.MeetLink ?? meet.meet_link ?? "#";
                        const attendeeIds = meet.attendeeIds ?? meet.AttendeeIds ?? meet.attendee_ids ?? [];
                        const mId = meet.id ?? meet.Id ?? index;

                        return (
                            <div key={mId} style={{ ...styles.meetingCard, borderLeft: '4px solid #3b82f6' }}>
                                <div style={styles.metaRow}>
                                    <span style={{ ...styles.timeBadge, backgroundColor: '#eff6ff', color: '#1d4ed8' }}>🕒 {timeStr}</span>
                                    <span style={styles.personalBadge}>Personal</span>
                                </div>
                                <h3 style={styles.meetTitle}>{title}</h3>
                                <p style={styles.attendees}>👥 <strong>Attendees:</strong> {getAttendeeNames(attendeeIds) || "Just you"}</p>
                                <a href={meetLink} target="_blank" rel="noreferrer" style={styles.linkButton}>🎥 Join Google Meet</a>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

const styles = {
    container: { display: 'flex', width: '100%', gap: '20px', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '20px', boxSizing: 'border-box' },
    halfColumn: { flex: '1', padding: '10px', display: 'flex', flexDirection: 'column', gap: '15px' },
    columnTitle: { fontSize: '18px', color: '#1e293b', margin: '0 0 10px 0', fontWeight: '600' },
    meetingCard: { padding: '15px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '8px' },
    metaRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    timeBadge: { fontSize: '12px', fontWeight: '600', background: '#f1f5f9', color: '#475569', padding: '4px 8px', borderRadius: '4px' },
    deptBadge: { fontSize: '10px', fontWeight: 'bold', color: '#64748b', tracking: '0.5px' },
    personalBadge: { fontSize: '10px', fontWeight: 'bold', color: '#2563eb', background: '#dbeafe', padding: '2px 6px', borderRadius: '4px' },
    meetTitle: { fontSize: '15px', color: '#1e293b', margin: '0', fontWeight: '600' },
    attendees: { fontSize: '13px', color: '#475569', margin: '0' },
    linkButton: { alignSelf: 'flex-start', marginTop: '5px', padding: '6px 12px', fontSize: '13px', color: '#fff', background: '#16a34a', border: 'none', borderRadius: '6px', cursor: 'pointer', textDecoration: 'none', fontWeight: '500' },
    emptyText: { fontSize: '14px', color: '#94a3b8', fontStyle: 'italic', margin: '20px 0' }
};
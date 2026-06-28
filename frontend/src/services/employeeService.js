import axios from 'axios';

const API_URL = 'http://localhost:5266/api/employees';

// Legacy hardcoded department list kept for backwards compatibility
export const HARDCODED_DEPARTMENTS = [
    { id: 1, name: 'Engineering' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Sales' }
];

// 1. Group employees by department and sort them alphabetically by full name
export function getEmployeesGroupedAndSorted(employees) {
    if (!Array.isArray(employees)) return {};

    const groups = {};
    employees.forEach(emp => {
        const deptName = emp.department?.name || "Unassigned";
        if (!groups[deptName]) {
            groups[deptName] = [];
        }
        groups[deptName].push(emp);
    });

    // Alphabetical sorting logic within each individual department segment
    Object.keys(groups).forEach(deptName => {
        groups[deptName].sort((a, b) =>
            `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
        );
    });

    return groups;
}

// 2. Extract a unique collection of departments dynamically from active profiles
export function getUniqueDepartments(employees = []) {
    const defaultDepts = [
        { id: 1, name: 'Engineering' },
        { id: 2, name: 'Sales' },
        { id: 3, name: 'Marketing' },
        { id: 4, name: 'HR' },
        { id: 5, name: 'Finance' }
    ];

    const deptsMap = {};
    defaultDepts.forEach(d => { deptsMap[d.name.toLowerCase()] = d; });

    // Populate lookup maps if incoming records contain fresh structural properties
    if (Array.isArray(employees)) {
        employees.forEach(emp => {
            if (emp.department?.name) {
                deptsMap[emp.department.name.toLowerCase()] = {
                    id: emp.department.id,
                    name: emp.department.name
                };
            }
        });
    }

    return Object.values(deptsMap);
}

// 3. Compute relative corporate tenure interval tracking in months
export function calculateSeniorityInMonths(hireDateString) {
    if (!hireDateString) return 0;
    const hire = new Date(hireDateString);
    const now = new Date();
    return Math.max(0, (now.getFullYear() - hire.getFullYear()) * 12 + (now.getMonth() - hire.getMonth()));
}

// Fetch complete profile listing snapshots via standard REST endpoints
export const fetchEmployees = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
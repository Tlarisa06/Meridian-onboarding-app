import axios from 'axios';

const API_URL = 'http://localhost:5266/api/employees';

export const HARDCODED_DEPARTMENTS = [
    { id: 1, name: 'Engineering' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Sales' }
];

// Calculate seniority in months
export const calculateSeniorityInMonths = (hireDateString) => {
    const hireDate = new Date(hireDateString);
    const currentDate = new Date();
    return (currentDate.getFullYear() - hireDate.getFullYear()) * 12 + (currentDate.getMonth() - hireDate.getMonth());
};

// Return fixed list of departments
export const getUniqueDepartments = () => {
    return HARDCODED_DEPARTMENTS;
};

// Group and sort employees by seniority
export const getEmployeesGroupedAndSorted = (employees) => {
    const groups = employees.reduce((acc, emp) => {
        const deptName = emp.department?.name || 'No Department';
        if (!acc[deptName]) {
            acc[deptName] = [];
        }
        acc[deptName].push(emp);
        return acc;
    }, {});

    Object.keys(groups).forEach(deptName => {
        groups[deptName].sort((a, b) => calculateSeniorityInMonths(b.hireDate) - calculateSeniorityInMonths(a.hireDate));
    });

    return groups;
};

// Fetch data from API
export const fetchEmployees = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
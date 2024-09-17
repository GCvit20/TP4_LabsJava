
const fetchUsers = async () => {
    try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

const fetchEmployees = async () => {
    try {
        const response = await fetch('http://localhost:3000/employees');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

const saveEmployee = async (employee) => {
    const response = await fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
};

const fetchEmployeeById = async (id) => {
    const response = await fetch(`http://localhost:3000/employees/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};

const updateEmployee = async (employee, id) => {
    const response = await fetch(`http://localhost:3000/employees/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
};

const deleteEmployee = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/employees/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        throw error;
    }
};

export { fetchUsers, saveEmployee, fetchEmployeeById, updateEmployee, fetchEmployees, deleteEmployee };

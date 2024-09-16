"use client";
import React, { useState, useEffect } from 'react';
import { EmployeeList } from '../components';


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

const HomeContainer = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showEditModal, setModModal] = useState(false);

    useEffect(() => {
        refreshEmployees();
    }, []);

    const refreshEmployees = () => {
        fetchEmployees()
            .then((data) => {
                setEmployees(data);
            })
            .catch(error => {
                console.error('Error refreshing employee list:', error);
            });
    };

    const handleMod = (employee) => {
        setSelectedEmployee(employee);
        setModModal(true);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/employees/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            refreshEmployees();
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <EmployeeList
            employees={employees}
            onDelete={handleDelete}
            onMod={handleMod}
            showEditModal={showEditModal}
            setShowEditModal={setModModal}
            selectedEmployee={selectedEmployee}
        />
    );
};

export default HomeContainer;
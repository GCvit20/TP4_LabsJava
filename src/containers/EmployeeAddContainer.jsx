"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeForm } from "../components";

const saveEmployee = async (employee) => {
    try {
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
    } catch (error) {
        console.error('Error saving employee:', error);
        throw error;
    }
};

const EmployeeAddContainer = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: '',
        position: '',
        departament: '',
        email: '',
        phone: ''
    });
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const handleSubmit = async (employeeData) => {
        setLoading(true);
        try {
            await saveEmployee(employeeData);
            navigate('/home');
        } catch (error) {
            console.error('Error saving employee:', error);
            setError('Failed to save employee.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <EmployeeForm
                employee={employee}
                onSubmit={handleSubmit}
                isEdit={false}
                onChange={handleChange} 
            />
        </div>
    );
};

export default EmployeeAddContainer;
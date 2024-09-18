"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeForm } from "../components";
import { saveEmployee } from '../db/api';

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
            navigate('/employee');
        } catch (error) {
            setError('No se pudo guardar el empleado.');
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
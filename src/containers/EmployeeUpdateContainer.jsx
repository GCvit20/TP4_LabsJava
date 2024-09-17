import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EmployeeForm } from "../components";
import { updateEmployee, fetchEmployeeById } from '../db/api';

const EmployeeUpdateContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: '',
        position: '',
        departament: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            fetchEmployeeById(id)
                .then((data) => {
                    setEmployee(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching employee:', error);
                    setError('Failed to fetch employee.');
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [id]);

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
            await updateEmployee(employeeData, id);
            navigate('/home');
        } catch (error) {
            console.error('Error updating employee:', error);
            setError('Failed to update employee.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <EmployeeForm
                employee={employee}
                onSubmit={handleSubmit}
                isEdit={true}
                onChange={handleChange}
            />
        </div>
    );
};

export default EmployeeUpdateContainer;
"use client";
import React, { useState, useEffect } from 'react';
import { EmployeeList } from '../components';
import { fetchEmployees, deleteEmployee } from "../db/api";

const EmployeeContainer = () => {
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
                console.error('No se pudo refrescar la lista:', error);
            });
    };

    const handleMod = (employee) => {
        setSelectedEmployee(employee);
        setModModal(true);
    };

    const handleDelete = async (id) => {
        try {
            await deleteEmployee(id);
            refreshEmployees();
        } catch (error) {
            console.error('No se pudo eliminar el empleado:', error);
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

export default EmployeeContainer;
"use client";
import React from 'react';
import styles from './EmployeeList.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EmployeeList = ({
    employees,
    onDelete,
    onMod,
    showEditModal,
    setShowEditModal,
    selectedEmployee
}) => {
    return (
        <div className={styles.employeeList}>
            <h2 className={styles.title}>Lista de empleados</h2>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Posicion</th>
                        <th>Departamento</th>
                        <th>Email</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.departament}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>
                                <Link
                                    to={`/${employee.id}`}
                                    className={`${styles.button} ${styles.edit}`}
                                    onClick={() => onMod(employee)}
                                >
                                    Modificar
                                </Link>
                            </td>
                            <td>
                                <button
                                    className={`${styles.button} ${styles.delete}`}
                                    onClick={() => onDelete(employee.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className={styles.addButtonContainer}>
                <Link to="/add" className={styles.addButton}>
                    Agregar Empleado
                </Link>
            </div>
        </div>
    );
};

export default EmployeeList;
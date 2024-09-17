"use client";
import PropTypes from 'prop-types';
import styles from './EmployeeForm.module.css';
import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ employee, onSubmit, isEdit, onChange }) => {

    const [formData, setFormData] = useState(employee);

    useEffect(() => {
        setFormData(employee);
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        onChange(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <section className={styles.formSection}>
            <div className={styles.formContainer}>
                <h2>{isEdit ? 'Modificar Empleado' : 'Agregar Empleado'}</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="position">Posición:</label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={formData.position || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="departament">Departamento:</label>
                        <input
                            type="text"
                            id="departament"
                            name="departament"
                            value={formData.departament || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Teléfono:</label>
                        <input
                            type="number"
                            id="phone"
                            name="phone"
                            value={formData.phone || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        {isEdit ? 'Actualizar Empleado' : 'Agregar Empleado'}
                    </button>
                </form>
            </div>
        </section>
        
    );
};

EmployeeForm.propTypes = {
    employee: PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string,
        departament: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
    isEdit: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
};

export default EmployeeForm;
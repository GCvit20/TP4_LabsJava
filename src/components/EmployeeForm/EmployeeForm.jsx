"use client";
import PropTypes from 'prop-types';
import styles from './EmployeeForm.module.css';
import React, { useState, useEffect } from 'react';
import useValidations from '../../hooks/useValidations';

const EmployeeForm = ({ employee, onSubmit, isEdit, onChange }) => {
    const [formData, setFormData] = useState(employee);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(employee);
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (onChange) {
            onChange(e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = useValidations(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            onSubmit(formData);
        }
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
                        {errors.name && <span className={styles.error}>{errors.name}</span>}
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
                        {errors.position && <span className={styles.error}>{errors.position}</span>}
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
                        {errors.departament && <span className={styles.error}>{errors.departament}</span>}
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
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Teléfono:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone || ''}
                            onChange={handleChange}
                            required
                        />
                        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
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
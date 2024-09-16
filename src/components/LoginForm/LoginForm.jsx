"use client";
import React from "react";
import styles from "./LoginForm.module.css";

const LoginForm = ({
  values,
  handleChange,
  handleSubmit,
  loading,
  error,
}) => {
  
  if (loading) {
    return <div className={styles.spinner}></div>;
  }

  return (
    <div className={styles.loginform}>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={values.username || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default LoginForm;
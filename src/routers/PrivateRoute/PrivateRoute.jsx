"use client";
import React from 'react';
import styles from './PrivateRoute.module.css';
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { useAuthContext } from '../../context/AuthContext';

const PrivateRoute = ({children}) => {
    const { isLogged, loading } = useAuthContext();

    if(loading) {
        return <div className={styles.spinner}></div>;
    }
    
    if(!isLogged) {
        return <Navigate to="/" />;
    }

    return children;
};

PrivateRoute.propTypes = {};

export default PrivateRoute;
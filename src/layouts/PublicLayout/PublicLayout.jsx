"use client";
import React from 'react';
import styles from './PublicLayout.module.css';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
	return <div className={styles.publiclayout}><Outlet /></div>
};

PublicLayout.propTypes = {};

export default PublicLayout;
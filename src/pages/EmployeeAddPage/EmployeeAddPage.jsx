"use client";
import React from 'react';
import styles from './EmployeeAddPage.module.css';
import PropTypes from 'prop-types';
import EmployeeAddContainer from '../../containers/EmployeeAddContainer';

const EmployeeAddPage = ({}) => {
	return (
		<div className={styles.employeeaddpage}>
 			<EmployeeAddContainer />
 		</div>
	);
};

EmployeeAddPage.propTypes = {};

export default EmployeeAddPage;
"use client";
import React from 'react';
import styles from './EmployeeUpdatePage.module.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { EmployeeUpdateContainer } from '../../containers';

const EmployeeUpdatePage = ({}) => {

	const {id} = useParams();

	return (
		<div className={styles.employeeupdatepage}>
 			<EmployeeUpdateContainer />
 		</div>
	);
};

EmployeeUpdatePage.propTypes = {};

export default EmployeeUpdatePage;
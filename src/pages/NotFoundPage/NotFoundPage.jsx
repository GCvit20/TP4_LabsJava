"use client";
import React from 'react';
import styles from './NotFoundPage.module.css';
import PropTypes from 'prop-types';

const NotFoundPage = ({}) => {
	return (
		<div className={styles.notfoundpage}>
 			<h1>404</h1>
 		</div>
	);
};

NotFoundPage.propTypes = {};

export default NotFoundPage;
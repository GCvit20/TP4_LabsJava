"use client";
import React from 'react';
import styles from './PrivateLayout.module.css';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';

const PrivateLayout = () => {

	return (
		<div className={styles.privatelayout}>
		  <header className={styles.header}>
				<Navbar />
		  </header>
		  <main className={styles.main}>
			<Outlet />
		  </main>
		</div>
	  );
	};

PrivateLayout.propTypes = {};

export default PrivateLayout;
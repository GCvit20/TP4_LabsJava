"use client";
import React from 'react';
import styles from './PrivateLayout.module.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks';

const PrivateLayout = () => {
	const {onLogout} = useAuth();
	const navigate = useNavigate();

	const handleOnLogout = () => {
		onLogout();
		navigate('/login');
	};
	
	return (
		<div className={styles.privatelayout}>
		  <header className={styles.header}>
			<nav>
			  <ul>
				<li>
				  <NavLink to="/home"><i class="fa-solid fa-arrow-left"></i></NavLink>
				</li>
			  </ul>
			</nav>
			<button
				type="button"
				className={styles.button}
				onClick={handleOnLogout}
				>
				Cerrar sesión
        	</button>
		  </header>
		  <main className={styles.main}>
			<Outlet />
		  </main>
		  <footer className={styles.footer}>
			<p>By Gaston Cvitanich @ 2024</p>
		  </footer>
		</div>
	  );
	};

PrivateLayout.propTypes = {};

export default PrivateLayout;
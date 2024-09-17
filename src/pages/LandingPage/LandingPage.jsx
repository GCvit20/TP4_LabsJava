"use client";
import React from 'react';
import styles from './LandingPage.module.css';
import PropTypes from 'prop-types';
import { Navbar } from '../../components';

const LandingPage = () => {
	
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div className={styles.landing}>
				<div className={styles.overlay}>
					<h1>Gestión de Empleados</h1>
					<p>
						Bienvenido a EmployeeHub, tu solución integral para la gestión de empleados. Nuestra plataforma está diseñada para simplificar y 
						optimizar todos los aspectos relacionados con la administración de tu equipo de trabajo. Desde la contratación y la incorporación
						hasta la evaluación del rendimiento y la gestión de nóminas, EmployeeHub te proporciona herramientas eficientes y fáciles de usar 
						para mantener a tu empresa en marcha sin complicaciones. Con funcionalidades avanzadas como la carga de empleados, modificacion
						y eliminacion de los mismos, nuestra plataforma te permite centrarte en lo que realmente importa: el crecimiento y desarrollo de 
						tu equipo. Descubre cómo EmployeeHub puede transformar la forma en que gestionas a tus empleados y eleva la eficiencia de tu organización.
					</p>
				</div>
			</div>
		</>
	);
};

LandingPage.propTypes = {};

export default LandingPage;
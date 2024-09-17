"use client";
import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks';

const Navbar = () => {

	const navigate = useNavigate();
	const location = useLocation(); 
	const { onLogout } = useAuth();

	const handleLogin = () => {
		navigate("/login");
	}

	const handleLogout = () => {
		onLogout();
		navigate("/");
	};

	const handleLanding = () => {
		if (location.pathname === "/home" || location.pathname === "/add" || location.pathname.startsWith("/")) {
			navigate("/home");
		  } else {
			navigate("/");
		  } 	  
	}

	
	 const isHomePage = location.pathname === "/home";
	 const isAddPage = location.pathname === "/add";
	 const isDynamicPage = location.pathname.split('/').length > 1 && location.pathname.split('/')[1].length > 0;
   
	 const showBackButton = isHomePage || isAddPage || isDynamicPage;
   
	 const showLoginButton = !(isHomePage || isAddPage || isDynamicPage);
	 const showLogoutButton = isHomePage;

	return (
	  <div className={styles.navbar}>
		<nav>
		  <ul>
		  	<li onClick={handleLanding}>
			  {showBackButton ? (
              <i className="fa-solid fa-arrow-left"></i>
            ) : (
              <i className="fas fa-home"></i> 
            )}
			</li>
		  </ul>
		</nav>
		{showLoginButton && (
        <div>
          <button className={styles.button} onClick={handleLogin}>Login</button>
        </div>
      )}
      {showLogoutButton && (
        <div>
          <button className={styles.button} onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}
	  </div>
	);
  };

Navbar.propTypes = {};

export default Navbar;
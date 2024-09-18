"use client";
import React from "react";
import styles from "./EmployeePage.module.css";
import { EmployeeContainer } from "../../containers";

const EmployeePage = () => {
  
  return (
		<div className={styles.employeepage}>
			<EmployeeContainer />
		</div>
	);
};

export default EmployeePage;
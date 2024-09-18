import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, LandingPage, EmployeeAddPage, EmployeeUpdatePage, HomePage, EmployeePage } from "../pages";
import PublicLayout from "../layouts/PublicLayout/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout/PrivateLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>

                <Route element={<PrivateRoute><PrivateLayout /></PrivateRoute>}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/employee" element={<EmployeePage />} />
                    <Route path="/add" element={<EmployeeAddPage />} />
                    <Route path="/:id" element={<EmployeeUpdatePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
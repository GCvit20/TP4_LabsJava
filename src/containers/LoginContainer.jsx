"use client";
import React, { useEffect } from "react";
import { LoginForm } from "../components";
import { useForm } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';

const LoginContainer = () => {
  const { isLogged, onLogin, loading, error } = useAuthContext();
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useForm({
    username: "",
    password: "",
  });

  const submitForm = async () => {
    await onLogin(values.username, values.password);
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged, navigate]); 

  return (
    <LoginForm
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit(submitForm)}
      loading={loading}
      error={error} 
    />
  );
};

export default LoginContainer;


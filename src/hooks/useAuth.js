import { useEffect, useState } from "react";

const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
    setLoading(false);
  }, []);

  const onLogin = async (username, password) => {
    setLoading(true);
    try {
      const users = await fetchUsers();

      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        let fakeToken = "124357689"; 
        localStorage.setItem("token", fakeToken);
        setIsLogged(true);
        setError("");
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      setError("Error en el inicio de sesión");
    } finally {
      setLoading(false);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);

  };

  return { isLogged, onLogin, onLogout, loading, error };
};

export default useAuth;

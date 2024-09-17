import { useEffect, useState } from "react";
import { fetchUsers } from "../db/api";

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
    window.location.reload();
  };

  return { isLogged, onLogin, onLogout, loading, error };
};

export default useAuth;

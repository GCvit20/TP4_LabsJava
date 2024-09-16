import { LoginContainer } from "../../containers";
import { useAuth } from "../../hooks";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  
  const {onLogin} = useAuth();
  
  return (
    <div className={styles.loginPage}>
      <LoginContainer onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;

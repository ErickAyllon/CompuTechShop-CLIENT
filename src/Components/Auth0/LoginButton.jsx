import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './LoginButton.module.css'

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className={styles.logInButton} onClick={() => {loginWithRedirect()}}>
      <p>Login</p>
    </button>);
}

export default LoginButton;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './LogOutButton.module.css'

export default function LogOutButton() {
  const { logout } = useAuth0();
  return (
    <button className={styles.logOutButton} onClick={() => logout()}><p>Log Out</p></button>
  )
}

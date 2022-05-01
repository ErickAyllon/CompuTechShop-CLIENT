import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './LogOutButton.module.css'

export default function LogOutButton() {
  const { logout } = useAuth0();
  return (
    <span onClick={() => logout()}>Log Out</span>
  )
}

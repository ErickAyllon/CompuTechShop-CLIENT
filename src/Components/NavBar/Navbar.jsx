import React from 'react'
import LogOutButton from '../LogOutButton'
import LoginButton from '../LoginButton'
import Profile from '../Profile'
import { useAuth0 } from "@auth0/auth0-react";
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar';

function NavBar() {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className={styles.NavBar}>
      <SearchBar />
      <div className={styles.auth0}>
        {isAuthenticated ? <LogOutButton /> : <LoginButton />}
        <Profile />
      </div>
    </nav>
  )
}

export default NavBar
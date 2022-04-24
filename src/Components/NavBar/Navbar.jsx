import React from 'react'
import Profile from '../Auth0/Profile.jsx'
import LoginButton from '../Auth0/LoginButton.jsx'
import LogOutButton from '../Auth0/LogOutButton.jsx'
import { useAuth0 } from "@auth0/auth0-react";
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

function NavBar() {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className={styles.NavBar}>
      <div className={styles.logo}>
        <Link to="/">
          
        </Link>
      </div>
      <div className={styles.searchBarCall}>
        <SearchBar />
      </div>
      <div className={styles.auth0}>
        <Profile />
        {isAuthenticated ? <LogOutButton /> : <LoginButton />}
      </div>
    </nav>
  )
}

export default NavBar
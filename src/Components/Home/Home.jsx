import React from 'react'
import styles from './Home.module.css'
import LogOutButton from '../LogOutButton'
import LoginButton from '../LoginButton'
import Profile from '../Profile'
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
    const { isAuthenticated } = useAuth0();
  return (
    <div className={styles.home}>
        <div className="App">
            <h1>Funca viejaaaaaaaaa</h1>
            {isAuthenticated ? <LogOutButton /> : <LoginButton />}
        </div>
      <Profile />
    </div>
  )
}

export default Home
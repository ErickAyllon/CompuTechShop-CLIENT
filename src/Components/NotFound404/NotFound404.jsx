import React from 'react'
import NavBar from '../NavBar/Navbar'
import styles from './NotFound404.module.css'

function NotFound404() {
  return (
    <div className={styles.notFound404}>
      <NavBar />
        ERROR 404 NOT FOUND
    </div>
  )
}

export default NotFound404
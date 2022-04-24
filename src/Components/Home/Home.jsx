import React from 'react'
import styles from './Home.module.css'
import NavBar from '../NavBar/Navbar'
import Footer from '../../Footer/Footer'

function Home() {
  return (
    <div className={styles.home}>
      <NavBar />
      <div className={styles.homeContent}>
        <h1>Home</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Home
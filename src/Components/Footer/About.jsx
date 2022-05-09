import React from 'react'
import NavBar from '../NavBar/Navbar'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.letter}>
      <NavBar />
        <h1> 
            We are a young company made by young people who are passionate about technology. 
            Our mission is to bring options to those who seek it and to provide them with the best possible experience.
        </h1>
        </div>
  )
}

import React from 'react'
import NavBar from '../NavBar/Navbar'
import styles from './WorkWithUs.module.css'
import {Link} from 'react-router-dom'

export default function WorkWithUs() {
  return (
    <div className={styles.background}>
      <NavBar/>
      
    <div className={styles.caja}> 
      <h1>
      If you need urgent asistance please call us at: +54 9 11 22 33 44
      </h1>
      <h2 > 
      For more information please send an email to:
            computechshop@computechshop.com        </h2>
        <div> 

    </div>
        <Link to='/'>
    <button>Back</button>
        </Link>
  </div>
        </div>
        
  )
}

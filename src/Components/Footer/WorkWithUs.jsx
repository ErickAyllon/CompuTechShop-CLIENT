import React from 'react'
import styles from './WorkWithUs.module.css'
import {Link} from 'react-router-dom'

export default function WorkWithUs() {
  return (
    <div >
 
      
    
    <div className={styles.caja}> 
        <h1 className={styles.text}>
        Become part of the dream team!
      </h1>
      <h2 > 
        If you are interested in working at Compu Tech Shop, please attach your resume or cv, and a video telling us why we should hire you to computechshop@computechshop.com
        </h2>
        <div> 


    </div>
        <Link to='/'>
    <button>Back</button>
        </Link>
  </div>
        </div>
        
  )
}
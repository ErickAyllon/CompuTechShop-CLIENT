import React from 'react'
import styles from './Categories.module.css'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className={styles.categories}>
        <div className={styles.category}>
            <Link to='/laptops'>
                <img src="https://img.icons8.com/ios-filled/100/ffffff/laptop.png"/>
            </Link>
            <span>Laptops</span>
        </div>
        <div className={styles.category}>
            <Link to='/monitors'>
                <img src="https://img.icons8.com/ios-filled/100/ffffff/monitor--v1.png"/>
            </Link>
            <span>Monitors</span>
        </div>
        <div className={styles.category}>
            <Link to='/monitors'>
                <img src="https://img.icons8.com/ios-filled/100/ffffff/generic-mouse.png"/>
            </Link>
            <span>Mouses</span>
        </div>
        <div className={styles.category}>
            <Link to='/monitors'>
                <img src="https://img.icons8.com/ios-filled/50/ffffff/headset.png"/>
            </Link>
            <span>Headsets</span>
        </div>
        <div className={styles.category}>
            <Link to='/monitors'>
                <img src="https://img.icons8.com/ios-filled/100/ffffff/keyboard.png"/>
            </Link>   
            <span>Keyboards</span>
        </div>

    
    </div>
  )
}

export default Categories
import React from 'react'
import styles from './Monitors.module.css'
import Categories from '../Categories'

function Monitors() {
  return (
    <div className={styles.monitors}>
      <Categories />
      This is path="/monitors"
    </div>
  )
}

export default Monitors
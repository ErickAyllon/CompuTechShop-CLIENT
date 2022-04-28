import React from 'react'
import styles from './Filter.module.css'

function Filter() {
  return (
    <div className={styles.filter}>
        <div className={styles.filterContainer}>
          <h1>Filters</h1>
          <p>By Brand</p>
          <p>By Pric</p>
          <p>Etc</p>
        </div>
    </div>
  )
}

export default Filter
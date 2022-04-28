import React from 'react'
import styles from './Mouses.module.css'
import Categories from '../Categories'

function Mouses() {
  return (
    <div className={styles.mouses}>
      <Categories />
      This is path="/mouses"
    </div>
  )
}

export default Mouses
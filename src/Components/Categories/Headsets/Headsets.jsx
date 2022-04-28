import React from 'react'
import styles from './Headsets.module.css'
import Categories from '../Categories';

function Headsets() {
  return (
    <div className={styles.headsets}>
      <Categories />
      This is path="/headsets"
    </div>
  )
}

export default Headsets
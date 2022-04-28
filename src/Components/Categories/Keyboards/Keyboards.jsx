import React from 'react'
import styles from './Keyboards.module.css'
import Categories from '../Categories';

function Keyboards() {
  return (
    <div className={styles.keyboards}>
      <Categories />
      This is path="/keyboards"
    </div>
  )
}

export default Keyboards
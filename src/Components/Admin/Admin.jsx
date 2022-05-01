import React from 'react';
import ProductCreate from '../ProductCreate/ProductCreate';
import styles from './Admin.module.css'

function Admin() {
  return (
    <div className={styles.adminContainer}>
      <ProductCreate />
    </div>
  )
}

export default Admin
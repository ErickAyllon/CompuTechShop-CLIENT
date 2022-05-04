import React from 'react';
import styles from './Admin.module.css'
import CategoryCreate from './CategoryCreate/CategoryCreate';
import ProductCreate from './ProductCreate/ProductCreate';

function Admin() {
  return (
    <div className={styles.adminContainer}>
      <ProductCreate />
      <CategoryCreate />
    </div>
  )
}

export default Admin
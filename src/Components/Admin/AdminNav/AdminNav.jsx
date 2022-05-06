import React from 'react'
import styles from './AdminNav.module.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function AdminNav() {
  return (
    <div className={styles.adminNav}>
        <Link to='/admin'>
          <Button variant="outlined">Admin Home</Button>
        </Link>
        <Link to='/admin/products/Allproducts'>
          <Button variant="outlined">Products</Button>
        </Link>
        <Link to='/admin/products/createProduct'>
          <Button variant="outlined">Create Product</Button>
        </Link>
        <Link to='/admin/categories'>
          <Button variant="outlined">Categories</Button>
        </Link>
        <Link to='/admin/allorders'>
          <Button variant="outlined">Orders</Button>
        </Link>
    </div>
  )
}

export default AdminNav
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import styles from './AdminNav2.module.css'

function AdminNav2() {
  return (
    <div className={styles.adminNavBar}>
        <div className={styles.adminButtons}>
          <Link to='/admin/products/Allproducts'>
            <Button variant="outlined" style={{margin: '0 10px'}}>Products</Button>
          </Link>
          <Link to='/admin/categories'>
            <Button variant="outlined" style={{margin: '0 10px'}}>Categories</Button>
          </Link>
          <Link to='/admin/allorders'>
            <Button variant="outlined" style={{margin: '0 10px'}}>Orders</Button>
          </Link>
          <Link to='/admin/users'>
            <Button variant="outlined" style={{margin: '0 10px'}}>Users</Button>
          </Link>
        </div>
    </div>
  )
}

export default AdminNav2
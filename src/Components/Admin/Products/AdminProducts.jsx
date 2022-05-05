import React from 'react'
import AdminNav from '../AdminNav/AdminNav'
import styles from './AdminProducts.module.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function AdminProducts() {
  return (
    <div className={styles.adminProducts}>
        <AdminNav />
        <Link to='/admin/products/createProduct'>
              <Button variant="outlined">Create Product</Button>
        </Link>
    </div>
  )
}


export default AdminProducts
import React from 'react'
import AdminNav from '../AdminNav/AdminNav'
import styles from './AdminProducts.module.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import AllProductsAdmin from './Categories/AllProducts/AllProductsAdmin'

function AdminProducts() {
  return (
    <div className={styles.adminProducts}>
        <AdminNav />
        <AllProductsAdmin/>
    </div>
  )
}


export default AdminProducts
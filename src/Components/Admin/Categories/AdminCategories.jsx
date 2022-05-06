import React from 'react'
import AdminNav from '../AdminNav/AdminNav'
import styles from './AdminCategories.module.css'
import CategoryCreate from './CategoryCreate/CategoryCreate'
import ViewCategories from './ViewCategories/ViewCategories'

function AdminCategories() {
  return (
    <div className={styles.adminCategories}>
      <AdminNav/>
      <ViewCategories/>
      <CategoryCreate/>
    </div>
  )
}

export default AdminCategories
import React from 'react'
import styles from './AdminNav.module.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function AdminNav() {
  return (
    <div className={styles.adminNav}>
        <Link to='/admin'>
          <Button variant="outlined">Admin panel</Button>
        </Link>
    </div>
  )
}

export default AdminNav
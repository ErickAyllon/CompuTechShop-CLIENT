import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { authenticate, getShops, getUser } from "../../Redux/Actions";
import styles from './Admin.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AdminNav from './AdminNav/AdminNav';
import NavBar from '../NavBar/Navbar';
import { TextField } from '@mui/material';

function Admin() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const adminPro = {
    given_name: 'Fabricio',
    is_admin_pro: true
  }

  const real = "lucasselacome"

  function handleAdmin(e) {
    if (password === real) {
      dispatch(authenticate(adminPro))
    } else {
      e.preventDefault();
      setPasswordError('Password invalid')
    }
  }

  function handlePassword(e) {
    e.preventDefault()
    setPassword(e.target.value)
    setPasswordError('')
  }

  return (
    <div className={styles.admin}>
      <NavBar />
      <div className={styles.adminContainer}>
        <div className={styles.adminCard}>
            <div className={styles.password}>
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  error={passwordError ? true : false}
                  onChange={handlePassword}
                  helperText={passwordError}
                  style={{width:'36ch'}}
                />
            </div>
            <div className={styles.loginAdmin}>
              <Link to='/admin/products/Allproducts'>
                <Button onClick={handleAdmin} variant="outlined">Admin Login</Button>
              </Link>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Admin
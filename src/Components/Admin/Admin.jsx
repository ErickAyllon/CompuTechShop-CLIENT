import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getShops, getUser } from "../../Redux/Actions";
import styles from './Admin.module.css';
import ShopCard from './Orders/ShopCard/ShopCard';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AdminNav from './AdminNav/AdminNav';
import NavBar from '../NavBar/Navbar';

function Admin() {
  const dispatch = useDispatch();
  let shops = useSelector((state) => state.shops);

  useEffect(() => {
    
    dispatch(getUser())
    dispatch(getShops());
  }, [dispatch]);


  return (
    <div className={styles.admin}>
      <NavBar />
      <div className={styles.adminContainer}>
        <div className={styles.adminCard}>
          <div className={styles.adminCardContainer}>
            <Link to='/admin/products/Allproducts'>
              <Button variant="outlined">Acá iría el Admin Login</Button>
            </Link>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Admin
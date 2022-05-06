import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getShops, getUser } from "../../Redux/Actions";
import styles from './Admin.module.css';
import ShopCard from './Orders/ShopCard/ShopCard';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AdminNav from './AdminNav/AdminNav';

function Admin() {
  const dispatch = useDispatch();
  let shops = useSelector((state) => state.shops);

  useEffect(() => {
    
    dispatch(getUser())
    dispatch(getShops());
  }, [dispatch]);


  return (
    <div className={styles.admin}>
      {/* <AdminNav/> */}
      <div className={styles.adminContainer}>
        <div className={styles.adminCard}>
          <div className={styles.adminCardContainer}>
            {/* <h4>PRODUCTS</h4> */}
            <Link to='/admin/products'>
              <Button variant="outlined">Products</Button>
            </Link>
            {/* <Link to='/admin/createProduct'>
              <Button variant="outlined">Create Products</Button>
            </Link> */}
          </div>
        </div>
        <div className={styles.adminCard}>
          <div className={styles.adminCardContainer}>
            {/* <h4>CATEGORIES</h4> */}
            <Link to='/admin/categories'>
              <Button variant="outlined">categories</Button>
            </Link>
          </div>
        </div>
        <div className={styles.adminCard}>
          <div className={styles.adminCardContainer}>

            {/* <h4>ORDERS</h4> */}
            <Link to="/admin/allorders">
              <Button variant="outlined">Orders</Button>
            </Link>
          </div>
        </div>
        <div className={styles.adminCard}>
          <div className={styles.adminCardContainer}>

            {/* <h4>ORDERS</h4> */}
            <Link to="/admin/users">
              <Button variant="outlined">Users</Button>
            </Link>
          </div>
        </div>
        {/* {shops ? shops.map(el => {
          return(
            <ShopCard
            amount={el.amount}
            date={el.date}
            payment={el.payment}
            state={el.state}
            userId={el.userId}
            products={el.products}
            id={el.id}
            key={el.id}
            />
          )
        }) : null} */}
      {/* <CategoryCreate /> */}
     </div>
    </div>
  )
}

export default Admin
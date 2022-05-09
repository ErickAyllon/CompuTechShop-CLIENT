import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getShops, getUser } from "../../../../Redux/Actions";
import styles from './ViewAllOrders.module.css';
import ShopCard from '../ShopCard/ShopCard';
//import { Link } from 'react-router-dom';
//import Button from '@mui/material/Button';
//import AdminNav from './AdminNav/AdminNav';
import ProductNotFound from '../../../ProductNotFound/ProductNotFound'
import AdminNav from '../../AdminNav/AdminNav'
import AdminNav2 from '../../AdminNav/AdminNav2';

function ViewAllOrders({ amount, date, payment, state, userId, products, id }){
  const dispatch = useDispatch();

  

  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  const shops = useSelector((state) => state.shops);



    return (
      <div className={styles.viewAllOrders}>
        <AdminNav/>
        <AdminNav2 />
        {
          shops.length ? shops.map(el => {
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
          }) : <ProductNotFound />
        }
      </div>
    )
}

export default ViewAllOrders
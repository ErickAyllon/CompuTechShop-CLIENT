import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getShops, getUser } from "../../../../Redux/Actions";
//import styles from './Admin.module.css';
import ShopCard from '../ShopCard/ShopCard';
//import { Link } from 'react-router-dom';
//import Button from '@mui/material/Button';
//import AdminNav from './AdminNav/AdminNav';
import NotFound404 from '../../../NotFound404/NotFound404';
import AdminNav from '../../AdminNav/AdminNav'

function ViewAllOrders(){
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getShops());
    console.log('shops',shops)
  }, [dispatch]);

  const shops = useSelector((state) => state.shops);

    return (
      <div>
        <AdminNav/>
        {/* <h1>hola</h1> */}
        {
          shops.length ? 
          <div>
            <span>ID</span>
            <span>EMAIL</span>
            <span>AMOUNT</span>
            <span>DATE</span>
            <span>DATE</span>
          </div>
          :null
        }
        {
          shops.length ? shops.map(el => {
            return(
              <ShopCard
              amount={el.amount}
              date={el.date}
              payment={el.payment}
              state={el.state}
              email={el.userEmail}
              products={el.products}
              id={el.id}
              key={el.id}
              />
            )
          }) : <NotFound404/>
        }
      </div>
    )
}

export default ViewAllOrders
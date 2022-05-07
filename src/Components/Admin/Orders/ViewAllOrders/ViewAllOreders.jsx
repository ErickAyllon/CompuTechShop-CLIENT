import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getShops, getUser, sortOrderByEmail, sortOrderByAmount } from "../../../../Redux/Actions";
import styles from './ViewAllOrders.module.css';
import ShopCard from '../ShopCard/ShopCard';
//import { Link } from 'react-router-dom';
//import Button from '@mui/material/Button';
//import AdminNav from './AdminNav/AdminNav';
import ProductNotFound from '../../../ProductNotFound/ProductNotFound'
import AdminNav from '../../AdminNav/AdminNav'
import AdminNav2 from '../../AdminNav/AdminNav2';
import {Box, TextField, MenuItem, Button } from '@mui/material/';

function ViewAllOrders(){
  const dispatch = useDispatch();
  const [order, setOrder] = useState('Sort alphabetically')


  useEffect(() => {
    dispatch(getShops());
    console.log('shops',shops)
  }, [dispatch]);


  const shops = useSelector((state) => state.shops);

  function handleSortByEmail(e) {
    e.preventDefault()
    dispatch(sortOrderByEmail(e.target.value))
    setOrder(e.target.value)
  }

  function handleSortByAmount(e) {
    e.preventDefault()
    dispatch(sortOrderByAmount(e.target.value))
    setOrder(e.target.value)
  }

    return (
      <div className={styles.viewAllOrders}>
        <AdminNav/>
        <AdminNav2 />

        <TextField
        sx={{
          '& > :not(style)': { m: .1, display: 'flex', width: '18ch', color:'white' },
        }}
        variant="outlined"
        id="outlined-select-currency"
        select
        label="Purchase value"
        // value={order}
        // onChange={(e) => handleSortByLastName(e)}
      > 
        <MenuItem value='higher-value'>Higher value</MenuItem>
        <MenuItem value='lower-value'>Lower value</MenuItem>
      </TextField>

      <TextField
        sx={{
          '& > :not(style)': { m: .1, display: 'flex', width: '18ch', color:'white' },
        }}
        variant="outlined"
        id="outlined-select-currency"
        select
        label="Sort by email"
        // value={order}
        // onChange={(e) => sortOrderByEmail(e)}
      > 
        <MenuItem value='Sort'>Sort</MenuItem>
        <MenuItem value='a-z'>A-Z</MenuItem>
        <MenuItem value='z-a'>Z-A</MenuItem>
      </TextField>

      <TextField
        sx={{
          '& > :not(style)': { m: .1, display: 'flex', width: '18ch', color:'white' },
        }}
        variant="outlined"
        id="outlined-select-currency"
        select
        label="Sort by Amount"
        // value={order}
        // onChange={(e) => handleSortByAmount(e)}
      > 
        <MenuItem value='Sort'>Sort</MenuItem>
        <MenuItem value='higher-amount'>Higher amount</MenuItem>
        <MenuItem value='lower-amount'>Lower amount</MenuItem>
      </TextField>

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
          }) : <ProductNotFound />
        }
      </div>
    )
}

export default ViewAllOrders
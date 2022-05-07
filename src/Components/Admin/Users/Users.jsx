import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminNav from '../../Admin/AdminNav/AdminNav';
import { useDispatch } from 'react-redux';
import { getUser, sortUsersByLastName } from '../../../Redux/Actions/index';
import UserCard from './UserCard'
import ProductNotFound from '../../ProductNotFound/ProductNotFound';
import styles from './Users.module.css'
import AdminNav2 from '../AdminNav/AdminNav2';
import {Box, TextField, MenuItem, Button } from '@mui/material/';



function Users() {
  const allCategories = useSelector((state) => state.categories)
  const dispatch = useDispatch();
  const [order, setOrder] = useState('')

  useEffect(() => {
    dispatch(getUser())
    console.log(users)
  }, [dispatch]);

  const users = useSelector((state) => state.users)

  function handleSortByLastName(e) {
    e.preventDefault()
    dispatch(sortUsersByLastName(e.target.value))
    setOrder(e.target.value)
  }

  return (
    <div className={styles.users}>
      <AdminNav/>
      <AdminNav2/>

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
        label="Sort alphabetically"
        value={order}
        onChange={(e) => handleSortByLastName(e)}
      > 
        {/* <MenuItem value='Sort'>Sort</MenuItem> */}
        <MenuItem value='a-z'>A-Z</MenuItem>
        <MenuItem value='z-a'>Z-A</MenuItem>
      </TextField>

      <div style={{minHeight: '100vh'}}>
      {
        users.length ? 
        <div>
        <span>NAME</span>
        <span>LASTNAME</span>
        <span>EMAIL</span>
        <span>PHONE</span>
        <span>TOTAL ORDERS</span>
        </div>
        : null
      }
      {
        users.length ? 
        users.map(el => {
          return(
            <div key={el.id}>
            <UserCard
            given_name={el.given_name}
            family_name={el.family_name}
            email={el.email}
            phone={el.phone}
            />
            </div>
          )
        }) : <ProductNotFound/>
      }
      </div>
    </div>
  )
}

export default Users
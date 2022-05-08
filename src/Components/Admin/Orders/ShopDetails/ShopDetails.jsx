import React, { useState, useEffect} from 'react'
//import styles from './ProductDetail.module.css'
import { getShopById, getUser, updateShop } from '../../../../Redux/Actions'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound404 from '../../../NotFound404/NotFound404';
import AdminNav from '../../AdminNav/AdminNav'
import AdminNav2 from '../../AdminNav/AdminNav2';
import {Box, TextField, MenuItem, Button } from '@mui/material/';

function ShopDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  const shop = useSelector ((state) => state.shopDetail);
  


  useEffect(() => {
    dispatch(getShopById(id));
    dispatch(getUser());
    // console.log('usuario',shop[0].state)
    setUpdate('')
  }, [dispatch]);

  
  let users = useSelector((state) => state.users);
  let state;
  let user;
  if(shop.length) {
    user = users.filter(u => u.id === shop[0].userId)
    state = shop[0].state
  }
  const [update, setUpdate] = useState(state)

  function handleUpdateState(e){
    e.preventDefault()
    setUpdate(e.target.value)
  }

  function handleClick(e){
    e.preventDefault()
    dispatch(updateShop(id, {state: update}))
    alert('Order updated')
    setUpdate('')
    navigate('/admin/allorders')
    
  }

  return (
    <div>
      <AdminNav/>
      <AdminNav2 />
      {shop.length ? shop.map(el => {
        return(
          <div key={el.id}>
            <span>Date: {el.date}</span><br/>
            {/* <span>State: {el.state}</span><br/> */}
            <span>Email: {el.userEmail}</span><br/>
            <TextField
              sx={{
                '& > :not(style)': { m: .1, display: 'flex', width: '18ch', color:'white' },
              }}
              variant="outlined"
              id="outlined-select-currency"
              select
              label="State"
              value={update}
              onChange={(e) => handleUpdateState(e)}
            > 
              <MenuItem value='In process'>In process</MenuItem>
              <MenuItem value='Paid'>Paid</MenuItem>
              <MenuItem value='On its way'>On its way</MenuItem>
              <MenuItem value='Canceled'>Canceled</MenuItem>
              <MenuItem value='Received'>Received</MenuItem>
            </TextField>
            <span>Payment status: {el.status}</span><br/>
            <span>Amount: {el.total_paid_amount}</span><br/>
            <span>Products: </span>{el.products.map(el => {
              return(
                <div key={el}>
                  <Link to={'/' + el}>{el}</Link>
                </div>
              )
      })} 
          </div>
        )
      })
      

      : <NotFound404/>
      }
      <button onClick={(e) => handleClick(e)}>SAVE</button>
    </div>
  )



}

export default ShopDetail
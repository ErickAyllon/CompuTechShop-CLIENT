import React, { useState, useEffect} from 'react'
//import styles from './ProductDetail.module.css'
import { getShopById, getUser } from '../../../../Redux/Actions'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ShopDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    
    dispatch(getUser());
    dispatch(getShopById(id));
    console.log(user[0].email)
  }, [dispatch]);
  const shop = useSelector ((state) => state.shopDetail);
  let users = useSelector((state) => state.users);
  const user = users.filter(u => u.id === shop[0].userId)

  return (
    <div>
      <span>Date: {shop[0].date}</span><br/>
      <span>State: {shop[0].state}</span><br/>
      <span>Email: {user[0].email}</span><br/>
      <span>Payment: {shop[0].payment}</span><br/>
      <span>Amount: {shop[0].amount}</span><br/>
      <span>Products: </span>{shop[0].products.map(el => {
        return(
          <div key={el}>
          <Link to={'/' + el}>{el}</Link>
          </div>
        )
      })}
    </div>
  )



}

export default ShopDetail
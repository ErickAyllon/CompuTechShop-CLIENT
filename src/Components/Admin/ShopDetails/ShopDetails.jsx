import React, { useState, useEffect} from 'react'
//import styles from './ProductDetail.module.css'
import { getShopById, getUser } from '../../../Redux/Actions'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ShopDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    
    dispatch(getUser());
    dispatch(getShopById(id));
    
   // console.log(user)
  }, [dispatch]);
  const shop = useSelector ((state) => state.shopDetail);
  let users = useSelector((state) => state.users);
  const user = users.filter(u => u.id === shop.userId)

  return (
    <div>
      <span>{shop.date}</span>
      <span>{shop.state}</span>
      <span>{user.email}</span>
      <span>{shop.payment}</span>
      <span>{shop.amount}</span>
      {/* {shop.products.map(el => {
        return(
          <div key={el}>
          <Link to={'/' + el}>{el}</Link>
          </div>
        )
      })} */}
    </div>
  )



}

export default ShopDetail
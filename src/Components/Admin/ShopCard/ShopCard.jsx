import React, { useEffect, useState } from 'react'
//import styles from './ProductCard.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../../Redux/Actions';
import { useNavigate } from 'react-router-dom';




function ShopCard({ amount, date, payment, state, userId, products, id }){
  const dispatch = useDispatch();
  const navigate = useNavigate()
  

  useEffect(() => {
    dispatch(getUser());
    console.log(userId)
  }, [dispatch]);
  let users = useSelector((state) => state.users);
  const user = users.filter(u => u.id === userId)

  const handleClick = () => {
    navigate(`/admin/shop/${id}`)
  }

    return (
      <div>
        <span>{id}</span>
        <span>{user[0].nickname}</span>
        <span>{amount}</span>
        <span>{date}</span>
        <span>{state}</span>
        <button onClick={() => handleClick()}>Details</button>
      </div>
    )
}

export default ShopCard
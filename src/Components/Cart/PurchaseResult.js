import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import CartItem from './CartItem';
import { useAuth0 } from '@auth0/auth0-react';
import { getPayment, getUser } from '../../Redux/Actions/index';
import styles from "./PurchaseSummary.module.css"
export const PurchaseResult = () => {
  const usuarios = useSelector(state => state.users2)
  const dispatch = useDispatch();
  let { search } = useLocation()
  const { user } = useAuth0()
  let query = new URLSearchParams(search)
  let payment = query.get("payment_id")
  let status = query.get("collection_status")
  const navigate = useNavigate()
  const obj = {}
  let mensaje = ""
  obj.payment = payment

  if (user) {
    obj.email = user.email
  }

  function handleClick(e) {
    e.preventDefault()
    if (user) {
      dispatch(getPayment(obj))
      navigate("/")
    }
  }

  switch (status) {
    case "approved":
      mensaje = "Your payment is approved, Thank you for shopping on our website."
      break;
    case "in_process":
      mensaje = "Your payment is pending, we will inform you by mail. Thank you for shopping on our website."
      break;
    case "rejected":
      mensaje = "Your payment is rejected, you can try making the purchase again with another card"
      break;
    default:
      break;
  }


  return (

    <div className={styles.productNotFound}>
      <div className={styles.productNotFoundContainer}>

        <h1>{mensaje}</h1>
        <div className={styles.productNotFoundText}>
        </div>
      </div>
      <button onClick={handleClick}> Back to Site</button>
    </div>



  )
}

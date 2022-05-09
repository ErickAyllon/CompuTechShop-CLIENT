import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import CartItem from './CartItem';
import { useAuth0 } from '@auth0/auth0-react';
import { getPayment, getUser } from '../../Redux/Actions/index';
export const PurchaseResult = () => {
  const usuarios = useSelector(state => state.users2)
  const dispatch = useDispatch();
  let { search } = useLocation()
  const { user } = useAuth0()
  let query = new URLSearchParams(search)
  let payment = query.get("payment_id")
  const navigate = useNavigate()
  const obj = {}

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




  return (
    <div>Purchasse confirm
      <button onClick={handleClick}> Back to Site</button>

    </div>
  )
}

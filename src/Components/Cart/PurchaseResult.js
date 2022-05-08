import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import CartItem from './CartItem';
import { useAuth0 } from '@auth0/auth0-react';
export const PurchaseResult = () => {
  let { search } = useLocation()
  let query = new URLSearchParams(search)
  let payment = query.get("payment_id")
  console.log(payment)
  const { user } = useAuth0()
  // console.log(user.email)

  return (
    <div>Compra confirmada


    </div>
  )
}

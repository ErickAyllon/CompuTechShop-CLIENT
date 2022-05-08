import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import CartItem from './CartItem';
export const PurchaseResult = () => {
  let {search} =useLocation()
  console.log(search)
  let query = new URLSearchParams(search)
  let payment = query.get("payment_id")
  console.log (payment)
 
  return (
    <div>Compra confirmada
      
      
    </div>
  )
}

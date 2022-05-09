import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import CartItem from './CartItem';
import { useAuth0 } from '@auth0/auth0-react';
import { getPayment } from "../../Redux/Actions/index"
export const PurchaseResult = () => {
  const dispatch = useDispatch()
  let obj = {}
  let { search } = useLocation()
  let query = new URLSearchParams(search)
  let payment = query.get("payment_id")
  const { user } = useAuth0()
  obj.email = user.email
  obj.payment = payment
  useEffect(() => {
    dispatch(getPayment(obj));
  }, [dispatch]);

  return (
    <div>Compra confirmada


    </div>
  )
}

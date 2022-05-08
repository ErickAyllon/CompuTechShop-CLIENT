import React, { useState, useEffect} from 'react'
//import styles from './ProductDetail.module.css'
import { getShopById, getUser } from '../../../../Redux/Actions'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound404 from '../../../NotFound404/NotFound404';
import AdminNav from '../../AdminNav/AdminNav'
import AdminNav2 from '../../AdminNav/AdminNav2';

function ShopDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const shop = useSelector ((state) => state.shopDetail);

  useEffect(() => {
    dispatch(getShopById(id));
    dispatch(getUser());
    console.log('usuario',shop)
  }, [dispatch]);

 
  let users = useSelector((state) => state.users);
  let user;
  if(shop.length) {
    user = users.filter(u => u.id === shop[0].userId)
  }

  return (
    <div>
      <AdminNav/>
      <AdminNav2 />
      {shop.length ? shop.map(el => {
        return(
          <div key={el.id}>
            <span>Date: {(Date(el.date).toString())}</span><br/>
            <span>State: {el.state}</span><br/>
            {/* <span>Email: {user[0].email}</span><br/> */}
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
    </div>
  )



}

export default ShopDetail
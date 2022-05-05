import React, { useEffect, useState } from 'react';
import ProductCreate from './ProductCreate/ProductCreate';
import { useDispatch, useSelector } from "react-redux";
import { getShops, getUser } from "../../Redux/Actions";
import styles from './Admin.module.css';
import ShopCard from './ShopCard/ShopCard';
import { Link } from 'react-router-dom';
import CategoryCreate from './CategoryCreate/CategoryCreate';

function Admin() {
  const dispatch = useDispatch();
  let shops = useSelector((state) => state.shops);

  useEffect(() => {
    
    dispatch(getUser())
    console.log(shops)
    dispatch(getShops());
  }, [dispatch]);


  return (
    <div className={styles.adminContainer}>
      <div>
        <h4>PRODUCTS</h4>
        <button>View products</button>
        <Link to='/admin/createProduct'><button>Create product</button></Link>
      </div>
      <div>
        <h4>CATEGORIES</h4>
        <Link to='/admin/categories'><button>View categories</button></Link>
      </div>
      <div>
        <h4>ORDERS</h4>
        <button>View all orders</button>
      </div>
      {/* {shops ? shops.map(el => {
        return(
          <ShopCard
          amount={el.amount}
          date={el.date}
          payment={el.payment}
          state={el.state}
          userId={el.userId}
          products={el.products}
          id={el.id}
          key={el.id}
          />
        )
      }) : null} */}
     {/* <CategoryCreate /> */}
    </div>
  )
}

export default Admin
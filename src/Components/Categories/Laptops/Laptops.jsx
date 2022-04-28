import React, { useState, useEffect} from 'react'
import styles from './Laptops.module.css'
import Categories from '../Categories';
import PaginationC from '../../Pagination/PaginationC';
import { getProducts } from '../../../Redux/Actions';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';

function Laptops() {
  const allProducts = useSelector ((state) => state.allProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.laptops}>
      <Categories />
      <div className={styles.productsCardsContainer}>
        {allProducts.map((el) => {
          return (
              <ProductCard name={el.name} price={el.price} image={el.image} id={el.id} brand={el.brand} description={el.description} calification={el.calification} quantity={el.quantity}/>
          )
        })}
      </div>
      <PaginationC />
    </div>
  )
}

export default Laptops
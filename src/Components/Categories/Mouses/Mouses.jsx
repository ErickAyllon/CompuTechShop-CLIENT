
import React from 'react'
import styles from './Mouses.module.css'
import Categories from '../Categories'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {filterByCategoryMouses} from '../../../Redux/Actions'
import ProductCard from '../../ProductCard/ProductCard'
import { Link } from 'react-router-dom';
import Filter from '../../Filter/Filter'
import PaginationC from '../../Pagination/PaginationC';

function Mouses() {
 
    const allProducts = useSelector ((state) => state.allProducts);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(filterByCategoryMouses());
    }, [dispatch]);
   
  
  return (
    <div className={styles.mouses}>
      <Categories />
      <div className={styles.productsContainer}>
        <Filter />
        <div className={styles.productsCardsContainer}>
          {allProducts.map((el) => {
            return (
                <ProductCard 
                  name={el.name} 
                  price={el.price} 
                  image={el.image} 
                  id={el.id} 
                  brand={el.brand} 
                  description={el.description} 
                  calification={el.calification} 
                  quantity={el.quantity}/>
            )
          })}
        </div>
      </div>
        <PaginationC />
    </div>
  )
}

export default Mouses
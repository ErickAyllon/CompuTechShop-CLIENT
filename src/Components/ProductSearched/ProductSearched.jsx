import React from 'react'
import styles from './ProductSearched.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getProductsByName } from '../../Redux/Actions'
import Categories from '../Categories/Categories'
import Filter from '../Filter/Filter'
import ProductCard from '../ProductCard/ProductCard'
import PaginationC from '../Pagination/PaginationC.jsx'
import { useParams } from 'react-router-dom'
import ProductNotFound from '../ProductNotFound/ProductNotFound'

function ProductSearched() {
  const products = useSelector ((state) => state.products)
  // const dispatch = useDispatch();

  // const {name} = useParams

//   useEffect(() => {
//     dispatch(getProductsByName(name));
//   }, [dispatch]);
  
  return (
    <div className={styles.searched}>
      <Categories />
      {
        products.length > 0 ?
        <>
      <div className={styles.productsContainer}>
        <Filter />
        <div className={styles.productsCardsContainer}>
          {products.map((el) => {
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
        </>
          : 
          <div className={styles.productNotFoundContainer}>
            <ProductNotFound/>
          </div>
      }
    </div>
  )
}

export default ProductSearched
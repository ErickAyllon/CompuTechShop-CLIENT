import React, { useEffect }  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsByName } from '../../Redux/Actions'
import Categories from '../Categories/Categories'
import Filter from '../Filter/Filter'
import ProductCard from '../ProductCard/ProductCard'
import PaginationC from '../Pagination/PaginationC.jsx'
import ProductNotFound from '../ProductNotFound/ProductNotFound'
import styles from './ProductSearched.module.css'

function ProductSearched() {
  let products = useSelector((state) => state.allProducts); 
  const productsFilter = useSelector((state) => state.productsFilter);
  products = productsFilter.length > 0 ? productsFilter : products;
  const dispatch = useDispatch();
  const {search} = useParams();

  // Pagination Info //
  const currentPage = useSelector((state) => state.currentPage)
  const productsPerPage = 6;
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(getProductsByName(search))
  }, [dispatch, search]);
 // End Pagination //
  
  return (
    <div className={styles.searched}>
      <Categories />
      {
        productsFilter.length > 0 ?
        <>
      <div className={styles.productsContainer}>
        <Filter />
        <div className={styles.productsCardsContainer}>
          <h1>Your search: {search}</h1>
          {
            productsFilter.length > 0 ?
            currentProducts.map((el) => {
            return (
                <ProductCard 
                    key={el.id}
                    name={el.name} 
                    price={el.price} 
                    image={el.image} 
                    id={el.id}  
                    brand={el.brand} 
                    description={el.description} 
                    calification={el.calification} 
                    quantity={el.quantity}/>
              )
            })
            : <ProductNotFound />
          }
        </div>
      </div>
          {
            productsFilter.length > 0 ?
              <PaginationC
                category={search}
                totalPages={totalPages}
              />
          : null
          }
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
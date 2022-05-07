import React, { useEffect }  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsByName } from '../../../Redux/Actions'
import Filter from '../../Filter/Filter'
import ProductCardAdmin from '../Products/ProductCardAdmin/ProductCardAdmin'
import PaginationCAdmin from '../Products/Pagination/PaginationCAdmin'
import ProductNotFound from '../../ProductNotFound/ProductNotFound'
import styles from './ProductSearchedAdmin.module.css'
import CategoriesAdmin from '../Products/Categories/CategoriesAdmin'

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
      <CategoriesAdmin />
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
                <ProductCardAdmin 
                    key={el.id}
                    name={el.name} 
                    price={el.price} 
                    image={el.image} 
                    id={el.id} 
                    brand={el.brand} 
                    description={el.description} 
                    calification={el.calification} 
                    quantity={el.quantity}
                    update={true}
                    delet={true}
                    />
              )
            })
            : <ProductNotFound />
          }
        </div>
      </div>
          {
            productsFilter.length > 0 ?
              <PaginationCAdmin
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
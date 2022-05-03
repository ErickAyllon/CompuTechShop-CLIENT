import React, { useEffect, useState }  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getProductsByName } from '../../Redux/Actions'
import Categories from '../Categories/Categories'
import Filter from '../Filter/Filter'
import ProductCard from '../ProductCard/ProductCard'
import PaginationC from '../Pagination/PaginationC.jsx'
import ProductNotFound from '../ProductNotFound/ProductNotFound'
import styles from './ProductSearched.module.css'

function ProductSearched() {
  let products = useSelector((state) => state.products);
  const productsFilter = useSelector((state) => state.productsFilter);
  products = productsFilter.length > 0 ? productsFilter : products;
  const dispatch = useDispatch();
  const {search} = useParams();

  // Pagination Info //
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(getProductsByName(search))
    setCurrentPage(page)
  }, [dispatch, page, search]);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
}
 // End Pagination //
  
  return (
    <div className={styles.searched}>
      <Categories />
      {
        products.length > 0 ?
        <>
      <div className={styles.productsContainer}>
        <Filter />
        <div className={styles.productsCardsContainer}>
          {currentProducts.map((el) => {
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
          })}
        </div>
      </div>
      <PaginationC 
          category={search}
          pagination={pagination} 
          totalPages={totalPages}
      />
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
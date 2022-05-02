
import React, { useState, useEffect} from 'react'
import styles from './Mouses.module.css'
import Categories from '../Categories'
import {useDispatch, useSelector} from 'react-redux'
import {filterByCategory} from '../../../Redux/Actions'
import ProductCard from '../../ProductCard/ProductCard'
import { Link } from 'react-router-dom';
import Filter from '../../Filter/Filter'
import PaginationC from '../../Pagination/PaginationC';
import Loader from '../../Loader/Loader'
import { useLocation } from 'react-router-dom';

function Mouses() {
  const products = useSelector ((state) => state.products)
  const dispatch = useDispatch();
  const category = 'Mouses';
  // const {category} = useParams

  // Pagination Info //
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(filterByCategory(category));
    setCurrentPage(page)
  }, [dispatch]);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
}
 // End Pagination //
  
  return (
    <div className={styles.mouses}>
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
          category={category}
          pagination={pagination} 
          totalPages={totalPages}
        />
      </>
          :
          <Loader />
      }
    </div>
  )
}

export default Mouses
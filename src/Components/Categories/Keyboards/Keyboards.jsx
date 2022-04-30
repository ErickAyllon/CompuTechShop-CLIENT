import React, { useState, useEffect} from 'react'
import styles from './Keyboards.module.css'
import Categories from '../Categories'
import {useDispatch, useSelector} from 'react-redux'
import {filterByCategory, filterByBrandCategories} from '../../../Redux/Actions'
import ProductCard from '../../ProductCard/ProductCard'
import { Link } from 'react-router-dom';
import Filter from '../../Filter/Filter'
import PaginationC from '../../Pagination/PaginationC';
import Loader from '../../Loader/Loader'
import { useLocation } from 'react-router-dom';

function Keyboards() {
  const allProducts = useSelector((state) => state.allProducts)
  const products = useSelector ((state) => state.products)
  const productsDetail = useSelector((state) => state.productsDetail)
  const dispatch = useDispatch();
  const category = 'Keyboards';
  // const {category} = useParams

  // Pagination Info //
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 1;
  const indexLastProduct = currentPage * productsPerPage;
  const indexFirstProduct = indexLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexFirstProduct, indexLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    dispatch(filterByCategory(category));
    setCurrentPage(page)
  }, [dispatch]);


//filtrado
function handleFilterByBrandCategories(e){
  e.preventDefault()
  dispatch(filterByBrandCategories(e.target.value))
}

const setBrand = new Set(); 

const unicBrand = products.reduce((acc, marca) => {
  if (!setBrand.has(marca.brand)){
    setBrand.add(marca.brand, marca)
    acc.push(marca)
  }
  return acc;
},[]);

const brandMap = unicBrand.map((el)=>el.brand)

console.log("este es el productDetail", products)
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
}
 // End Pagination //
  
  return (
    <div className={styles.keyboards}>
      <Categories />
      {
        products.length > 0 ?
        <>
      <div className={styles.productsContainer}>
        {/* <Filter /> */}
        <select onChange={e=>handleFilterByBrandCategories(e)}>
          <option value= "all">all</option>
          {
                  brandMap?.map((t) => 
                  (<option value={t} key={t}> {t} </option> 
                  ))}
        
        </select>
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

export default Keyboards

import styles from './Filter.module.css'
import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { filterByBrandCategories} from '../../Redux/Actions'

function Filter() {

  const allProducts = useSelector((state) => state.allProducts)
  const products = useSelector ((state) => state.products)
  const productsDetail = useSelector((state) => state.productsDetail)
  const dispatch = useDispatch();
  
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
  


  return (
    
    <div className={styles.filter}>
        <div className={styles.filterContainer}>
        <select onChange={e=>handleFilterByBrandCategories(e)}>
          <option value= "all">all</option>
          {
                  brandMap?.map((t) => 
                  (<option value={t} key={t}> {t} </option> 
                  ))}
        
        </select>
        </div>
    </div>
  )
}

export default Filter
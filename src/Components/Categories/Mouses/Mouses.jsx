
import React from 'react'
import styles from './Mouses.module.css'
import Categories from '../Categories'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {filterByCategoryMouses} from '../../../Redux/Actions'
import ProductCard from '../../ProductCard/ProductCard'
import { Link } from 'react-router-dom';

function Mouses() {
 
    const allProducts = useSelector ((state) => state.allProducts);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(filterByCategoryMouses());
    }, [dispatch]);
   
  
  return (
    <div >
      <Categories  />
       <div >
              {
                  allProducts?.map(e=> {
                     return (
                         <div  key={e.id}>
                        
                     <ProductCard name={e.name}
                      image={e.image}
                      price={e.price}
                      brand={e.brand}
                      description={e.description}
                      calification={e.calification}
                      quantity={e.quantity}
                    />
                        </div>
                     )})
                  }          
              </div>
  
    </div>
  )
}

export default Mouses
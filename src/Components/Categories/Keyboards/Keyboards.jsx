import React from 'react'
import styles from './Keyboards.module.css'
import Categories from '../Categories'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import {filterByCategoryKeyboards} from '../../../Redux/Actions'
import ProductCard from '../../ProductCard/ProductCard'
import { Link } from 'react-router-dom';

function Keyboards() {
 
    const allProducts = useSelector ((state) => state.allProducts);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(filterByCategoryKeyboards());
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

export default Keyboards
import React from 'react'
import styles from './Laptops.module.css'
import Categories from '../Categories';
import PaginationC from '../../Pagination/PaginationC';


function Laptops() {
  return (
    <div className={styles.laptops}>
      <Categories />
      This is path="/laptops"
      <PaginationC />
    </div>
  )
}

export default Laptops
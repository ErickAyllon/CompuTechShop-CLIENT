import React from 'react';
import styles from './ViewCategories.module.css';
import { useSelector } from 'react-redux';
import CategoryCreate from '../CategoryCreate/CategoryCreate';

function ViewCategories() {
  const allCategories = useSelector((state) => state.categories)

  return (
    <div className={styles.viewCategoriesContainer}>
      <div className={styles.viewCategories}>
        <div className={styles.categories}>
          {
            allCategories?.map(el => {
              return(
              <h5 className={styles.name} key={el.id}>{el.name}</h5>
              )
            })
          }
        </div>
      </div>
    <CategoryCreate />
    </div>
  )
}

export default ViewCategories
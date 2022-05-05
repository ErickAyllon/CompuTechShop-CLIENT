import React, { useState } from 'react'
import styles from './ViewCategories.module.css';
import { postCategory } from '../../../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../../Redux/Actions';
import CategoryCreate from '../CategoryCreate/CategoryCreate';

function ViewCategories() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories)
  useEffect(() => {
    //console.log(allCategories)
    dispatch(getCategories());
  }, [dispatch])



  return (
    <div>
      {allCategories.length > 0 ? allCategories.map(el => {
        <h5 className={styles.name} key={el.id}>{el.name}</h5>
      }): null}
    <CategoryCreate />
    </div>
  )
}

export default ViewCategories
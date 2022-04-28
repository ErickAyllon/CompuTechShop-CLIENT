import React, { useState, useEffect} from 'react'
import styles from './ProductDetail.module.css'
import { getDetail } from '../../Redux/Actions/index.js'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';


function ProductDetail (){
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(getDetail(name));
  }, [dispatch]);

  const product = useSelector ((state) => state.productDetail);

  return (
  <div className={styles.productDetail}>
    {
      product.length > 0 ?
        <div className={styles.productDetailContainer}>

          <div className={styles.productDetailContainerTwo}>
            <div className={styles.productDetailImgContainer}>
              <img className={styles.productDetailImg} src={product[0].image}/>
            </div>
            <div className={styles.productDetailInfo}>
                <h1 className={styles.productDetailName}>{product[0].name}</h1>
                <Rating className={styles.productDetailRating} name="half-rating-read" size="small" defaultValue={product[0].calification / 2} precision={0.5} readOnly />
                <p className={styles.productDetailPrice}>${product[0].price}</p>
                {/* <p>{product[0].brand}</p>
                <p>{product[0].quantity}</p> */}
            </div>
          </div>

            <div className={styles.productDetailDescription}>
              <div className={styles.productDetailDescriptionContainer}>
                <p>Description:</p>
                <p>{product[0].description}</p>
              </div>
            </div>
        </div>
      : null
    }
  </div>
)}

export default ProductDetail
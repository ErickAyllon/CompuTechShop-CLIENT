import React, { useEffect} from 'react'
import styles from './ProductDetailAdminCard.module.css'
import { deleteProduct, getDetail, getProducts } from '../../../../Redux/Actions/index.js'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from '@mui/material';

function ProductDetailAdmin ({nameD, image, price, brand, quantity, description, calification}) {
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(getDetail(name));
  }, [dispatch]);


  return (
        <div className={styles.productDetailContainer}>

          <div className={styles.productDetailContainerTwo}>
            <div className={styles.productDetailImgContainer}>
              <img className={styles.productDetailImg} src={image}/>
            </div>
            <div className={styles.productDetailInfo}>
                <h1 className={styles.productDetailName}>{nameD}</h1>
                {   calification ? 
                    <Rating className={styles.productDetailRating} name="half-rating-read" size="small" defaultValue={calification / 2} precision={0.5} readOnly />
                    : null
                }
                <p className={styles.productDetailPrice}>${price}</p>
                {/* <p>{brand}</p>
                <p>{quantity}</p> */}
            </div>
          </div>

            <div className={styles.productDetailDescription}>
              <div className={styles.productDetailDescriptionContainer}>
                <p>Description:</p>
                <p>{description}</p>
              </div>
            </div>
        </div>
)}

export default ProductDetailAdmin
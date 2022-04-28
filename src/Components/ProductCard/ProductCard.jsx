import React, { useState } from 'react'
import styles from './ProductCard.module.css'
import { Rating } from '@mui/material';


function ProductCard({ name, price, image, id, brand, calification, quantity, description }){

    return (
        <div className={styles.productCardContainer}>
            <div className={styles.productCard}>
                <img src={image} alt="" className={styles.productImg} />
                <div className={styles.productCardInfo}>
                    {/* <h3>{id}</h3> */}
                    {/* <h3>Quantity: {quantity}</h3>  */}
                    {/* <h3>{description}</h3> */}
                    {/* <h3>{brand}</h3>  */}
                    <h3 className={styles.productCardName}>{name}</h3>
                    <h3 className={styles.productCardPrice}>${price}</h3> 
                    <Rating name="half-rating-read" size="small" defaultValue={calification / 2} precision={0.5} readOnly className={styles.productCardCalification}/>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
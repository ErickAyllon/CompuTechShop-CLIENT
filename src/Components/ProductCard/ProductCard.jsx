import React from 'react'
import styles from './ProductCard.module.css'

function ProductCard({ name, price, image, id, brand, calification, quantity }){
    return (
        <div className={styles.productCard}>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{price}</h3> 
            <h3>{quantity}</h3> 
            <h3>{brand}</h3> 
            <h3>{calification}</h3>
            <img src={image} alt="" className={styles.productImg} />
        </div>
    )
}

export default ProductCard
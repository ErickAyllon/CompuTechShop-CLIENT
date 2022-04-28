import React from 'react'
import styles from './ProductCard.module.css'

function ProductCard({ name, price, image, id, brand, calification, quantity, description }){
    return (
        <div className={styles.productCardContainer}>
            <div className={styles.productCard}>
                <img src={image} alt="" className={styles.productImg} />
                <div className={styles.productCardInfo}>
                    {/* <h3>{id}</h3> */}
                    {/* <h3>Quantity: {quantity}</h3>  */}
                    <h3>{description}</h3>
                    <h3>{name}</h3>
                    <h3>Price: ${price}</h3> 
                    <h3>Brand: {brand}</h3> 
                    <h3>Calification: {calification}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import add from '../../Images/add.png'

function ProductCard({
  name,
  price,
  image,
  id,
  brand,
  calification,
  quantity,
  description,
  addToCart,
  delFromCart 

}) {
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCard}>
        <div className={styles.productCardImgContainer}>
          <Link to={"/" + name.split("/").join("-")}>
            <img src={image} alt="" className={styles.productImg} />
          </Link>
        </div>
        <div className={styles.productCardInfo}>
          {/* <h3>{id}</h3> */}
          {/* <h3>Quantity: {quantity}</h3>  */}
          {/* <h3>{description}</h3> */}
          {/* <h3>{brand}</h3>  */}
          <Link to={"/" + name.split("/").join("-")}>
            <h3 className={styles.productCardName}>{name}</h3>
          </Link>
          <h3 className={styles.productCardPrice}>${price}</h3>
          <Rating
            name="half-rating-read"
            size="small"
            defaultValue={calification / 2}
            precision={0.5}
            readOnly
            className={styles.productCardCalification}
          />
          <button className={styles.addBtn} onClick={() => addToCart(id)}><img src={add} alt="" /></button>
          {/* <button className = {styles.btn} onClick={() => delFromCart(id)}>-</button> */}
      <br />
      {/* <button onClick={() => delFromCart(id, true)}>Eliminar todos</button> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

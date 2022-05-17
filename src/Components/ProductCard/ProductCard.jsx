import React from "react";
import styles from "./ProductCard.module.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import add from '../../Images/add.png'
import Wishlist from "../Wishlist/WishlistIcon/WishlistIcon";

function ProductCard({
  name,
  price,
  image,
  id,
  calification,
  addToCart,
  quantity,
  delFromCart,
  priceTotal
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
          <Link to={"/" + name.split("/").join("-")}>
            <h3 className={styles.productCardName}>{name}</h3>
          </Link>
          {priceTotal && quantity > 1 ? <h3 className={styles.productCardPrice}>{quantity} x $ {new Intl.NumberFormat().format(price)}</h3> : 
            <h3 className={styles.productCardPrice}>$ {new Intl.NumberFormat().format(price)}</h3>}

          <Rating
            name="half-rating"
            size="small"
            defaultValue={Number(calification)}
            precision={0.5}
            readOnly
            className={styles.productCardCalification}
          />
          <button className={styles.addBtn} onClick={() => addToCart(id)}><img src={add} alt="" /></button>
          {/* {delFromCart ?
            <div><button className={styles.addBtn} onClick={() => delFromCart(id)}><img src={add} alt="" /></button>
              <button className={styles.addBtn} onClick={() => delFromCart(id, true)}><img src={add} alt="" /></button></div>
            : null} */}
          <Wishlist id={id} name={name} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

import React from "react";
import styles from "./ProductCard.module.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import add from '../../Images/add.png'
import Wishlist from "../Wishlist/WishlistIcon/WishlistIcon";
import deleteOne from "../../Images/deleteOne.png"
import addmore from "../../Images/addmore.png"
import substractmore from "../../Images/substractmore.png"

function ProductCard({
  name,
  price,
  image,
  id,
  calification,
  addToCart,
  quantity,
  delFromCart,
  priceTotal,
  wishlist
}) {
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCard}>
        <div className={styles.productCardImgContainer}>
          <Link to={"/" + name}>
            <img src={image} alt="" className={styles.productImg} />
          </Link>
        </div>
        <div className={styles.productCardInfo}>
          <Link to={"/" + name}>
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
          <div className={styles.superBtnsContainer}>
            <div className={styles.wishAndCartBtns}>
              { delFromCart ?
                null 
              :
                <button className={styles.addBtn} onClick={() => addToCart(id)}><img src={add} alt="add" /></button>
              } 
              {
                wishlist ?
                  <Wishlist id={id} name={name} className={styles.wishlist} />
                : null
              }
            </div>
            {
              delFromCart ?
                <div className={styles.cardsBtns}>
                    <button className={styles.addMore} onClick={() => addToCart(id)}><img src={addmore} alt="add" /></button>
                    <button className={styles.subsBtn} onClick={() => delFromCart(id)}><img src={substractmore} alt="substractmore" /></button>
                    <button className={styles.dltAll} onClick={() => delFromCart(id, true)}><img src={deleteOne} alt="removeAll" /></button>
                </div>
              : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

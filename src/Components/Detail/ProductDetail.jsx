import React, { useEffect } from "react";
import styles from "./ProductDetail.module.css";
import { getDetail, getProducts } from "../../Redux/Actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";

import Categories from "../Categories/Categories";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";
import NavBar from "../NavBar/Navbar";
import add from '../../Images/add.png'


function ProductDetail() {
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    //  dispatch(getProducts());
    dispatch(getDetail(name));
  }, [dispatch]);

  const product = useSelector((state) => state.productDetail);
  const delFromCart = (id, all = false) => {
    all
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };

  const addToCart = (id) => {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  return (
    <div className={styles.productDetail}>
      <NavBar />
      <Categories />
      {product.length > 0 ? (
        <div className={styles.productDetailContainer}>
          <div className={styles.productDetailContainerTwo}>
            <div className={styles.productDetailImgContainer}>
              <img className={styles.productDetailImg} src={product[0].image} />
            </div>
            <div className={styles.productDetailInfo}>
              <h1 className={styles.productDetailName}>{product[0].name}</h1>
              <Rating
                className={styles.productDetailRating}
                name="half-rating-read"
                size="small"
                defaultValue={product[0].calification / 2}
                precision={0.5}
                readOnly
              />
              <p className={styles.productDetailPrice}>${product[0].price}</p>
              <button className={styles.addBtn} onClick={() => addToCart(product[0].id)}><img src={add} alt="" /></button>
              {/* <button className= {styles.btn} onClick={() => delFromCart(product[0].id)}>-</button> */}

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
      ) : null}
    </div>
  );
}

export default ProductDetail;

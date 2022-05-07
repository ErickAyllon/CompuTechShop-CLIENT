import React, { useEffect } from "react";
import styles from "./ProductDetail.module.css";
import { getDetail, getProducts } from "../../Redux/Actions/index.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";

import Categories from "../Categories/Categories";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";

function ProductDetail() {
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(getDetail(name));
    dispatch(getProducts());
  }, [dispatch]);

  const product = useSelector((state) => state.productDetail);
  const chuch = useSelector((state) => state.allProducts);
  console.log("este es el allproducts", chuch);

  const addToCart = (id) => {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  return (
    <div className={styles.productDetail}>
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
              {/* <p>{product[0].brand}</p>
                <p>{product[0].quantity}</p> */}
            </div>
          </div>

          <div className={styles.productDetailDescription}>
            <div className={styles.productDetailDescriptionContainer}>
              <p>Description:</p>
              <p>{product[0].description}</p>
            </div>
            <button onClick={() => addToCart(product[0].id)}>Agregar</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductDetail;

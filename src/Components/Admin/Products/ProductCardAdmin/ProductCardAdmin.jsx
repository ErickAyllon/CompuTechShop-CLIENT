import React, { useState } from "react";
import styles from "./ProductCardAdmin.module.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import trash from '../../../../Images/trash.png'
import edit from '../../../../Images/edit.png'
import { useDispatch } from "react-redux";
import { deleteProduct, filterByCategory, getProducts } from "../../../../Redux/Actions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProductCardAdmin({ name, price, image, calification, id, update, delet }) {
  const dispatch = useDispatch();
  const {category} = useParams;
  const navigate = useNavigate();
  
  function handleDelete(e) {
    e.preventDefault();
    console.log(e.target.id)
    if (window.confirm('Are you sure?')) {
      e.preventDefault();
      dispatch(deleteProduct(e.target.id))
      window.alert('Product deleted')
      dispatch(getProducts())
    }
  }

  function handleEdit(e) {
    e.preventDefault();
    navigate('/admin/product/update/' + e.target.name)
  }

  return (
    <div className={styles.productCardContainer}>
      <div className={styles.productCard}>
        <div className={styles.productCardImgContainer}>
          <Link to={"/admin/product/" + name.split("/").join("-")}>
            <img src={image} alt="" className={styles.productImg} />
          </Link>
        </div>
        <div className={styles.productCardInfo} >
          <Link to={"/admin/product/" + name.split("/").join("-")}>
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
          {
          delet ?
            <button className={styles.button}>
              <img src={trash} onClick={handleDelete} id={id}/>
            </button>
          : null
          }
          {
          update ?
            <button className={styles.button}>
              <img src={edit} onClick={handleEdit} name={name}/>
            </button>
          : null
          }
        </div>
      </div>
    </div>
  );
}

export default ProductCardAdmin;

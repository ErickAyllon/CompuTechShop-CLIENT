import React, { useEffect} from 'react'
import styles from './ProductDetailAdmin.module.css'
import { deleteProduct, getDetail, getProducts } from '../../../../Redux/Actions/index.js'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import AdminNav from '../../AdminNav/AdminNav';
import trash from '../../../../Images/trash.png'
import edit from '../../../../Images/edit.png'
import AdminNav2 from '../../AdminNav/AdminNav2';

function ProductDetailAdmin (){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    dispatch(getDetail(name));
  }, [dispatch]);

  const product = useSelector ((state) => state.productDetail);

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
  <div className={styles.productDetail}>
    <AdminNav/>
    <AdminNav2/>
    {
      product.length > 0 ?
        <div className={styles.productDetailContainer}>

          <div className={styles.productDetailContainerTwo}>
            <div className={styles.productDetailImgContainer}>
              <img className={styles.productDetailImg} src={product[0].image}/>
            </div>
            <div className={styles.productDetailInfo}>
                <h1 className={styles.productDetailName}>{product[0].name}</h1>
                <Rating className={styles.productDetailRating} name="half-rating-read" size="small" defaultValue={product[0].calification / 2} precision={0.5} readOnly />
                <p className={styles.productDetailPrice}>${product[0].price}</p>
                {/* <p>{product[0].brand}</p>
                <p>{product[0].quantity}</p> */}
            </div>
              <button className={styles.button}>
                <img src={trash} onClick={handleDelete} id={product[0].id}/>
              </button>
              <button className={styles.button}>
                <img src={edit} onClick={handleEdit} name={name}/>
              </button>
          </div>

            <div className={styles.productDetailDescription}>
              <div className={styles.productDetailDescriptionContainer}>
                <p>Description:</p>
                <p>{product[0].description}</p>
              </div>
            </div>
        </div>
      : null
    }
  </div>
)}

export default ProductDetailAdmin
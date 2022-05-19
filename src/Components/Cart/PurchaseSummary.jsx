import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/Actions";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";
import ProductCard from "../ProductCard/ProductCard";
import NavBar from "../NavBar/Navbar";
import { useNavigate } from "react-router-dom"
import styles from "./PurchaseSummary.module.css"
import { useAuth0 } from "@auth0/auth0-react"
import Swal from 'sweetalert2'
import Footer from "../Footer/Footer";
import { Button } from "@mui/material";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const PurchaseSummary = () => {
  const dispatch = useDispatch();
  const productsFilter = useSelector((state) => state.cart);
  const products  = useSelector((state) => state.products)
  const arregloPrice = productsFilter.map((el) => el.price * el.quantityCart);
  const reducir = (accumulator, curr) => accumulator + curr;
  let arregloTotal
  const navigate = useNavigate()
  const { user } = useAuth0();
  if (arregloPrice.length > 0) { arregloTotal = arregloPrice.reduce(reducir) }

  console.log(productsFilter)
  useEffect(() => {
    dispatch(getUser())

  }, [dispatch])

  const handleBuyCart = (e) => {
    e.preventDefault();
    if (user) {

      // setTimeout(function () {
      navigate("/cartSend")
      // }, 2000)
    }
    else {
      Swal.fire({
        title: 'You must be logged to buy products!',
        icon: 'info',
        confirmButtonText: 'OK',
      })
    }
  };



  const delFromCart = (id, all = false) => {
    all 
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };
  const addToCart = (id) => { 
    
let mapeo = productsFilter.find((el) => el.id === id ) 
console.log(mapeo.quantityCart) 
if(mapeo.quantity > 0) {
  dispatch({ type: TYPES.ADD_TO_CART, payload: id }) 
 }
}




  // if (productsFilter.quantity >= productsFilter[id].quantityCart) { 

    // dispatch({ type: TYPES.ADD_TO_CART, payload: id }) 
  //  } 
      
  
   
  const clearCart = () => { 
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const [load, setLoad] = useState(true)

  setTimeout(function () {
    setLoad(false)
  }, 1000)

  return (
    <div className={styles.purchaseSummary}>
      <NavBar />
      <Button variant='outlined' style={{margin:'10px auto 0 auto', display:'flex'}} onClick={() => navigate("/Allproducts")}>Back to Products</Button>
      <h1 className={styles.title}>My cart:</h1>
      <div className={styles.summaryContainer} >
        <div className={styles.cardsContainer}>

        {
            load ?
                <CircularProgress color="inherit" style={{ position: 'absolute', top: '50%', left: '50%' }} />
            : 
            productsFilter.length > 0 && arregloTotal.length !== 0 ?
              productsFilter.map((el) => (
                <ProductCard
                  name={el.name}
                  price={el.price}
                  image={el.image}
                  key={el.id}
                  id={el.id}
                  brand={el.brand}
                  description={el.description}
                  calification={el.calification}
                  quantity={el.quantityCart}
                  addToCart={addToCart}
                  delFromCart={delFromCart}
                  priceTotal={true}
                  wishlist={false}
                />

              )) : (<div className={styles.productNotFound}>
                <div className={styles.productNotFoundContainer}>
                  <h1>Cart Empty</h1>
                  <div className={styles.productNotFoundText}>
                    <p>Check all products</p>
                    <p>Browse the categories to find a product</p>
                  </div>
                </div>
              </div>)
          }</div>
        {(arregloPrice.length !== 0 ?
          <div className={styles.containerImgBtn}>
            <label className={styles.text}>Total Price:  $ {new Intl.NumberFormat().format(arregloTotal)}</label>
            <Button variant='outlined' className={styles.btn} onClick={handleBuyCart}>Buy cart</Button>
            <Button
              variant='outlined'
              onClick={clearCart}
            >
              Clean Cart
            </Button>
          </div>
          : null)}
      </div>
      <br />
      <Footer />
    </div >
  );
};

export default PurchaseSummary;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBuyCart } from "../../Redux/Actions";
import CartItem from "./CartItem";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";
import ProductCard from "../ProductCard/ProductCard";
import NavBar from "../NavBar/Navbar";
import {Link, useNavigate} from "react-router-dom"
import styles from "./CartItem.module.css"
const PurchaseSummary = () => {
  const obj = {};
  const dispatch = useDispatch();
  const productsFilter = useSelector((state) => state.cart);
  const arregloPrice = productsFilter.map((el) => el.price * el.quantity);
  const reducir = (accumulator, curr) => accumulator + curr;
  const arregloTotal = arregloPrice.reduce(reducir);
  const navigate = useNavigate()
  
  const handleBuyCart = (e) => {
    e.preventDefault();
    const nuevoPost = productsFilter.map((el) => {
      return {
        picture_url: el.image,
        name: el.name,
        price: el.price,
        quantity: el.quantity,
      };
    });
    obj.name = nuevoPost.map((el) => el.name);
    obj.picture_url = nuevoPost.map((el) => el.picture_url);
    obj.price = nuevoPost.map((el) => Number(el.price));
    obj.quantity = nuevoPost.map((el) => el.quantity);
    JSON.stringify(obj);
    dispatch(postBuyCart(obj));
    setTimeout(function(){
      navigate("/purchaseConfirm")
  },2000)
  };
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
    
    <div>
      <NavBar/>
      <div>
        <div>
      {productsFilter.map((el) => (
         <ProductCard
         name={el.name}
         price={el.price}
         image={el.image}
         key={el.id}
         id={el.id}
         brand={el.brand}
         description={el.description}
         calification={el.calification}
         quantity={el.quantity}
         addToCart={addToCart}
         delFromCart={delFromCart}
       />
        // <CartItem
        //   // key={index}
        //   data={el}
        //   // delFromCart={delFromCart}
        //   addToCart={addToCart}
        // />
      ))}</div>
      <div>
        <label>Total Price: $</label>
        {arregloTotal}
     
        <button className = {styles.btn} onClick = {handleBuyCart}>Comprar</button>

        
      </div>
     
      </div>
    </div>
  );
};

export default PurchaseSummary;

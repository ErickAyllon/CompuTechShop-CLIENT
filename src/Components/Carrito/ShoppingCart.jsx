import React, { useReducer } from "react";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";
import {
  shoppingReducer,
  shoppingInitialState,
} from "../../Redux/Reducer/shoppingChartReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    console.log(id, all);
    all
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      <article className="box">
        {products.map((el) => (
          <ProductItem key={el.id} data={el} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3> {console.log(cart)}{" "}
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((el, index) => (
          <CartItem key={index} data={el} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;

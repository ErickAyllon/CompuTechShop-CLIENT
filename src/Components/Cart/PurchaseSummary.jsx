import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBuyCart } from "../../Redux/Actions";
import CartItem from "./CartItem";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";

const PurchaseSummary = () => {
  const obj = {};
  const dispatch = useDispatch();
  const productsFilter = useSelector((state) => state.cart);
  const arregloPrice = productsFilter.map((el) => el.price * el.quantity);
  const reducir = (accumulator, curr) => accumulator + curr;
  const arregloTotal = arregloPrice.reduce(reducir);
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
  };

  const addToCart = (id) => {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  return (
    <div>
      {productsFilter.map((el) => (
        <CartItem
          // key={index}
          data={el}
          // delFromCart={delFromCart}
          addToCart={addToCart}
        />
      ))}
      <div>
        <label>Total Price:</label>
        {arregloTotal}
      </div>
      <div>
        <button onClick={handleBuyCart}>comprita</button>
      </div>
    </div>
  );
};

export default PurchaseSummary;

import React, { useEffect } from "react";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";
import CartItem from "./CartItem";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postBuyCart } from "../../Redux/Actions";
import { Link, useNavigate} from "react-router-dom";
import Loader from "../Loader/Loader";

const ShoppingCart = () => {
  const obj = {};
const navigate = useNavigate()
  const dispatch = useDispatch();
  const carti = useSelector((state) => state.cart);
  let url = useSelector((state) => state.shopping);
console.log(url)
  let arregloTotal = [];
  
  
  const arregloPrice = carti.map((el) => el.price * el.quantity);
  const reducir = (accumulator, curr) => accumulator + curr;


  const delFromCart = (id, all = false) => {
    all
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
  const addToCart = (id) => {
    
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const handleBuyCart = (e) => {
    e.preventDefault();
    const nuevoPost = carti.map((el) => {
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
    dispatch(postBuyCart(obj));
      setTimeout(function(){
        navigate("/purchaseConfirm")
  },2000)}

 
  return (
    <div>
      <Dropdown active="true" autoClose="outside">
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          <img
            src="https://img.icons8.com/nolan/64/shopping-cart-promotion.png"
            alt="profileImg"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="dropMenu"
          focusFirstItemOnShow="false"
          variant="dark"
        >
          <Dropdown.Item >
            <button onClick={clearCart}>Limpiar Carrito</button>{" "}
          </Dropdown.Item>
          <Dropdown.Item>
            <div>
              <article className="box">
                <Dropdown.Divider />
                {carti?.map((el, index) => (
                 <Dropdown.Item>

                   <CartItem
                      key={index}
                      data={el}
                      delFromCart={delFromCart}
                      addToCart={addToCart}
                    />
                 </Dropdown.Item>
                ))}
              </article>
              <div>
                <label>Total Price: $</label>
                {arregloTotal ? arregloTotal : <Loader />}
              </div>
              <Dropdown.Item>
              <div>
            
                <button onClick={handleBuyCart}>
                Comprar  
                  </button>
              </div>
              </Dropdown.Item>
           
            </div>
          <Dropdown.Divider />
          </Dropdown.Item>
            <Link to="/purchaseSummary">
              <button>Purchase summary</button>
            </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ShoppingCart;

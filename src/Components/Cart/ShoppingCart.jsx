import React, { useEffect } from "react";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";
import CartItem from "./CartItem";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postBuyCart } from "../../Redux/Actions";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
// import styles from './ShoppingCart.module.css'
import styles from "./CartItem.module.css";
import shop from "../../Images/shop.png";
import { Button } from "@mui/material";
import style from "./ShoppingCart.module.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const ShoppingCart = () => {
  const obj = {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carti = useSelector((state) => state.cart);
  let url = useSelector((state) => state.shopping);
  let arregloTotal = [];
  const cart = useSelector((state) => state.cart);

  const arregloPrice = carti?.map((el) => el.price * el.quantity);
  const reducir = (accumulator, curr) => accumulator + curr;
  arregloTotal =
    arregloPrice?.length > 0 ? arregloPrice.reduce(reducir) : arregloPrice;
  let nuevoPost = [];
  if (carti?.length > 0) {
    localStorage.setItem("carrito", JSON.stringify(carti));
  }

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
  let objetoNuevo = [];
  //LocalStorage
  if (carti) {
    const nuevoPost = carti?.map((el) => {
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
    localStorage.setItem("carrito", JSON.stringify(nuevoPost));

    objetoNuevo = JSON.parse(localStorage.getItem("carrito"));

    // console.log("este es el carrito ", objetoNuevo)
  } else {
    objetoNuevo = JSON.parse(localStorage.getItem("carrito"));
    // console.log("este es el objetoNuevo cuando venis desde afuera", objetoNuevo)
  }

  //End LocalStorage
  const handleBuyCart = (e) => {
    e.preventDefault();
    dispatch(postBuyCart(obj));

    setTimeout(function () {
      navigate("/purchaseConfirm");
    }, 2000);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& 	.MuiBadge-standard": {
      right: -4,
      top: 7,
      border: `2px solid ${theme.palette.background.paper}`,
      letterSpacing: "1px",
      height: "22px",
      width: "22px",
      borderRadius: "100%",
      border:'1px solid black'
    },
  }));

  return (
    <div className={styles.cart}>
      <Dropdown active="false" autoClose="outside" className={styles.drop}>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          <StyledBadge badgeContent={Number(cart?.length)} color="info">
            <img src={shop} alt="profileImg" className={style.img} />
          </StyledBadge>
        </Dropdown.Toggle>

        <Dropdown.Menu
          className="dropMenu"
          focusFirstItemOnShow="false"
          variant="dark"
        >
          <Dropdown.Item>
            <Button
              className={style.btncito}
              variant="outlined"
              onClick={clearCart}
            >
              Clean Cart
            </Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <div>
              <article className="box">
                <Dropdown.Divider />
                {carti?.length > 0 ? carti?.map((el, index) => (
                  <Dropdown.Item>
                    <CartItem
                      key={index}
                      data={el}
                      delFromCart={delFromCart}
                      addToCart={addToCart}
                    />
                  </Dropdown.Item>
                )): null}
              </article>
              <div>
                <label>Total Price: $</label>
                {arregloTotal ? arregloTotal : <Loader />}
              </div>
              <Dropdown.Item>
                <div>
                  <Button
                    className={style.btncito}
                    variant="outlined"
                    onClick={handleBuyCart}
                  >
                    Buy
                  </Button>
                </div>
              </Dropdown.Item>
            </div>
            <Dropdown.Divider />
          </Dropdown.Item>
          <Link to="/purchaseSummary">
            <Button className={style.btncito} variant="outlined">
              Purchase summary
            </Button>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ShoppingCart;

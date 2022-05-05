import React, { useReducer } from "react";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";
import CartItem from "./CartItem";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const carti = useSelector((state) => state.cart);

  const delFromCart = (id, all = false) => {
    all
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
  const addToCart = (id) => {
    console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

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
          <Dropdown.Item href="#">
            <button onClick={clearCart}>Limpiar Carrito</button>{" "}
          </Dropdown.Item>
          <Dropdown.Item>
            <div>
              <article className="box">
                <Dropdown.Divider />
                {carti?.map((el, index) => (
                  <CartItem
                    key={index}
                    data={el}
                    delFromCart={delFromCart}
                    addToCart={addToCart}
                  />
                ))}
              </article>
            </div>
            <div>Carrito de compras</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ShoppingCart;
{
  /* <div className={styles.profile}>
  <Dropdown className={styles.dropDown} active="false">
    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
      <img
        className={styles.profileImg}
        src={user.picture || user.image}
        alt="profileImg"
      />
    </Dropdown.Toggle>

    <Dropdown.Menu
      className={styles.dropMenu}
      focusFirstItemOnShow="false"
      variant="dark"
    >
      <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
      <Dropdown.Item href="/admin">My Product</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="" className={styles.logOutMenu}>
        <LogOutButton />
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</div>; */
}

import styles from "./CartItem.module.css"
const CartItem = ({ data, delFromCart, addToCart }) => {
  let { name, id, price, quantity, image } = data;

  return (
    <div>
      <div>{name}</div>
      <div>
        ${price} x {quantity} = ${quantity * price}
      </div>
      <img src={image} alt={name} />
      <button className = {styles.btn} onClick={() => delFromCart(id)}>-</button>
      <br />
      <button className = {styles.btn} onClick={() => delFromCart(id, true)}>Eliminar todos</button>
      <br />
      <button className = {styles.btn} onClick={() => addToCart(id)}>+</button>
    </div>
  );
};

export default CartItem;

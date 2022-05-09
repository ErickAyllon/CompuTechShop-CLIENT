import styles from "./CartItem.module.css"
import { Button } from "@mui/material";
import { style } from "@mui/system";
const CartItem = ({ data, delFromCart, addToCart }) => {
  let { name, id, price, quantity, image } = data;

  return (
    <div className={styles.container}>
      <div>{name}</div>
      <div>
        ${price} x {quantity} = ${quantity * price}
      </div>
      <div className={style.containerImgBtn}>
        <img className={styles.img} src={image} alt={name} />
        <Button variant="outlined" onClick={() => delFromCart(id)}>-</Button>

        <Button variant="outlined" onClick={() => delFromCart(id, true)}>Eliminar todos</Button>

        <Button variant="outlined" onClick={() => addToCart(id)}>+</Button>


      </div>
    </div>
  );
};

export default CartItem;

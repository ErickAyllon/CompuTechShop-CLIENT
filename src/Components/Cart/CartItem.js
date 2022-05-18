import styles from "./CartItem.module.css"

const CartItem = ({ data }) => {
  let { name, price, quantity, image } = data;

  return (
    <div className={styles.container}>
      <div>{name}</div>
      <div>
        ${price} x {quantity} = ${quantity * price}
      </div>
      <div className={styles.containerImgBtn}>
        <img className={styles.cartImg} src={image} alt={name} />
      </div>
    </div>
  );
};

export default CartItem;

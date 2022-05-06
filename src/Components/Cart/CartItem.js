const CartItem = ({ data, delFromCart, addToCart }) => {
  let { name, id, price, quantity } = data;

  return (
    <div>
      <div>{name}</div>
      <div>
        ${price} x {quantity} = ${quantity * price}
      </div>
      <button onClick={() => delFromCart(id)}>Eliminar uno</button>
      <br />
      <button onClick={() => delFromCart(id, true)}>Eliminar todos</button>
      <br />
      <button onClick={() => addToCart(id)}>+</button>
    </div>
  );
};

export default CartItem;

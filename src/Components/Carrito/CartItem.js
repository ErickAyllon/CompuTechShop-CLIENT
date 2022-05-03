import React from "react";

const CartItem = ({ data, delFromCart }) => {
  let { name, id, price, quantity } = data;
  return (
    <div>
      <h3>{name}</h3>
      <h2>
        ${price} x {quantity} = ${quantity * price}
      </h2>
      <button onClick={() => delFromCart(id)}>Eliminar uno</button>
      <br />
      <button onClick={() => delFromCart(id, true)}>Eliminar todos</button>
    </div>
  );
};

export default CartItem;

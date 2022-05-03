const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;
  return (
    <div>
      <div>{name}</div>
      <div>${price}</div>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};
export default ProductItem;

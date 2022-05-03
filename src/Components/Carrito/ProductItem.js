const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;
  return (
    <div>
      <h4>{name}</h4>
      <h3>${price}</h3>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};
export default ProductItem;

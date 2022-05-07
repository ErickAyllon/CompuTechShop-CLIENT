import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
export const PurchaseResult = () => {
  const carti = useSelector((state) => state.cart);
  console.log(carti)
  return (
    <div>Compra confirmada
      <p>Estos son los productos que has comprado, te estará llegando un correo con la confirmación</p>
      
       {carti?.map((el, index) => (
          <CartItem
             key={index}
             data={el}
             
           />
       ))}
      
    </div>
  )
}

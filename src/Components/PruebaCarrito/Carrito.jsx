import React from 'react'
import { useSelector } from 'react-redux'

export const Carrito = () => {
  const stateCarrito = useSelector(state => state.products)
  console.log(stateCarrito)

  return (
    <div>carrito</div>
  )
}

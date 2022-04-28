import React from 'react';
import { useState } from 'react';
import styles from './Admin.module.css'
import { postProducts } from '../../Redux/Actions/index'
import { useDispatch } from 'react-redux';

function Admin() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    // id,
    name: '',
    price: '', 
    quantity: '',
    brand: '',
    calification: '',
    image: '',
    description: '',
    categories: ''
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProducts(input));
    alert('Product created brothers')
  }

  return (
    <div className={styles.adminContainer}>
      <form className={styles.form}>
        {/* <input name="id" onChange={handleChange} value={input.id}></input> */}
        <input name="name" onChange={handleChange} placeholder="name" value={input.name}></input>
        <input name="price" onChange={handleChange} placeholder="price" value={input.price}></input>
        <input name="quantity" onChange={handleChange} placeholder="quantity" value={input.quantity}></input>
        <input name="calification" onChange={handleChange} placeholder="calification" value={input.calification}></input>
        <input name="brand" onChange={handleChange} placeholder="brand" value={input.brand}></input>
        <input name="description" onChange={handleChange} placeholder="description" value={input.description}></input>
        <input name="categories" onChange={handleChange} placeholder="categories" value={input.categories}></input>
        <input name="image" onChange={handleChange} placeholder="image" value={input.image}></input>
        <button type="submit" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  )
}

export default Admin
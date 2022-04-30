import React, { useState, useEffect } from 'react';
import { postProducts, getCategories } from '../../Redux/Actions/index'
import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductCreate.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function ProductCreate() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories)
  
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
    alert('Product created')
    setInput({
      name: '',
      price: '', 
      quantity: '',
      brand: '',
      calification: '',
      image: '',
      description: '',
      categories: ''
    })
  }
  return (
    <div>
      <form >     
        <Box
        className={styles.form}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '45ch', color: "white", display: "flex" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
              variant="filled"
            required
            id="outlined-required"
            label="Name"
            defaultValue="Hello World"
            name="name" onChange={handleChange} 
            value={input.name}
          />
            <TextField
              variant="filled"
              required
              name="brand" onChange={handleChange} placeholder="brand" value={input.brand}
              id="outlined-required"
              label="Brand" 
              defaultValue="Hello World"
            />
          <TextField
              variant="filled"
            required
            name="calification" onChange={handleChange} value={input.calification}
            id="outlined-required"
            label="Calification" // Tiene que ser 0 al principio...
            defaultValue="Hello World"
          />
          <TextField
              variant="filled"
            required
            name="quantity" onChange={handleChange} value={input.quantity}
            id="outlined-required"
            label="Quantity" 
            defaultValue="Hello World"
          />
          <TextField
              variant="filled"
            required
            id="outlined-multiline-static"
            name="description" onChange={handleChange} placeholder="description" value={input.description}
            label="Description"
            multiline
            rows={3}
            defaultValue=""
          />
          <TextField
              variant="filled"
            required
            id="outlined-multiline-static"
            name="image" onChange={handleChange} value={input.image}
            label="Image"
            multiline
            defaultValue=""
          />
          <TextField
            variant="filled"
            id="filled-select-currency"
            name="categories"
            select
            label="Category"
            value={input.category}
            onChange={handleChange}
          >
            {categories.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
            <TextField
              variant="filled"
              name="price" onChange={handleChange} placeholder="price" value={input.price}
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div className={styles.createButton} >
              <Button type="submit" onClick={handleSubmit} variant="outlined">Create Product</Button>
            </div>
          {/* <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          /> */}
          {/* <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          /> */}
          {/* <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          /> */}
          {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
          {/* <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          /> */}
        </div>
      </Box>
    </form>
    </div>
  )
}

export default ProductCreate
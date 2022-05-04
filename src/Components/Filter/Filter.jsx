import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrand, filterByPrice, orderProducts} from "../../Redux/Actions";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {Box, TextField, MenuItem, Button } from '@mui/material/';
import styles from "./Filter.module.css";

function Filter() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const setBrand = new Set();
  const unicBrand = products.reduce((acc, marca) => {
    if (!setBrand.has(marca.brand)) {
      setBrand.add(marca.brand, marca);
      acc.push(marca);
    }
    return acc;
  }, []);

  const brandMap = unicBrand.map((el) => el.brand);

  const [input, setInput] = useState({
    min: '',
    max: ''
  })
  
  const [brandSelect, setbrandSelect] = useState('')
  const [order, setOrder] = useState('more-relevants')

  function handleFilterByBrand(e) {
    e.preventDefault();
    // setInput({
      //   min: '',
      //   max: '',
      // })
    dispatch(filterByBrand(e.target.value));
    dispatch(filterByPrice(input))
    dispatch(orderProducts('more-relevants'))
    dispatch(orderProducts(order))
    setbrandSelect(e.target.value)
    // setOrder('more-relevants')
  }
  
  function handleFilterPrice(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  function handleFilterPriceSubmit(e) {
    e.preventDefault();
    dispatch(filterByPrice(input))
  }

  function handleOrder(e) {
    dispatch(filterByPrice(input))
    e.preventDefault()
    dispatch(orderProducts(e.target.value))
    setOrder(e.target.value)  
    // dispatch(filterByBrand(brandSelect))
  }

  function handleRestart(e) {
    e.preventDefault();
    setInput({
      min: '',
      max: '',
    })
    // dispatch(filterByPrice(input))
    dispatch(filterByBrand('all'))
    setbrandSelect('all')
    setOrder('more-relevants')
    dispatch(orderProducts('more-relevants'))
  }

  useEffect(() => {
    dispatch(filterByBrand('all'))
  }, [dispatch]);

  return (
    <div className={styles.filter}>
      <div className={styles.filterContainer}>
      <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content',
      minWidth: '200px',
    }}>
        <TextField
              sx={{
                '& > :not(style)': { m: 1, display: 'flex', width: '15ch', color:'white' },
              }}
              className={styles.filterByBrand}
              variant="outlined"
              id="outlined-select-currency"
              name="brandMap"
              select
              label="Brand"
              value={brandSelect}
              onChange={(e) => handleFilterByBrand(e)}
          > 
                <MenuItem value='all'>All</MenuItem>
              {brandMap.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
      </TextField>
      <Box
        className={styles.filterByPrice}
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '14ch', display: 'inline-block', color:'white' }}}
        noValidate
        autoComplete="off"
      >
        <TextField sx={{ '& > :not(style)': { m: 1, height: '6ch'}}}
          value={input.min}
          id="outlined-basic" className="inputTag" label="Min Price" variant="outlined" onChange={handleFilterPrice} name='min'/>
          -
        <TextField sx={{ '& > :not(style)': { m: 1, height: '6ch'}}}
          value={input.max}
          id="outlined-basic" className="inputTag" label="Max Price" variant="outlined" onChange={handleFilterPrice} name='max'/>
        <button className={styles.filterButton}>
          <PlayArrowIcon onClick={handleFilterPriceSubmit}/>
        </button>
      </Box>

      <div style={{margin:'30px auto'}}>
      <Button onClick={handleRestart} variant="outlined">Restart filters</Button>
      </div>

      <TextField
              sx={{
                '& > :not(style)': { m: 1, display: 'flex', width: '18ch', color:'white' },
              }}
              variant="outlined"
              id="outlined-select-currency"
              select
              label="Order by"
              value={order}
              onChange={(e) => handleOrder(e)}
          > 
                <MenuItem value='more-relevants'>More relevants</MenuItem>
                <MenuItem value='higher-price'>Higher price</MenuItem>
                <MenuItem value='lower-price'>Lower price</MenuItem>
      </TextField>
    </div>
      </div>
    </div>
  );
}

export default Filter;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrand, filterByPrice} from "../../Redux/Actions";
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

  function handleFilterByBrand(e) {
    e.preventDefault();
    setInput({
      min: '',
      max: '',
    })
    dispatch(filterByPrice(input))
    dispatch(filterByBrand(e.target.value));
    setbrandSelect(e.target.value)
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

  function handleRestart(e) {
    e.preventDefault();
    setInput({
      min: '',
      max: '',
    })
    dispatch(filterByPrice(input))
    dispatch(filterByBrand('all'))
    setbrandSelect('')
  }

  useEffect(() => {
  }, []);

  return (
    <div className={styles.filter}>
      <div className={styles.filterContainer}>
    <div>
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
            <option>Filter by Brand</option>
              <MenuItem value='all'>All</MenuItem>
            {brandMap.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
      </TextField>
    </div>
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content',
      minWidth: '200px'
    }}>
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
    <Button onClick={handleRestart} variant="outlined">Restart filters</Button>
    </div>
      </div>
    </div>
  );
}

export default Filter;
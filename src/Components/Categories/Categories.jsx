import React from 'react'
import styles from './Categories.module.css'
import { Link } from 'react-router-dom'
import { getCategories } from '../../Redux/Actions'
import {Box, TextField, MenuItem, Button } from '@mui/material/';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Categories() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories)
    const navigate = useNavigate();
    const {allproducts} = useParams();
    const {category} = useParams();
    const [categorySelect, setCategorySelect] = useState('')
    
    useEffect(() => {
        dispatch(getCategories());
        setCategorySelect(allproducts ? allproducts : category ? category : '')
    }, [dispatch, allproducts, category]);
    
    const setBrand = new Set();
    const unicBrand = categories.reduce((acc, category) => {
        if (!setBrand.has(category.name)) {
            setBrand.add(category.name, category);
            acc.push(category);
        }
        return acc;
    }, []);
    
    const brandMap = unicBrand.map((el) => el.name);
    

      function handleCategorySelect(e) {
        e.preventDefault();
        setCategorySelect(e.target.value)
        navigate(e.target.value === 'Allproducts' ? `/Allproducts` : `/category/${e.target.value}`)
      }

  return (
    <div className={styles.categories}>

            <TextField
                  sx={{
                    '& > :not(style)': { m: 1, display: 'flex', width: '17ch', color:'white' },
                  }}
                  className={styles.filterByBrand}
                  variant="outlined"
                  id="outlined-select-currency"
                  name="categories"
                  select
                  label="All Categories"
                  value={categorySelect}
                  onChange={(e) => handleCategorySelect(e)}
              > 
                    <MenuItem value='Allproducts'>All Products</MenuItem>
                  {brandMap.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
          </TextField>

        <div className={styles.category}>
            <Link to='/Allproducts'>
                <img src="https://img.icons8.com/ios-filled/100/ffffff/package-delivery-logistics.png" alt="categoryLogo"/>
            </Link>   
            <span>All Products</span>
        </div>
        <div className={styles.category}>
            <Link to='/category/Laptops'>
                <img src="https://img.icons8.com/ios-filled/100/ffffff/laptop.png" alt="categoryLogo"/>
            </Link>
            <span>Laptops</span>
        </div>
        <div className={styles.category}>
            <Link to='/category/Monitors'>
                <img src="https://img.icons8.com/ios-filled/100/ffffff/imac.png" alt="categoryLogo"/>
            </Link>
            <span>Monitors</span>
        </div>
        <div className={styles.category}>
            <Link to='/category/Mouses'>
                <img src="https://img.icons8.com/ios-filled/100/ffffff/generic-mouse.png" alt="categoryLogo"/>
            </Link>
            <span>Mouses</span>
        </div>
        <div className={styles.category}>
            <Link to='/category/Headsets'>
                <img src="https://img.icons8.com/ios-filled/100/ffffff/headset.png" alt="categoryLogo"/>
            </Link>
            <span>Headsets</span>
        </div>
        <div className={styles.category}>
            <Link to='/category/Keyboards'>
                <img src="https://img.icons8.com/ios/100/ffffff/keyboard.png" alt="categoryLogo"/>
            </Link>   
            <span>Keyboards</span>
        </div>   
    </div>
  )
}

export default Categories
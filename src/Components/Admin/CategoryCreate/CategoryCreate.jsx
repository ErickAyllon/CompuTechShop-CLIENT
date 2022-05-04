import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './CategoryCreate.module.css'
import { postCategory } from '../../../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../../Redux/Actions';

function CategoryCreate() {

    const [input, setInput] = useState({name: ''});
    const [error, setError] = useState({});
    const dispatch = useDispatch();
    const allCategoriesCheck = useSelector((state) => state.categories)
    

    useEffect(() => {
        dispatch(getCategories());
      }, [dispatch]);

    function handleChange(e) {
        setInput({
            [e.target.name] : e.target.value
          })
          setError(validate({
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit() {
        dispatch(postCategory(input))
        setInput({name: ''});
        setError({});
    }



    function validate(input) {
        let error = {};
        let existent = false;
        allCategoriesCheck.map(p => p.name === input.name ? existent = true: null);
        if (existent) {
            error.name = 'That category already exists.'
        }
         if (!/^[A-Z]/.test(input.name)) {
            error.name = 'First letter must be uppercase';
        } if (input.name.length > 130) {
            error.name = 'Max 130 characters'; 
        } if (!input.name) {
            error.name = 'Name required';
        } if (input.name.length > 20) {
            error.name = 'Max 20 characters'; 
        } 
        return error;
    }

  return (
    <div className={styles.createCategory}>
        <div>
        <h1>Create a new category:</h1>
            <Box
            className={styles.form}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '45ch', color: "white", display: "flex" },
            }}
            noValidate
            autoComplete="off"
            >
        
                <TextField
                    variant="filled"
                    required
                    id="outlined-multiline-static"
                    name="name" 
                    onChange={handleChange} 
                    label="Create Category"
                    multiline
                    value={input.name}
                    error={error.name ? true : false}
                    helperText={error.name}
                />
              <Button type="submit" onClick={handleSubmit} variant="outlined" disabled={ error.name || input.name === '' ? true : false}>
                Create Category
              </Button>
            </Box>
        </div>
    </div>
  )
}

export default CategoryCreate
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from './SearchBar.module.css'
import {getProductsByName} from '../../Redux/Actions/index'
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [name, setName] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getProductsByName(name));
        setName('');
        navigate('/search/' + name)
    }
    
  return (
    <div className={styles.searchBarContainer}>
        <input className={styles.searchBarInput} value={name} type='text' placeholder='Search Product...' onChange={(e) => handleInputChange(e)} />
        <button className={styles.searchBarButton} type='submit' onClick={(e) => handleSubmit(e)} disabled={name === "" ? true : false}>Search</button>
    </div>
  )
}

export default SearchBar
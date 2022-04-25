import React, { useState } from 'react'
import styles from './SearchBar.module.css'

function SearchBar() {
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setName('');
    }
    
  return (
    <div className={styles.searchBarContainer}>
        <input className={styles.searchBarInput} value={name} type='text' placeholder='Search Product...' onChange={(e) => handleInputChange(e)} />
        <button className={styles.searchBarButton} type='submit' onClick={(e) => handleSubmit(e)} disabled={name === "" ? true : false}>Search</button>
    </div>
  )
}

export default SearchBar
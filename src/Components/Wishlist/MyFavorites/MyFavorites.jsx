import React from 'react'
import { useSelector } from 'react-redux'
import Categories from '../../Categories/Categories'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/Navbar'
import ProductCard from '../../ProductCard/ProductCard'
import styles from './MyFavorites.module.css'
import NoFavoritesFound from './NoFavoritesFound/NoFavoritesFound'
import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom'

function MyFavorites() {
    const navigate = useNavigate();
    const myFavorites = useSelector((state) => state.wishlist)
    const [load, setLoad] = useState(true)

    setTimeout(function () {
      setLoad(false)
    }, 1000)
  return (
    <div className={styles.myFavorites}>
        <NavBar />
        <Button variant='outlined' style={{margin:'10px auto 0 auto', display:'flex'}} onClick={() => navigate("/Allproducts")}>Back to Products</Button>
        <div className={styles.favTitle}>
            <h1>My favorites:</h1>
        </div>
        <div className={styles.myFavoritesContainer}>
        {
            load ?
                <CircularProgress color="inherit" style={{ position: 'absolute', top: '50%', left: '50%' }} />
            : 
            myFavorites.length > 0 ?    
                    <div className={styles.cardsContainer}>
                        {   myFavorites.length > 0 ?
                                myFavorites.map(e => {
                                    return(
                                        <ProductCard 
                                            key={e.id}
                                            name={e.product[0]} 
                                            price={e.price[0]} 
                                            image={e.image[0]} 
                                            calification={e.calification[0]} 
                                            wishlist={true}
                                        />
                                )})
                            : <NoFavoritesFound />
                        }
                    </div>
            : <NoFavoritesFound />
        }
        </div>
        <Footer />
    </div>
  )
}

export default MyFavorites
import React from 'react'
import { useSelector } from 'react-redux'
import Categories from '../../Categories/Categories'
import NavBar from '../../NavBar/Navbar'
import ProductCard from '../../ProductCard/ProductCard'
import styles from './MyFavorites.module.css'

function MyFavorites() {
    const myFavorites = useSelector((state) => state.wishlist)
  return (
    <div className={styles.myFavorites}>
        <NavBar />
        <Categories />
        <div className={styles.favTitle}>
            <h5>My wishlist:</h5>
        </div>
        <div className={styles.superCardsContainer}>
            <div className={styles.cardsContainer}>
                {   myFavorites.length > 0 ?
                    myFavorites.map(e => {
                        return(
                            <ProductCard 
                                name={e.product[0]} 
                                price={e.price[0]} 
                                image={e.image[0]} 
                                calification={e.calification[0]} 
                            />
                    )})
                    : null
                }
            </div>
        </div>
    </div>
  )
}

export default MyFavorites
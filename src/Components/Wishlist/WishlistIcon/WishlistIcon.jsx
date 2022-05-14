import React from 'react'
import styles from './WishlistIcon.module.css'
import emptyFavorite from '../../../Images/emptyFavorite.png'
import filledFavorite from '../../../Images/filledFavorite.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postWishlist, getWishlist, deleteWishlist } from '../../../Redux/Actions'
import { useAuth0 } from "@auth0/auth0-react";

function Wishlist({id, name}) {
    const dispatch = useDispatch();
    const { user } = useAuth0();
    const userss = useSelector((state) => state.users)
    const userAuth0Email = user?.email
    const userId = userss?.find(user => user.email === userAuth0Email)
    const myWishlist = useSelector((state) => state.wishlist);
    let whatIs;
    myWishlist?.map(e => e.product[0] === name ? whatIs = true : false)
    const [favorite, setFavorite] = useState(whatIs)

    const wishlist = {
      userId: userId?.id,
      products: name
    }

    function handleFavorite() {
      if (!favorite) {
        dispatch(postWishlist(wishlist))
        setFavorite(!favorite)
        setTimeout(() => {
          dispatch(getWishlist(userId.id))  
        }, "100") 
      }
    }
    
    function handleFavoriteDelete() {
      const wishlistId = myWishlist?.filter(e => e.product[0] === name)[0].id
      if (whatIs === true) {
        dispatch(deleteWishlist(wishlistId))
        setFavorite(false)
        setTimeout(() => {
          dispatch(getWishlist(userId.id))
        }, "100") 
      }
    }

  return (
    <div>
        { whatIs ?
            <button className={styles.filledFavorite} onClick={() => handleFavoriteDelete(id)}><img src={filledFavorite} alt="" /></button>
            :
            <button className={styles.emptyFavorite} onClick={() => handleFavorite(id)}><img src={emptyFavorite} alt="" /></button>
        }
    </div>
  )
}

export default Wishlist
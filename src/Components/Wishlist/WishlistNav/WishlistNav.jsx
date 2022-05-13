import React from 'react'
import styles from './WishlistNav.module.css'
import filledFavorite from '../../../Images/filledFavorite.png'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getWishlist } from '../../../Redux/Actions';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function WishlistNav() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const userss = useSelector((state) => state.users)
  const userAuth0Email = user?.email
  const userId = userss?.find(user => user.email === userAuth0Email)

  useEffect(() => {
    dispatch(getWishlist(userId?.id))
  }, [dispatch, userId])

  return (
    <div className={styles.wishlistNav}>
      <div className={styles.heart}>
        <Link to='/myfavorites'>
            <img src={filledFavorite} alt="profileImg" />
        </Link>
      </div>
    </div>
  )
}

export default WishlistNav
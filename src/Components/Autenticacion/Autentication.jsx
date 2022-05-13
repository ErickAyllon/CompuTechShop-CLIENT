import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react';
import { getActiveUser } from '../../Redux/Actions'
import { TYPES } from "../../Redux/Actions/shoppingCartActions";


function Autentication() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const userInfo = useSelector((state) => state.users2);
  const navigate = useNavigate()
  // useEffect(() => {
  //   if(user) dispatch(getActiveUser(user));
  // }, [dispatch]);

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   dispatch(getActiveUser(userInfo))
  // }
  const postUserActive = (userActive) => {

    dispatch({ type: TYPES.USER_ACTIVE, payload: userActive });
  };

  function handleOnClick(e) {
    e.preventDefault()
    if (user) {
      postUserActive(user)
      navigate("/")
    }
  }

  return (
    <div>
      <h1>You have been successfully authenticated  &#128512; </h1>
      <Link to='/'>
        <button onClick={handleOnClick}>Back!!asdgasdgds </button>
      </Link>

    </div>
  )
}

export default Autentication
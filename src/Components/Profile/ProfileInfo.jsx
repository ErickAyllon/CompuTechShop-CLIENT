import React,{useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserDetail, getUser } from "../../Redux/Actions";
// import { useParams } from 'react-router-dom'
// import Users from '../Users/UserCard'
import {useAuth0} from '@auth0/auth0-react';
import styles from './ProfileInfo.module.css'
import NavBar from "../NavBar/Navbar";
import Loader from "../Loader/Loader";
import MyOrders from "./MyOrders/MyOrders";

function ProfileInfo() {
 
  // let users = useSelector((state) => state.users2); 
  // let filtrado = users.filter(el => el.email === user.email);
  // const dispatch = useDispatch();
  // useEffect(() => {
    //   dispatch(getUser(email));
    // }, [dispatch]);
    // console.log(filtrado)
    
    const {user, isAuthenticated} = useAuth0();
  
  return (
    <div className={styles.profileInfo}>
      <NavBar/>
      {
        isAuthenticated ? 
          <div>
            <h2>{user.given_name}</h2>
            <h2>{user.family_name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.nickname}</h2> 
            <MyOrders />
          </div> 
        : 
          <Loader/> 
      }
    </div>
  )
 }

export default ProfileInfo;

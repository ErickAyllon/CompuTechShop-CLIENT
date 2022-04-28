import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useParams, useNavigate} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import {getUser} from "../../Redux/Actions/index.js"
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Dropdown } from "react-bootstrap";
import LogOutButton from "./LogOutButton";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  let myUsers = useSelector((state) => state.users)
  
  useEffect(()=> {
    dispatch(getUser())
  }, [dispatch])

  


  return (
    isAuthenticated && (
      <div className={styles.profile}>
        <img className={styles.profileImg} src={user.picture} alt="profileImg" />
        <h2>{user.name}</h2>
        <h2>{user.lastName}</h2>
        <h2>{user.nickname}</h2>
        <h2>{user.email}</h2>
        <h2>{user.email_verified}</h2>
        <h2>{user.age}</h2>
        <h2>{user.phone}</h2>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img
              className={styles.profileImg}
              src={user.picture}
              alt="profileImg"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
            <Dropdown.Item href="/admin">My Product</Dropdown.Item>
            <LogOutButton />
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  );
}

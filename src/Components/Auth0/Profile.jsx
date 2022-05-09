import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { getUser, getUserDetail } from "../../Redux/Actions/index.js";
import styles from "./Profile.module.css";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Dropdown } from "react-bootstrap";
import LogOutButton from "./LogOutButton";
import Profile2 from "../Profile/ProfileInfo.jsx";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();

  const dispatch = useDispatch();
  let myUsers = useSelector((state) => state.users2);


  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // console.log(user);
  return (
    isAuthenticated && (
      <div className={styles.profile}>
        <Dropdown className={styles.dropDown} active="false">
          <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            <img
              className={styles.profileImg}
              src={user.picture || user.image}
              alt="profileImg"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu
            className={styles.dropMenu}
            focusFirstItemOnShow="false"
            variant="dark"
          >

            <Dropdown.Item href={"/profile"}>My Profile</Dropdown.Item>

            {/* <Dropdown.Item href="/admin">My Orders</Dropdown.Item> */}
            <Dropdown.Divider />
            <Dropdown.Item href="" className={styles.logOutMenu}>
              <LogOutButton />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  );
}

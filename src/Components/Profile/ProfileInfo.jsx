import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./ProfileInfo.module.css";
import NavBar from "../NavBar/Navbar";
import Loader from "../Loader/Loader";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import MyOrders from "./MyOrders/MyOrders";

function ProfileInfo() {
  let currentUser = useSelector((state) => state.userActive);
  let allUsers = useSelector((state) => state.users2);

  let filteredUser = allUsers.filter((el) => el.email === currentUser.email);

  const { user, isAuthenticated } = useAuth0();

  if (filteredUser.length !== 0) {
    return (
      <div>
        <NavBar />
        {filteredUser ? (
          <div className={styles.profileInfo}>
            <div>
              <img
                className={styles.img}
                src={filteredUser[0].picture}
                alt="Not found"
              />
            </div>
            <div className={styles.h2Div}>
              <h2 className={styles.h2}>{filteredUser[0].given_name}</h2>
              <h2 className={styles.h2}>{filteredUser[0].family_name}</h2>
              <h2 className={styles.h2}>{filteredUser[0].email}</h2>
              <h2 className={styles.h2}>{filteredUser[0].address}</h2>
              <h2 className={styles.h2}>{filteredUser[0].phone}</h2>
              <h2 className={styles.h2}>{filteredUser[0].birthday}</h2>
            </div>
            <div className={styles.button}>
              <Link to="/AutenticationUpdate">
                <Button variant="outlined">Update Your Profile</Button>
              </Link>
            </div>
            <div>
              <MyOrders />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        {isAuthenticated && (
          <div className={styles.profileInfo}>
            <div>
              <img className={styles.img} src={user.picture} alt="Not found" />
            </div>
            <div className={styles.h2Div}>
              <h2>{user.given_name}</h2>
              <h2>{user.family_name}</h2>
              <h2>{user.email}</h2>
              <h2>{user.nickname}</h2>
            </div>
            <div className={styles.button}>
              <Link to="/form">
                <Button variant="outlined">Complete Your Profile</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileInfo;

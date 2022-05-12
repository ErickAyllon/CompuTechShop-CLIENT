import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserDetail, getUser } from "../../Redux/Actions";
import { useParams, Link } from "react-router-dom";
// import Users from '../Users/UserCard'
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./ProfileInfo.module.css";
import NavBar from "../NavBar/Navbar";
import Loader from "../Loader/Loader";
import Button from "@mui/material/Button";

function ProfileInfo() {
  // let users = useSelector((state) => state.users2);
  // let filtrado = users.filter(el => el.email === user.email);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUser(email));
  // }, [dispatch]);
  // console.log(filtrado)

  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <NavBar />
      {isAuthenticated ? (
        <div className={styles.profileInfo}>
          <div>
            <img className={styles.img} src={user.picture} alt="Not found" />
          </div>
          <div className={styles.h2Div}>
            <h2 className={styles.h2}>{user.given_name}</h2>
            <h2 className={styles.h2}>{user.family_name}</h2>
            <h2 className={styles.h2}>{user.email}</h2>
            <h2 className={styles.h2}>{user.nickname}</h2>
          </div>
          <div className={styles.button}>
            <Link to="/form">
              <Button variant="outlined">Complete Your Profile</Button>
            </Link>
            <Link to="/UpdateProfile">
              <Button variant="outlined">Update Your Profile</Button>
            </Link>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ProfileInfo;

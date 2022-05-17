import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUser, authenticate } from "../../Redux/Actions/index.js";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";
import logo3 from "../../Images/logo3.png";

function Welcome() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  //-----------------------------------------
  let allUsers = useSelector((state) => state.users2);

  let userLocal = [];

  if (user) {
    localStorage.setItem("email", user.email);
  }

  userLocal.email = localStorage.getItem("email");

  let filteredUser = allUsers.filter((el) => el.email === userLocal.email);
  //-----------------------------------------

  const auth0Email = user?.email;
  const userLogged =
    users?.length > 0 ? users?.find((e) => e.email === auth0Email) : false;
  localStorage.setItem("extraAddress", userLogged.address)
  useEffect(() => {
    dispatch(getUser());
    dispatch(authenticate(userLogged));
  }, [dispatch]);

  if (filteredUser.length !== 0) {
    return (
      <div className={styles.welcome}>
        <div className={styles.welcomeContainer}>
          <h1>Welcome to CompuTechShop!</h1>
          <img src={logo3} alt="logo" />
          <Link to="/">
            <Button variant="outlined">Go Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (filteredUser.length === 0) {
    return (
      <div className={styles.welcome}>
        <div className={styles.welcomeContainer}>
          <h1>Welcome to CompuTechShop!</h1>
          <img src={logo3} alt="logo" />
          <Link to="/form">
            <Button variant="outlined">Go Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;

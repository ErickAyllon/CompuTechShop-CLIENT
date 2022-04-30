import React, { useState } from "react";
import Profile from "../Auth0/Profile.jsx";
import LoginButton from "../Auth0/LoginButton.jsx";
import LogOutButton from "../Auth0/LogOutButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { Switch } from "@mui/material";
import { darkMode } from "../../Redux/Actions/index.js";
import { useDispatch } from "react-redux";

function NavBar() {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    dispatch(darkMode(!isDarkTheme));
  };
  return (
    <div>
      <nav className={styles.NavBar}>
        <Link to="/">
          <div className={styles.logo} />
        </Link>
        <div className={styles.searchBarCall}>
          <SearchBar />
        </div>
        <div className={styles.auth0}>
          {isAuthenticated ? <Profile /> : <LoginButton />}
        </div>
        <Switch checked={isDarkTheme} onChange={changeTheme} />
      </nav>
    </div>
  );
}

export default NavBar;

import React, { useState } from "react";
import Profile from "../Auth0/Profile.jsx";
import LoginButton from "../Auth0/LoginButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { darkMode } from "../../Redux/Actions/index.js";
import { useDispatch } from "react-redux";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

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
        <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="primary">
          { isDarkTheme ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <div className={styles.auth0}>
          {isAuthenticated ? <Profile /> : <LoginButton />}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

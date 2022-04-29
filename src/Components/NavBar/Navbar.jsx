import React from "react";
import Profile from "../Auth0/Profile.jsx";
import LoginButton from "../Auth0/LoginButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

function NavBar() {
  const { isAuthenticated } = useAuth0();
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
      </nav>

      {/* <div className={styles.navCategories}>
        <Dropdown className="d-inline mx-2" id="dropDown">
          <Dropdown.Toggle id="dropstart-autoclose-true">
            Categories
          </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item href="https://listado.mercadolibre.com.ar/notebooks#D[A:notebooks]" target="_blank">Notebooks</Dropdown.Item>
            <Dropdown.Item href="#">Monitors</Dropdown.Item>
            <Dropdown.Item href="#">Mouses</Dropdown.Item>
            <Dropdown.Item href="#">Headsets</Dropdown.Item>
            <Dropdown.Item href="#">Keyboards</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div> */}
    </div>
  );
}

export default NavBar;

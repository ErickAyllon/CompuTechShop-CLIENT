import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Dropdown } from "react-bootstrap";
import LogOutButton from "./LogOutButton";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className={styles.profile}>
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

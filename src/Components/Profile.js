import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css";

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <div>
          <img
            className={styles.imgProfile}
            src={user.picture}
            alt="profileImg"
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
}

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Profile.module.css'

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className={styles.profile}>
        <img className={styles.profileImg} src={user.picture} alt="profileImg" />
        <h2>{user.given_name}</h2>

        {/* <p>{user.email}</p> */}
        {/* <pre>{JSON.stringify(user)}</pre> */}
      </div>
    )
  );
}

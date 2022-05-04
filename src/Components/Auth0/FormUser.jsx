import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const FormUser = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        {user.given_name ? (
          <label>
            Firstname:
            <input type="text" value={user.given_name} disabled />
          </label>
        ) : (
          <label>
            FirstName:
            <input type="text" />
          </label>
        )}
        {user.family_name ? (
          <label>
            Apellido:
            <input type="text" value={user.family_name} disabled />
          </label>
        ) : (
          <label>
            Lastname:
            <input type="text" />
          </label>
        )}
        {user.nickname ? (
          <label>
            NickName:
            <input type="text" value={user.nickname} disabled />
          </label>
        ) : (
          <label>
            Nickname:
            <input type="text" />
          </label>
        )}
        {user.email ? (
          <label>
            E-mail:
            <input type="text" value={user.email} disabled />
          </label>
        ) : (
          <label>
            E-mail:
            <input type="text" />
          </label>
        )}
        {user.picture ? (
          <label>
            Imagen:
            <input type="text" value={user.picture} disabled />
          </label>
        ) : (
          <label>
            Lastname:
            <input type="text" />
          </label>
        )}
        <label>
          Age:
          <input type="text" />
        </label>
        <label>
          Phone:
          <input type="text" />
        </label>
        <label>
          Address:
          <input type="text" />
        </label>
      </div>
    )
  );
};

export default FormUser;

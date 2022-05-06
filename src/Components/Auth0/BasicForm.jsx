import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const BasicForm = ({ handleChange, handleSubmit, isSubmitting, values }) => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <form onSubmit={handleSubmit}>
        {user.given_name ? (
          <label>
            First Name:
            <input
              name="given_name"
              value={user.given_name}
              required
              disabled
            />
          </label>
        ) : (
          <label>
            First Name:
            <input
              onChange={handleChange}
              name="given_name"
              value={values.given_name}
              required
            />
          </label>
        )}

        {user.family_name ? (
          <label>
            Last Name:
            <input
              name="family_name"
              value={values.family_name}
              required
              disabled
            />
          </label>
        ) : (
          <label>
            Last Name:
            <input
              name="family_name"
              onChange={handleChange}
              value={values.family_name}
              required
            />
          </label>
        )}

        {user.email ? (
          <label>
            E-mail:
            <input name="email" defaultValue={values.email} disabled required />
          </label>
        ) : (
          <label>
            E-mail:
            <input
              name="email"
              onChange={handleChange}
              defaultValue={values.email}
              required
            />
          </label>
        )}

        {user.nickname ? (
          <input
            name="nickname"
            defaultValue={values.nickname}
            required
            disabled
            hidden
          />
        ) : (
          <label>
            Nickname:
            <input
              name="nickname"
              onChange={handleChange}
              defaultValue={values.nickname}
              required
            />
          </label>
        )}

        {user.picture ? (
          <label>
            Picture:
            <input
              name="picture"
              defaultValue={values.picture}
              disabled
              required
            />
          </label>
        ) : (
          <label>
            Picture:
            <input
              name="picture"
              onChange={handleChange}
              defaultValue={values.picture}
              required
            />
          </label>
        )}

        <input
          name="email_verified"
          defaultValue={values.email_verified}
          disabled
          required
          hidden
        />

        <label>
          Address:
          <input
            name="address"
            onChange={handleChange}
            value={values.address}
            required
          />
        </label>

        <label>
          Phone:
          <input
            name="phone"
            onChange={handleChange}
            value={values.phone}
            required
          />
        </label>

        <label>
          Birthdate:
          <input
            type="date"
            name="birthday"
            onChange={handleChange}
            value={values.birthday}
            required
          />
        </label>

        <button disabled={isSubmitting} type="submit">
          Create User
        </button>
      </form>
    )
  );
};

export default BasicForm;

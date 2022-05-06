import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions";
import { Formik } from "formik";
import BasicForm from "./BasicForm";
import { useNavigate } from "react-router-dom";
import styles from './FormUser.module.css'

const FormUser = () => {
  const { user, isAuthenticated } = useAuth0();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className={styles.formUser}>
  {    
  isAuthenticated && (
        <Formik
          initialValues={{
            given_name: user.given_name,
            family_name: user.family_name,
            email: user.email,
            nickname: user.nickname,
            email_verified: user.email_verified,
            picture: user.picture,
            address: "",
            phone: "",
            birthday: "",
          }}
          onSubmit={(values) => {
            dispatch(postUser(values));
            alert("USIARIO CREADO");
            navigate("/");
          }}
        >
          {(props) => <BasicForm {...props} />}
        </Formik>
      )
      }
  </div>
  );
};

export default FormUser;



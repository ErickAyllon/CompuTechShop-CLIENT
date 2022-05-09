import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { postUser } from "../../Redux/Actions";
import { Formik } from "formik";
import BasicForm from "./BasicForm";
import { useNavigate } from "react-router-dom";
import styles from "./FormUser.module.css";

const validation = (values) => {
  let errors = {};

  if (!values.given_name) {
    errors.given_name = "First name is required!";
  } else if (values.given_name.length <= 1) {
    errors.given_name = "First name has to be 2 character at less!";
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/.test(values.given_name)) {
    errors.given_name = "First name can only contain letters";
  }

  if (!values.family_name) {
    errors.family_name = "Last name is required!";
  } else if (values.family_name.length <= 1) {
    errors.family_name = "Last name has to be 2 character at less!";
  } else if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/.test(values.family_name)) {
    errors.family_name = "Last name can only contain letters";
  }

  if (!values.email) {
    errors.email = "E-mail is required";
  } else if (
    !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      values.email
    )
  ) {
    errors.email = "You should enter a valid E-mail";
  }

  if (!values.nickname) {
    errors.nickname = "Nickname is required";
  }

  if (!values.picture) {
    errors.picture = "Picture is required";
  } else if (
    !/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/.test(
      values.picture
    )
  ) {
    errors.picture =
      "Picture file type should be .jpg, .gif, .png, .jpge, .img";
  }

  if (!values.address) {
    errors.address = "Address is required";
  } else if (values.address.length < 6) {
    errors.address = "You should enter a valid address";
  } else if (!/^[#.0-9a-zA-Z\s,.]+$/.test(values.address)) {
    errors.address = "Only special characters allowed are ('.' and ',')";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (values.phone.length < 9 || values.phone.length > 11) {
    errors.phone = "You should enter a valid phone number";
  } else if (!/^([0-9])*$/.test(values.phone)) {
    errors.phone = "You should enter a valid phone NUMBER";
  }

  if (!values.birthday) {
    errors.birthday = "Birthdate is required";
  } else if (
    !/^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/.test(
      values.birthday
    )
  ) {
    errors.birthday = "You should enter a valid birthdate";
  }
  return errors;
};

const FormUser = () => {
  const { user, isAuthenticated } = useAuth0();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className={styles.formUser}>
      {isAuthenticated && (
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
          validate={validation}
        >
          {(props) => <BasicForm {...props} />}
        </Formik>
      )}
    </div>
  );
};

export default FormUser;

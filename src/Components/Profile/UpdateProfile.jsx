import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Redux/Actions";
import { Formik } from "formik";
import UpdateForm from "./UpdateForm";
import style from "./UpdateProfile.module.css";
import NavBar from "../NavBar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const validation = (values) => {
  let errors = {};
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
  return errors;
};

const UpdateProfile = () => {
  let currentUser = useSelector((state) => state.userActive);
  let allUsers = useSelector((state) => state.users2);

  let filteredUser = allUsers.filter((el) => el.email === currentUser.email);

  let id = filteredUser.map((el) => el.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={style.UpdateProfile}>
      <NavBar />
      <Formik
        initialValues={{
          given_name: filteredUser[0].given_name,
          family_name: filteredUser[0].family_name,
          email: filteredUser[0].email,
          nickname: filteredUser[0].nickname,
          email_verified: filteredUser[0].email_verified,
          picture: "",
          address: "",
          phone: "",
          birthday: filteredUser[0].birthday,
        }}
        onSubmit={(values) => {
          dispatch(updateUser(id, values));
          alert("USER WAS UPDATED SUCCESSFULLY");
          navigate("/profile");
        }}
        validate={validation}
      >
        {(props) => <UpdateForm {...props} />}
      </Formik>
    </div>
  );
};

export default UpdateProfile;

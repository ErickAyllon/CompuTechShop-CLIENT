import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserDetail, updateUser } from "../../Redux/Actions";
import { Formik } from "formik";
import UpdateForm from "./UpdateForm";
import style from "./UpdateProfile.module.css";
import NavBar from "../NavBar/Navbar";

const UpdateProfile = () => {
  const currentUser = useSelector((state) => state.userDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.UpdateProfile}>
      <NavBar />
      <Formik
        initialValues={{
          given_name: "",
          family_name: "",
          email: "",
          nickname: "",
          email_verified: "",
          picture: "",
          address: "",
          phone: "",
          birthday: "",
        }}
        onSubmit={(values) => {
          dispatch(updateUser(id, values));
          alert("USER WAS UPDATED SUCCESSFULLY");
          navigate("/profile");
        }}
        // validate={validation}
      >
        {(props) => <UpdateForm {...props} />}
      </Formik>
    </div>
  );
};

export default UpdateProfile;

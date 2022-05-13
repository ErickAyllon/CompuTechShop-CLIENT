import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUser } from "../../Redux/Actions";
import { TYPES } from "../../Redux/Actions/shoppingCartActions";

function AutenticationUpdate() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const navigate = useNavigate();
  const postUserActive = (userActive) => {
    dispatch({ type: TYPES.USER_ACTIVE, payload: userActive });
  };

  function handleOnClick(e) {
    e.preventDefault();
    if (user) {
      postUserActive(user);
      navigate("/UpdateProfile");
    }
  }

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <h1>You have been successfully authenticated &#128512; </h1>
      <button onClick={handleOnClick}>Back!!asdgasdgds </button>
    </div>
  );
}

export default AutenticationUpdate;

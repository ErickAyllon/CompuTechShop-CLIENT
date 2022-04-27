import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LoginButton.module.css";

// function handleSubmit(e) {
//   e.preventDefault();

//   if (Object.values(errors).length > 0) {
//     alert("Por favor complete con la información requerida");
//   } else if (
//     input.name === "" &&
//     input.summary === "" &&
//     input.spoonacularScore === "" &&
//     input.healthScore === "" &&
//     input.steps === "" &&
//     !input.dietTypes.length
//   ) {
//     alert("Por favor complete el formulario");
//   } else {
//     dispatch(addRecipe(input));
//     alert("Nueva receta agregada correctamente");
//     setInput({
//       name: "",
//       summary: "",
//       spoonacularScore: "",
//       healthScore: "",
//       steps: "",
//       dietTypes: [],
//       image: "",
//     });
//     history.push("/home");
//   }
// }
function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className={styles.logInButton}
      onClick={() => {
        loginWithRedirect();
      }}
      // onSubmit={(e) => handleSubmit(e)}
    >
      <p>Log in</p>
    </button>
  );
}

export default LoginButton;

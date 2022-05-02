import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./Redux/Store/index.js";
import dotenv from "dotenv";
dotenv.config();

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin + process.env.PUBLIC_URL + "/"}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>
);

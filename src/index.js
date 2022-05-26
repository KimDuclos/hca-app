import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import {createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Auth0Provider
    domain="hcaapp.us.auth0.com"
    clientId="fsYFvI3Ja0vHW3ZU0jAyjxDBv8MaEipf"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
);

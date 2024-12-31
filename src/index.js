import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./Context/LanguageContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./i18n/i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading translations...</div>}>
      <LanguageProvider>
        <GoogleOAuthProvider clientId={clientId}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </LanguageProvider>
    </Suspense>
  </React.StrictMode>
);

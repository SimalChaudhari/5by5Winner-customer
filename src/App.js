import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import ForgotPassword from "./pages/auth/ForgotPassword";
import TermsAndConditions from "./pages/auth/TermsAndConditions";
import EmailConfirmation from "./pages/auth/EmailConfirmation";
import KYCContainer from "./pages/auth/KYC/KYCContainer";
import LanguageLogger from "./i18n/LanguageLogger";
import Play from "./pages/Play";
import ProfileSetting from "./pages/auth/ProfileSetting";

function App() {
  return (
    <Layout>
      <LanguageLogger />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/confirm-email" element={<EmailConfirmation />} />
        <Route path="/kyc" element={<KYCContainer />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
      </Routes>
    </Layout>
  );
}

export default App;

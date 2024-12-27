import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { showAlert } from "../../utils/alertUtils";

const EmailConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Email state from navigation
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      // Redirect to registration if email is not available
      navigate("/register");
    }
  }, [location, navigate]);

  const handleResendEmail = () => {
    // Simulate API call for resending the email
    console.log("Resending email to:", email);
    showAlert("Verification email has been resent successfully!", "success");
  };

  return (
    <div className="relative bg-theme-gradient min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0">
        <div className="absolute w-16 h-16 bg-purple-600 rounded-full opacity-20 top-10 left-20 animate-pulse"></div>
        <div className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-30 top-40 left-60 animate-ping"></div>
        <div className="absolute w-10 h-10 bg-purple-700 rounded-full opacity-20 top-80 right-20 animate-pulse"></div>
        <div className="absolute w-20 h-20 bg-purple-400 rounded-full opacity-25 bottom-20 left-40 animate-bounce"></div>
      </div>

      {/* Email Confirmation Section */}
      <div className="w-full max-w-md bg-black bg-opacity-80 rounded-lg shadow-lg p-8 z-10">
        <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">
          Confirm Your Email
        </h2>

        <p className="text-gray-300 text-center mb-6">
          Please check your email & click the verification link to activate
          your account.
        </p>

        {/* Email Display */}
        <div className="bg-gray-800 rounded-lg p-4 text-gray-100 mb-4">
          <label className="text-sm text-gray-400">Registered Email</label>
          <p className="font-bold text-white mt-1">
            {email.replace(/(.{4}).*(@.*)/, "$1******$2")}
          </p>
        </div>

        {/* Resend Email Button */}
        <div className="text-center">
          <button
            onClick={handleResendEmail}
            className="py-2 px-4 bg-purple-500 text-black font-bold rounded-full hover:bg-purple-600 transition duration-200"
          >
            Resend Verification Email
          </button>
        </div>

        <div className="text-center mt-4 text-gray-400">
          Registered with the wrong email?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-purple-400 hover:text-purple-500 font-bold"
          >
            Register Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;

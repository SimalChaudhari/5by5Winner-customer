import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import { showAlert } from "../../utils/alertUtils";
import { fetchGoogleUserDetails } from "../../services/socialLogin";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const Register = () => {
  const recaptchaRef = useRef(null);
  const navigate = useNavigate();
  const [dateOfBirth, setDateOfBirth] = useState(null);

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      const token = recaptchaRef.current?.getValue();
      if (!token) {
        showAlert("Please complete the reCAPTCHA", "error");
        return;
      }
      if (!dateOfBirth) {
        showAlert("Date of Birth is required", "error");
        return;
      }
      console.log("Registration Successful:", { ...values, dateOfBirth });
      showAlert("Registration Successful!", "success");

      // Redirect to Terms and Conditions Page
      navigate("/terms-and-conditions");
    },
  });

  // Social Login Logic
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log("Google Login Successful:", tokenResponse);
  
        // Fetch user details using the access token
        const userData = await fetchGoogleUserDetails(tokenResponse.access_token);
  
        console.log("Google User Data:", userData);
        showAlert("Google Login Successful!", "success");
  
        // Redirect to Terms and Conditions Page
        navigate("/terms-and-conditions");
      } catch (error) {
        console.error("Error during Google Login:", error);
        showAlert("Failed to fetch Google user details", "error");
      }
    },
    onError: () => showAlert("Google Login Failed", "error"),
  });  

  const handleFacebookResponse = (response) => {
    if (response.accessToken) {
      console.log("Facebook Login Successful:", response);
      showAlert(`Welcome ${response.name}`, "success");

      // Redirect to Terms and Conditions Page
      navigate("/terms-and-conditions");
    } else {
      showAlert("Facebook Login Failed", "error");
    }
  };

  const handleLinkedInLogin = () => {
    const params = new URLSearchParams({
      response_type: "code",
      client_id: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_LINKEDIN_REDIRECT_URI,
      scope: "r_liteprofile r_emailaddress",
    });
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`;
  };

  return (
    <div className="relative bg-gradient-to-b  to-gray-900 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0">
        <div className="absolute w-16 h-16 bg-purple-600 rounded-full opacity-20 top-10 left-20 animate-pulse"></div>
        <div className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-30 top-40 left-60 animate-ping"></div>
        <div className="absolute w-10 h-10 bg-purple-700 rounded-full opacity-20 top-80 right-20 animate-pulse"></div>
        <div className="absolute w-20 h-20 bg-purple-400 rounded-full opacity-25 bottom-20 left-40 animate-bounce"></div>
      </div>

      <div className="w-full max-w-lg border border-purple-700 p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">REGISTER</h2>

        {/* Social Login Buttons */}
        <div className="space-y-4 mb-6">
          <button
            className="w-full py-3 border border-purple-700 hover:bg-purple-500 text-white rounded-lg flex items-center justify-center space-x-4"
            onClick={handleGoogleLogin}
          >
            <img
              src="https://script.viserlab.com/lottolab/assets/templates/basic/images/google.svg"
              alt="Google"
              className="w-5"
            />
            <span>Register with Google</span>
          </button>

          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={handleFacebookResponse}
            render={(renderProps) => (
              <button
                className="w-full py-3 border border-purple-700 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center space-x-4"
                onClick={renderProps.onClick}
              >
                <img
                  src="https://script.viserlab.com/lottolab/assets/templates/basic/images/facebook.svg"
                  alt="Facebook"
                  className="w-5"
                />
                <span>Register with Facebook</span>
              </button>
            )}
          />

          <button
            className="w-full py-3 border border-purple-700 hover:bg-indigo-500 text-white rounded-lg flex items-center justify-center space-x-4"
            onClick={handleLinkedInLogin}
          >
            <img
              src="https://script.viserlab.com/lottolab/assets/templates/basic/images/linkdin.svg"
              alt="LinkedIn"
              className="w-5"
            />
            <span>Register with LinkedIn</span>
          </button>
        </div>

        <div className="text-center text-purple-400 mb-4">OR</div>

        {/* Registration Form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-2 bg-gray-900 text-white border border-purple-700 rounded focus:ring focus:ring-purple-500"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-2 bg-gray-900 text-white border border-purple-700 rounded focus:ring focus:ring-purple-500"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
              )}
            </div>
          </div>

          <div className="mt-4 mb-4">
            <DatePicker
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Date of Birth"
              maxDate={new Date()}
              className="w-full p-2 bg-gray-900 text-white border border-purple-700 rounded focus:ring focus:ring-purple-500"
            />
            {!dateOfBirth && formik.submitCount > 0 && (
              <div className="text-red-500 text-sm">Date of Birth is required</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 bg-gray-900 text-white border border-purple-700 rounded focus:ring focus:ring-purple-500"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="mt-4 flex space-x-4">
            <div className="w-1/2">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:ring focus:ring-purple-500"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-2 bg-gray-900 text-white border border-purple-700 rounded focus:ring focus:ring-purple-500"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
              )}
            </div>
          </div>

          <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} className="mt-4 mb-4" />

          <button
            type="submit"
            className="w-full py-2 bg-purple-500 text-white font-bold rounded hover:bg-purple-600"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:text-purple-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

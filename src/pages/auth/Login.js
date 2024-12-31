import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { showAlert } from "./../../utils/alertUtils";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleOAuthProvider, googleLogout, useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginComponent } from "../../components";
import { fetchLinkedInData } from "../../services/auth/getdata";

const Login = () => {

    const GoogleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const FacebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
    const FetchUserData = process.env.REACT_APP_GOOGLE_API_URL;
    const LinkedInClientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID;

    const [user, setUser] = useState(null); // Store logged-in user details
    const recaptchaRef = React.useRef(null);
    const [linkedInError, setLinkedInError] = useState(null);
    const [linkedInCode, setLinkedInCode] = useState(null);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
        }),
        onSubmit: (values) => {
            const token = recaptchaRef.current.getValue();
            if (!token) {
                showAlert("Please complete the reCAPTCHA", "error");
                return;
            }
            console.log("Form Submitted", values);
            showAlert("Login Successful!", "success");
        },
    });

    const handleGoogleLoginSuccess = (decodedToken) => {
        setUser(decodedToken); // Set user details
    };

    const handleFacebookResponse = (response) => {
        if (response.accessToken) {
            setUser(response); // Store Facebook user details
            // console.log("Facebook Login Response:", response);
            showAlert(`Welcome ${response.name}`, "success");
        } else {
            console.log("Facebook Login Failed");
            showAlert("Facebook Login Failed", "error");
        }
    };


    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
    
        const error = queryParams.get("error");
        const errorDescription = queryParams.get("error_description");
    
        if (error) {
          console.error("LinkedIn login error:", errorDescription);
          setLinkedInError(errorDescription);
        } else {
          const code = queryParams.get("code");
          if (code) {
            console.log("LinkedIn Authorization Code:", code);
            setLinkedInCode(code);
    
            // Call the backend API to fetch LinkedIn data
            fetchLinkedInData(code)
              .then((data) => {
                console.log("LinkedIn Data:", data);
                setUser(data.user_data)
                // setLinkedInData(data);
              })
              .catch((err) => {
                console.error("Error fetching LinkedIn data:", err);
                setLinkedInError(err.message);
              });
          }
        }
      }, []);

    const handlelinkedInLogin = () => {
        const params = new URLSearchParams({
            response_type: 'code',
            client_id: LinkedInClientId,
            redirect_uri: 'http://localhost:3000/login', // Registered redirect URI
            scope: 'openid profile email w_member_social', // Correct scopes for basic user data
        });
        window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`;

    };

    const handleLogout = () => {
        googleLogout(); // Perform logout
        setUser(null); // Clear user details
        console.log("User logged out");
        showAlert("Logged out successfully!", "success");
    };

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            // Fetch user info using the access token
            const userInfo = await fetch(FetchUserData, {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`,
                },
            });

            const userInfoJson = await userInfo.json();
            showAlert(`Welcome ${userInfoJson.name}`, "success");
            // Process user info
            setUser(userInfoJson);
        },
        onError: () => {
            console.error("Google Login Failed");
        },
    });

    
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Dots */}
            <div className="absolute inset-0">
                <div className="absolute w-16 h-16 bg-purple-600 rounded-full opacity-20 top-10 left-20 animate-pulse"></div>
                <div className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-30 top-40 left-60 animate-ping"></div>
                <div className="absolute w-10 h-10 bg-purple-700 rounded-full opacity-20 top-80 right-20 animate-pulse"></div>
                <div className="absolute w-20 h-20 bg-purple-400 rounded-full opacity-25 bottom-20 left-40 animate-bounce"></div>
            </div>

            {/* Login Form */}
            <div className="w-full max-w-md border-auth bg-opacity-90 rounded-lg shadow-lg p-8 z-10">
                <h2 className="text-purple-400 text-2xl font-bold text-center mb-6">Login</h2>

                <GoogleOAuthProvider clientId={GoogleClientId}>
                    {user ? (
                        <div className="text-center">
                            <p className="text-white mb-4">Logged in as: {user.name}</p>
                            <button
                                className="w-full py-3 bg-red-500 text-white rounded-full hover:bg-red-600"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="hidden">
                            <GoogleLoginComponent onSuccessCallback={handleGoogleLoginSuccess} />

                        </div>
                    )}
                </GoogleOAuthProvider>

                {!user && (
                    <div>
                        {/* Social Login Buttons */}
                        <div className="space-y-4 mb-8">

                            <button className="w-full py-3 text-white rounded-full hover:bg-skyBlue hover:text-customindigo flex justify-center items-center space-x-4 border-[1px] border-skyBlue"
                                onClick={() => login()}
                            >
                                <img
                                    src="https://script.viserlab.com/lottolab/assets/templates/basic/images/google.svg"
                                    alt="Google"
                                    className="w-5"
                                />
                                <span>Login with Google </span>
                            </button>

                            <div className="space-y-4 mb-8">
                                <FacebookLogin
                                    appId={FacebookAppId}
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={handleFacebookResponse}
                                    render={(renderProps) => (
                                        <button
                                            className="w-full py-3 text-white rounded-full hover:bg-skyBlue hover:text-customindigo flex justify-center items-center space-x-4 border-[1px] border-skyBlue"
                                            onClick={renderProps.onClick}
                                        >
                                            <img
                                                src="https://script.viserlab.com/lottolab/assets/templates/basic/images/facebook.svg"
                                                alt="Facebook"
                                                className="w-5"
                                            />
                                            <span>Login with Facebook</span>
                                        </button>
                                    )}
                                />
                            </div>




                            <button
                                className="w-full py-3 text-white rounded-full hover:bg-skyBlue hover:text-customindigo flex justify-center items-center space-x-4 border-[1px] border-skyBlue"
                                onClick={handlelinkedInLogin}
                            >
                                <img
                                    src="https://script.viserlab.com/lottolab/assets/templates/basic/images/linkdin.svg"
                                    alt="LinkedIn"
                                    className="w-5"
                                />
                                <span>Login with LinkedIn</span>
                            </button>
                        </div>

                        <div className="text-center text-gray-400 my-4">OR</div>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-4">
                                <label className="text-purple-400 block mb-1" htmlFor="email">
                                    Username or Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    autoComplete="new-new"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Enter your email"
                                    {...formik.getFieldProps("email")}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="text-purple-400 block mb-1" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                    className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Enter your password"
                                    {...formik.getFieldProps("password")}
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                )}
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <label className="flex items-center text-gray-400">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        {...formik.getFieldProps("rememberMe")}
                                        className="mr-2"
                                    />
                                    Remember Me
                                </label>
                                <Link to="/forgot-password" className="text-purple-400 hover:text-purple-500">
                                    Forgot Password?
                                </Link>
                            </div>

                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                className="mb-4"
                            />

                            <button
                                type="submit"
                                className="w-full py-2 bg-purple-500 text-black font-bold rounded-full hover:bg-purple-600"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;

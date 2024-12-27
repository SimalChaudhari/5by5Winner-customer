import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import DatePicker from "react-datepicker"; // Import the date picker
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for date picker
import { Link, useNavigate } from "react-router-dom";
import { showAlert } from "./../../utils/alertUtils";

const Register = () => {
    const recaptchaRef = useRef(null);
    const navigate = useNavigate();
    const [dateOfBirth, setDateOfBirth] = useState(null); // State for Date of Birth

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
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
        }),
        onSubmit: (values) => {
            const token = recaptchaRef.current.getValue();
            if (!token) {
                showAlert("Please complete the reCAPTCHA", "error");
                return;
            }
            if (!dateOfBirth) {
                showAlert("Date of Birth is required", "error");
                return;
            }
            console.log("Registration Successful", { ...values, dateOfBirth });
            showAlert("Registration Successful!", "success");

            // Redirect to Terms and Conditions Page
            navigate("/terms-and-conditions");
        },
    });

    return (
        <div className="relative bg-theme-gradient min-h-screen flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0">
                {/* Background Dots */}
                <div className="absolute w-16 h-16 bg-purple-600 rounded-full opacity-20 top-10 left-20 animate-pulse"></div>
                <div className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-30 top-40 left-60 animate-ping"></div>
                <div className="absolute w-10 h-10 bg-purple-700 rounded-full opacity-20 top-80 right-20 animate-pulse"></div>
                <div className="absolute w-20 h-20 bg-purple-400 rounded-full opacity-25 bottom-20 left-40 animate-bounce"></div>
            </div>

            <div className="w-full max-w-lg bg-black bg-opacity-80 rounded-lg shadow-lg p-8 z-10">
                <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">REGISTER</h2>

                <div className="space-y-4 mb-8">
                    <button className="w-full py-3 text-white rounded-full hover:bg-skyBlue hover:text-customindigo flex justify-center items-center space-x-4 border-[1px] border-skyBlue">
                        <img src="https://script.viserlab.com/lottolab/assets/templates/basic/images/google.svg" alt="Google" className="w-5" />
                        <span>Login with Google</span>
                    </button>
                    <button className="w-full py-3 text-white rounded-full hover:bg-skyBlue hover:text-customindigo flex justify-center items-center space-x-4 border-[1px] border-skyBlue">
                        <img src="https://script.viserlab.com/lottolab/assets/templates/basic/images/facebook.svg" alt="Facebook" className="w-5" />
                        <span>Login with Facebook</span>
                    </button>
                    <button className="w-full py-3 text-white rounded-full hover:bg-skyBlue hover:text-customindigo flex justify-center items-center space-x-4 border-[1px] border-skyBlue">
                        <img src="https://script.viserlab.com/lottolab/assets/templates/basic/images/linkdin.svg" alt="LinkedIn" className="w-5" />
                        <span>Login with LinkedIn</span>
                    </button>
                </div>
                {/* Registration Form */}
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex space-x-4">
                        <div className="mb-4 w-1/2">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:ring focus:ring-purple-500"
                                {...formik.getFieldProps("firstName")}
                            />
                            {formik.touched.firstName && formik.errors.firstName && (
                                <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                            )}
                        </div>
                        <div className="mb-4 w-1/2">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:ring focus:ring-purple-500"
                                {...formik.getFieldProps("lastName")}
                            />
                            {formik.touched.lastName && formik.errors.lastName && (
                                <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <DatePicker
                            selected={dateOfBirth}
                            onChange={(date) => setDateOfBirth(date)}
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select Date of Birth"
                            maxDate={new Date()}
                            className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:ring focus:ring-purple-500"
                        />
                        {!dateOfBirth && formik.submitCount > 0 && (
                            <div className="text-red-500 text-sm">Date of Birth is required</div>
                        )}
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail Address"
                            className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:ring focus:ring-purple-500"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        )}
                    </div>

                    <div className="flex space-x-4">
                        <div className="mb-4 w-1/2">
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

                        <div className="mb-4 w-1/2">
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:ring focus:ring-purple-500"
                                {...formik.getFieldProps("confirmPassword")}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
                            )}
                        </div>
                    </div>

                    <ReCAPTCHA ref={recaptchaRef} sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" className="mb-4" />

                    <div className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-gray-400 text-sm">
                            I agree with <Link to="/privacy-policy" className="text-blue-400">Privacy Policy</Link> & <Link to="/terms" className="text-blue-400">Terms of Service</Link>
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-500 text-black font-bold rounded-full hover:bg-purple-600"
                    >
                        Register
                    </button>
                </form>

                <div className="text-center mt-4 text-gray-400">
                    Have an account? <Link to="/login" className="text-purple-400 hover:text-purple-500">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;

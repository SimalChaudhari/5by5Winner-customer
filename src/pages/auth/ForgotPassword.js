import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showAlert } from "./../../utils/alertUtils";

const ForgotPassword = () => {
    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email").required("Email is required"),
        }),
        onSubmit: (values) => {
            console.log("Reset Email Sent", values);
            showAlert("Reset link sent to your email", "success");
        },
    });

    return (
        <div className="relative bg-theme-gradient min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Dots */}
            <div className="absolute inset-0">
                <div className="absolute w-16 h-16 bg-purple-600 rounded-full opacity-20 top-10 left-20 animate-pulse"></div>
                <div className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-30 top-40 left-60 animate-ping"></div>
                <div className="absolute w-10 h-10 bg-purple-700 rounded-full opacity-20 top-80 right-20 animate-pulse"></div>
                <div className="absolute w-20 h-20 bg-purple-400 rounded-full opacity-25 bottom-20 left-40 animate-bounce"></div>
            </div>

            {/* Forgot Password Form */}
            <div className="w-full max-w-md bg-black bg-opacity-80 rounded-lg shadow-lg p-8 z-10">
                <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">Forgot Password</h2>

                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:ring focus:ring-purple-500"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-500 text-black font-bold rounded-full hover:bg-purple-600 transition duration-200"
                    >
                        Send Reset Link
                    </button>
                </form>

                <div className="text-center mt-4 text-gray-400">
                    Remembered?{" "}
                    <Link to="/login" className="text-purple-400 hover:text-purple-500">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

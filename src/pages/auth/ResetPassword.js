import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useSearchParams } from "react-router-dom";
import { showAlert } from "./../../utils/alertUtils";

export const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values) => {
      if (!token) {
        showAlert("Invalid or missing token", "error");
        return;
      }

      try {
        // Simulate API call to reset password
        const response = await fetch("/api/reset-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: token,
            password: values.password,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          showAlert(errorData.message || "Failed to reset password", "error");
          return;
        }

        showAlert("Password reset successful!", "success");
      } catch (error) {
        console.error("Error resetting password:", error);
        showAlert("Something went wrong. Please try again.", "error");
      }
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

      <div className="w-full max-w-md border-auth bg-opacity-80 rounded-lg shadow-lg p-8 z-10">
        <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">Reset Password</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="New Password"
              className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:ring focus:ring-purple-500"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-2 bg-gray-900 text-white border border-gray-700 rounded focus:ring focus:ring-purple-500"
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-purple-500 text-black font-bold rounded-full hover:bg-purple-600 transition duration-200"
          >
            Reset Password
          </button>
        </form>

        <div className="text-center text-gray-400 mt-4">
          Remembered your password?{" "}
          <Link to="/login" className="text-purple-400 hover:text-purple-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

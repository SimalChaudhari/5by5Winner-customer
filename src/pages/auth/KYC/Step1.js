import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Step1 = ({ onNext }) => {
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "",
      residentialAddress: "",
      city: "",
      postalCode: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      country: Yup.string().required("Country is required"),
      residentialAddress: Yup.string().required("Residential Address is required"),
      city: Yup.string().required("City is required"),
      postalCode: Yup.string()
        .matches(/^[0-9]{5,6}$/, "Invalid Postal Code")
        .required("Postal Code is required"),
    }),
    onSubmit: (values) => {
      if (!dateOfBirth) {
        alert("Please select your Date of Birth.");
        return;
      }
      onNext({ ...values, dateOfBirth });
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">
        Confirm Your Details
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {["firstName", "lastName", "country", "residentialAddress", "city", "postalCode"].map(
          (field) => (
            <div key={field}>
              <input
                name={field}
                placeholder={`${field.replace(/([A-Z])/g, " $1")} *`}
                {...formik.getFieldProps(field)}
                className="w-full p-2 border border-purple-700 bg-gray-800 text-white rounded focus:ring focus:ring-purple-500"
              />
              {formik.touched[field] && formik.errors[field] && (
                <div className="text-red-500 text-sm">{formik.errors[field]}</div>
              )}
            </div>
          )
        )}

        {/* Date of Birth Picker */}
        <div>
          {/* <label className="block text-gray-300 mb-2">Date of Birth *</label> */}
          <DatePicker
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
            dateFormat="yyyy-MM-dd"
            maxDate={new Date()}
            placeholderText="Select Date of Birth"
            className="w-full p-2 border border-purple-700 bg-gray-800 text-white rounded focus:ring focus:ring-purple-500"
          />
          {!dateOfBirth && (
            <div className="text-red-500 text-sm">Date of Birth is required</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-purple-500 text-black font-bold rounded hover:bg-purple-600 transition-all"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Step1;

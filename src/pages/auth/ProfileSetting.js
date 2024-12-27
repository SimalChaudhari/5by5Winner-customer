import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ProfileSetting() {
    const [dateOfBirth, setDateOfBirth] = useState(null);

    // Formik setup
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            address: "",
            zipCode: "",
            city: "",
            state: "",
            country: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            mobileNumber: Yup.string()
                .matches(
                    /^[0-9]{10}$/,
                    "Mobile number must be exactly 10 digits"
                )
                .required("Mobile number is required"),
            address: Yup.string().required("Address is required"),
            zipCode: Yup.string().required("Zip Code is required"),
            city: Yup.string().required("City is required"),
            state: Yup.string().required("State is required"),
            country: Yup.string().required("Country is required"),
        }),
        onSubmit: (values) => {
            console.log("Form values", values);
            // Handle form submission logic here
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center py-12">
            <div className="bg-[#1E1E3F] p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Profile Settings
                </h2>

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    {/* First and Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="firstName">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full bg-[#141432] text-white border border-customPurple-light rounded-md px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                                {...formik.getFieldProps("firstName")}
                            />
                            {formik.touched.firstName && formik.errors.firstName && (
                                <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="lastName">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full bg-[#141432] text-white border border-customPurple-light rounded-md px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                                {...formik.getFieldProps("lastName")}
                            />
                            {formik.touched.lastName && formik.errors.lastName && (
                                <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-sm font-medium text-white mb-2" htmlFor="mobileNumber">
                            Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="mobileNumber"
                            type="text"
                            placeholder="Enter your mobile number"
                            className="w-full bg-[#141432] text-white border border-customPurple-light rounded-md px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                            {...formik.getFieldProps("mobileNumber")}
                        />
                        {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                            <div className="text-red-500 text-sm">{formik.errors.mobileNumber}</div>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
                            E-mail Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full bg-[#141432] text-white border border-customPurple-light rounded-md px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium text-white mb-2" htmlFor="address">
                            Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="address"
                            type="text"
                            placeholder="Enter your address"
                            className="w-full bg-[#141432] text-white border border-customPurple-light rounded-md px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                            {...formik.getFieldProps("address")}
                        />
                        {formik.touched.address && formik.errors.address && (
                            <div className="text-red-500 text-sm">{formik.errors.address}</div>
                        )}
                    </div>

                    {/* Zip Code and City */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="zipCode">
                                Zip Code <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="zipCode"
                                type="text"
                                placeholder="Enter your zip code"
                                className="w-full bg-[#141432] text-white border border-customPurple-light rounded-md px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                                {...formik.getFieldProps("zipCode")}
                            />
                            {formik.touched.zipCode && formik.errors.zipCode && (
                                <div className="text-red-500 text-sm">{formik.errors.zipCode}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="city">
                                City <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="city"
                                type="text"
                                placeholder="Enter your city"
                                className="w-full bg-[#141432] text-white border border-customPurple-light rounded-md px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                                {...formik.getFieldProps("city")}
                            />
                            {formik.touched.city && formik.errors.city && (
                                <div className="text-red-500 text-sm">{formik.errors.city}</div>
                            )}
                        </div>
                    </div>

                    {/* State and Country */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="state">
                                State <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="state"
                                type="text"
                                placeholder="Enter your state"
                                className="w-full bg-[#141432] text-white border border-customPurple-light rounded-md px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                                {...formik.getFieldProps("state")}
                            />
                            {formik.touched.state && formik.errors.state && (
                                <div className="text-red-500 text-sm">{formik.errors.state}</div>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="country">
                                Country <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="country"
                                type="text"
                                placeholder="Enter your country"
                                className="w-full bg-[#141432] text-white border border-customPurple-light rounded-md px-4 py-3 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                                {...formik.getFieldProps("country")}
                            />
                            {formik.touched.country && formik.errors.country && (
                                <div className="text-red-500 text-sm">{formik.errors.country}</div>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full bg-customPurple text-white py-2 rounded-md hover:bg-customPurple-light focus:outline-none focus:ring focus:ring-customPurple-light"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProfileSetting;

import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { showAlert } from "../../utils/alertUtils";

function ContactForm() {
  const recaptchaRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      const token = recaptchaRef.current.getValue();
      if (!token) {
        showAlert("Please complete the reCAPTCHA", "error");
        return;
      }
      console.log("Form Submitted", values);
      showAlert("Message Sent Successfully!", "success");
    },
  });

  return (
    <div className="py-[5.8rem] flex items-center justify-center p-6 w-full">
      <div className="bg-[#ffffff17] text-white p-8 rounded-md shadow-md w-full max-w-5xl">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-[#141432] border border-customPurple-light rounded-md px-4 py-3 pl-10 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm">{formik.errors.name}</div>
                )}
                <span className="absolute left-3 top-2.5 text-cusbg-customPurple">
                  <i className="fas fa-user text-customPurple-light"></i>
                </span>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#141432] border border-customPurple-light rounded-md px-4 py-3 pl-10 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                )}
                <span className="absolute left-3 top-2.5 text-cusbg-customPurple">
                  <i className="fas fa-envelope text-customPurple-light"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="subject">
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="subject"
                type="text"
                placeholder="Enter subject"
                className="w-full bg-[#141432] border border-customPurple-light rounded-md px-4 py-3 pl-10 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple"
                {...formik.getFieldProps("subject")}
              />
              {formik.touched.subject && formik.errors.subject && (
                <div className="text-red-500 text-sm">{formik.errors.subject}</div>
              )}
              <span className="absolute left-3 top-2.5 text-cusbg-customPurple">
                <i className="fas fa-pen text-customPurple-light"></i>
              </span>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full bg-[#141432] border border-customPurple-light rounded-md px-4 py-3 pl-10 text-sm focus:outline-none focus:ring focus:ring-cusbg-customPurple h-32"
                {...formik.getFieldProps("message")}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500 text-sm">{formik.errors.message}</div>
              )}
              <span className="absolute left-3 top-2.5 text-cusbg-customPurple">
                <i className="fas fa-envelope text-customPurple-light"></i>
              </span>
            </div>
          </div>

          {/* reCAPTCHA */}
          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              className="mb-4"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-customPurple text-white py-2 rounded-md hover:bg-customPurple-light focus:outline-none focus:ring focus:ring-customPurple-light"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

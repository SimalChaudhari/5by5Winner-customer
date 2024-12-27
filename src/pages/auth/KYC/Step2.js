import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Step2 = ({ onSubmit, onPrevious }) => {
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const frontInputRef = useRef(null);
  const backInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      documentType: "",
    },
    validationSchema: Yup.object({
      documentType: Yup.string().required("Document type is required"),
    }),
    onSubmit: () => {
      if (!frontFile || !backFile) {
        alert("Please upload both front and back sides of the document.");
        return;
      }
      onSubmit({ documentType: formik.values.documentType, frontFile, backFile });
    },
  });

  const handleFileUpload = (e, setFile) => {
    const file = e.target.files[0];
    if (file) setFile(file);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e, setFile) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setFile(file);
  };

  const renderPreview = (file, setFile) => (
    <div className="relative mt-4">
      {file && (
        <div className="group relative">
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded Preview"
            className="w-full max-h-40 object-cover rounded shadow-md"
          />
          <button
            type="button"
            onClick={() => setFile(null)}
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">
        Upload Identification
      </h2>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <select
          name="documentType"
          {...formik.getFieldProps("documentType")}
          className="w-full p-2 bg-gray-800 text-white rounded focus:ring focus:ring-purple-500"
        >
          <option value="">Select Document Type</option>
          <option value="Driver License">Driver License</option>
          <option value="Passport">Passport</option>
          <option value="National ID">National ID</option>
        </select>
        {formik.touched.documentType && formik.errors.documentType && (
          <div className="text-red-500 text-sm">{formik.errors.documentType}</div>
        )}

        {/* File Upload UI */}
        <div className="space-y-6">
          {/* Front Side Upload */}
          <div
            className="border-2 border-dashed border-gray-700 p-6 rounded-lg text-center hover:border-purple-500 cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, setFrontFile)}
            onClick={() => frontInputRef.current.click()}
          >
            <label className="block text-gray-300">Front Side</label>
            <input
              ref={frontInputRef}
              type="file"
              accept=".png,.jpg,.jpeg,.pdf"
              onChange={(e) => handleFileUpload(e, setFrontFile)}
              className="hidden"
            />
            <p className="text-sm text-gray-400">Click or drag to upload</p>
            {renderPreview(frontFile, setFrontFile)}
          </div>

          {/* Back Side Upload */}
          <div
            className="border-2 border-dashed border-gray-700 p-6 rounded-lg text-center hover:border-purple-500 cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, setBackFile)}
            onClick={() => backInputRef.current.click()}
          >
            <label className="block text-gray-300">Back Side</label>
            <input
              ref={backInputRef}
              type="file"
              accept=".png,.jpg,.jpeg,.pdf"
              onChange={(e) => handleFileUpload(e, setBackFile)}
              className="hidden"
            />
            <p className="text-sm text-gray-400">Click or drag to upload</p>
            {renderPreview(backFile, setBackFile)}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onPrevious}
            className="w-1/3 py-2 bg-gray-700 text-white font-bold rounded hover:bg-gray-600 transition-all"
          >
            Previous
          </button>

          <button
            type="submit"
            className={`w-1/3 py-2 font-bold rounded ${
              frontFile && backFile
                ? "bg-green-500 text-black hover:bg-green-600"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            } transition-all`}
            disabled={!frontFile || !backFile}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;

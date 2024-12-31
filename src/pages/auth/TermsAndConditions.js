import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const email = "simalchaudhari@gmail.com"; // Mock email

  const handleAgree = () => {
    if (!isChecked) {
      alert("Please check the agreement box to continue.");
      return;
    }
    // Navigate to email confirmation with state
    navigate("/confirm-email", { state: { email } });
  };

  return (
    <div className="relative bg-theme-gradient min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute w-16 h-16 bg-purple-600 rounded-full opacity-20 top-10 left-20 animate-pulse"></div>
        <div className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-30 top-40 left-60 animate-ping"></div>
        <div className="absolute w-10 h-10 bg-purple-700 rounded-full opacity-20 top-80 right-20 animate-pulse"></div>
        <div className="absolute w-20 h-20 bg-purple-400 rounded-full opacity-25 bottom-20 left-40 animate-bounce"></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-3xl border border-purple-700 bg-opacity-90 rounded-lg shadow-lg p-10 z-10">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
          Terms and Conditions
        </h2>

        <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
          <section>
            <h3 className="text-xl font-semibold text-white mb-2">
              1. Overview
            </h3>
            <p>
              By registering on our platform, you agree to the following terms
              and conditions. You acknowledge that you are responsible for all
              actions performed under your account and accept all risks related
              to the use of our services.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-2">
              2. Account Responsibilities
            </h3>
            <p>
              You are solely responsible for maintaining the confidentiality of
              your account and password. You agree to notify us immediately of
              any unauthorized use or breach of security.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-2">
              3. Privacy Policy
            </h3>
            <p>
              We value your privacy. Please refer to our Privacy Policy page for
              detailed information on how we collect, use, and protect your
              data.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-2">
              4. Legal Compliance
            </h3>
            <p>
              By using our services, you agree to comply with all applicable
              laws and regulations in your jurisdiction.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-2">
              5. Service Changes
            </h3>
            <p>
              We reserve the right to modify or terminate our services at any
              time, with or without prior notice.
            </p>
          </section>
        </div>

        {/* Checkbox & Continue Button */}
        <div className="mt-8">
          <label className="flex items-center text-gray-300 mb-6">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => setIsChecked(e.target.checked)}
              checked={isChecked}
            />
            I have read and agree to the terms and conditions
          </label>

          <button
            onClick={handleAgree}
            className={`w-full py-3 font-bold rounded-full text-black transition-all duration-200 ${
              isChecked
                ? "bg-purple-700 hover:bg-purple-400"
                : "bg-purple-700 cursor-not-allowed"
            }`}
            disabled={!isChecked}
          >
            Agree & Continue
          </button>
        </div>

        <div className="text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:text-purple-500">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

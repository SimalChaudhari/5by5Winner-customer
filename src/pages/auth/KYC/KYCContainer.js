import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { showAlert } from "./../../../utils/alertUtils";

const KYCContainer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleSubmit = (data) => {
    console.log("Final KYC Data: ", { ...formData, ...data });
    showAlert("KYC Process Completed Successfully!", "success");
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="absolute inset-0">
        
        
        <div className="absolute w-10 h-10 bg-purple-700 rounded-full opacity-20 top-80 right-20 animate-pulse"></div>
        <div className="absolute w-20 h-20 bg-purple-400 rounded-full opacity-25 bottom-20 left-40 animate-bounce"></div>
      </div>

      <div className="w-full max-w-lg border border-purple-700 bg-opacity-90 rounded-lg shadow-lg p-8 z-10">
        {step === 1 && <Step1 onNext={handleNext} />}
        {step === 2 && <Step2 onSubmit={handleSubmit}  onPrevious={() =>setStep(1)}/>}
      </div>
    </div>
  );
};

export default KYCContainer;

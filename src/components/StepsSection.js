import React from "react";

// Numbered Circle Component
function NumberedCircle({ number }) {
  return (
    <div className="">
      {/* Number */}
      <span className="how-work-card__step text--base text-shadow--base">{number}</span>
      {/*
        <div className="absolute top-2 right-2 w-5 h-10 bg-white opacity-20 rounded-full"></div>

        <div className="absolute inset-0 rounded-full border-4 border-purple-500 blur-md"></div>
      */}
    </div>
  );
}

// Curved Arrow Component
function CurvedArrow() {
  return (
    <div className="w-16 h-16 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#A855F7"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="w-10 h-10 animate-bounce"
      >
        <path
          d="M8 4v8a4 4 0 004 4h4m4-4-4 4m4-4-4-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// StepsSection Component
function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Create an Account",
      description:
        "Sign up for a free account to start your journey.",
    },
    {
      number: "2",
      title: "Choose Lottery",
      description:
        "Browse and pick from various lotteries available.",
    },
    {
      number: "3",
      title: "Pick Lottery",
      description:
        "Select your desired numbers and confirm your ticket.",
    },
    {
      number: "4",
      title: "Win Lottery",
      description:
        "Wait for the draw and claim your rewards.",
    },
  ];

  return (
    <section className="text-white py-16">


      <div className="container mx-auto px-6 flex flex-col justify-between items-center ">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-6">
          It's Easy to Join and Get Reward
        </h2>
        <p className="md:text-center text-gray-300 text-lg mb-12 md:max-w-[50%]">
          Follow these simple steps to participate and win big.
        </p>
        <div className="text-center mb-12">
          <button className='bg-customPurple px-10 py-3  font-bold text-xl hover:bg-purple-800 transition-all rounded'>
            Play Now
          </button>

        </div>
        {/* Steps */}
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 text-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-56 text-center how-work-item"
              >
                <NumberedCircle number={step.number} />
                <h3 className="text-xl font-semibold mt-6">{step.title}</h3>
                <p className="text-gray-300 mt-2">{step.description}</p>
                {/* Uncomment if needed
                {index < steps.length - 1 && <CurvedArrow />}
              */}
              </div>
            ))}
          </div>
        </div>




      </div>
    </section>
  );
}

export default StepsSection;

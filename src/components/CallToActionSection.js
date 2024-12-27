import React from "react";

function CallToActionSection() {
  return (
    <section className="text-white py-24 md:text-center bg-customPurple-back"
      style={{
        backgroundImage: `url('./images/backImg3.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Buy ticket and get million dollars for a click</h2>

        {/* Description */}
        <p className="text-gray-300 text-lg my-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet, cum qui praesentium,
          esse deleniti nostrum eaque aut officiis magnam odit. Libero quaerat ad, numquam eum non.
        </p>

        {/* Button */}
        <button className="bg-blue-400 text-indigo-900 font-bold px-8 py-3 rounded-full hover:bg-blue-600 transition-all cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default CallToActionSection;

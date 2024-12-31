import React from 'react';
import { LiaCertificateSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { LuCreditCard } from "react-icons/lu";

function TrustSection() {
  const services = [
    {
      title: "Secure Platform",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur dolore laborum corrupti reprehenderit nemo facere voluptate similique id earum distinctio.",
      icon: <LiaCertificateSolid size={48} className="text-purple-500" />, // Properly rendered React icon
    },
    {
      title: "Quick Deposit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur dolore laborum corrupti reprehenderit nemo facere voluptate similique id earum distinctio.",
      icon: <IoWalletOutline size={48} className="text-purple-500" />, // Properly rendered React icon
    },
    {
      title: "Quick Withdraw",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pariatur dolore laborum corrupti reprehenderit nemo facere voluptate similique id earum distinctio.",
      icon: <LuCreditCard size={48} className="text-purple-500" />, // Properly rendered React icon
    },
  ];

  return (
    <section className="text-white py-16 bg-black">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Why You Trust Our Service
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-transparent rounded-lg shadow-lg p-6 border border-purple-700 hover:border-purple-500 transition-all"
            >
              {/* Icon */}
              <div className="flex justify-start mb-4">
                {service.icon} {/* Render React Icon directly */}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-left mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-left">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;

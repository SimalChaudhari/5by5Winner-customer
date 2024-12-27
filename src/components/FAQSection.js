import React, { useState } from "react";

function FAQSection() {
  const faqs = [
    {
      question: "Q1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel dui non nisl tristique dictum.",
    },
    {
      question: "Q2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel dui non nisl tristique dictum.",
    },
    {
      question: "Q3: Nesciunt eius similique tenetur corporis fuga.",
      answer: "Nesciunt eius similique tenetur corporis fuga. Nulla facilisi. Vestibulum ante ipsum primis in faucibus.",
    },
    {
      question: "Q4: Nesciunt eius similique tenetur corporis fuga.",
      answer: "Nesciunt eius similique tenetur corporis fuga. Nulla facilisi. Vestibulum ante ipsum primis in faucibus.",
    },
    {
      question: "Q5: Nesciunt eius similique tenetur corporis fuga.",
      answer: "Nesciunt eius similique tenetur corporis fuga. Nulla facilisi. Vestibulum ante ipsum primis in faucibus.",
    },
  ];

  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle FAQ visibility
  };

  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Icon */}
          <div className="hidden md:block md:w-1/3 justify-center items-center">
            <div className="relative">
              <img
                src="/icons/faq-icon.png" // Replace with the actual icon path
                alt="FAQ Icon"
                className=""
              />
              <div className="absolute inset-0 animate-pulse opacity-50">
                <img
                  src="/icons/faq-icon.png" // For glowing effect
                  alt="FAQ Icon Glow"
                  className=""
                />
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="w-full md:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 bg-transparent rounded-lg shadow-md border border-purple-500 hover:border-purple-400 transition-all"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-lg">{faq.question}</p>
                  <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && (
                  <div className="mt-2 text-sm text-gray-300">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

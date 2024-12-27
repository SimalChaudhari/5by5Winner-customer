import React from "react";

function PaymentSection() {
  const paymentMethods = [
    { src: "https://script.viserlab.com/lottolab/assets/images/frontend/payments/636f6fb207dbe1668247474.png", alt: "Visa" },
    { src: "https://script.viserlab.com/lottolab/assets/images/frontend/payments/636f6fa4d7aed1668247460.png", alt: "Maestro" },
    { src: "https://script.viserlab.com/lottolab/assets/images/frontend/payments/636f6f9a5e5521668247450.png", alt: "Visa Card" },
    { src: "https://script.viserlab.com/lottolab/assets/images/frontend/payments/636f6f92cdbb51668247442.png", alt: "Solo" },
    { src: "https://script.viserlab.com/lottolab/assets/images/frontend/payments/636f6f8b788801668247435.png", alt: "WorldPay" },
    { src: "https://script.viserlab.com/lottolab/assets/images/frontend/payments/636f6f83af37c1668247427.png", alt: "Visa Electron" },
  ];

  return (
    <section className="text-white py-16">
      <div className="container mx-auto text-center md:max-w-[50%]">
        {/* Payment Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-6  mb-12 gap-5">
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={method.src}
                alt={method.alt}
                className="h-20 transition-transform transform hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <button className="bg-blue-400 text-indigo-900 font-bold px-8 py-3 rounded-full hover:bg-blue-600 transition-all cursor-pointer">
          Create an Account
        </button>
      </div>
    </section>
  );
}

export default PaymentSection;

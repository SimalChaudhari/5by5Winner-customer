import React from 'react';

function Testimonials() {
  const testimonials = [
    { id: 1, name: 'John Doe', feedback: 'Winning at LottoLab changed my life!' },
    { id: 2, name: 'Jane Smith', feedback: 'I love how easy it is to play and win.' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-4xl text-center font-bold mb-8">What Our Winners Say</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white p-6 shadow-md rounded-md">
            <p className="text-xl italic">"{t.feedback}"</p>
            <h4 className="text-right text-lg font-bold mt-4">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
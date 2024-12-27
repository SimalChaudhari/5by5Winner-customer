import React from 'react';

function LotteryCards() {
  const lotteries = [
    { id: 1, name: 'Mega Jackpot', prize: '$5,000,000' },
    { id: 2, name: 'Daily Draw', prize: '$500,000' },
    { id: 3, name: 'Quick Win', prize: '$100,000' },
  ];

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-4xl text-center font-bold mb-8">Current Lotteries</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {lotteries.map((lottery) => (
          <div key={lottery.id} className="bg-white p-6 shadow-lg rounded-md text-center">
            <h3 className="text-2xl font-bold mb-2">{lottery.name}</h3>
            <p className="text-xl text-gray-700">Prize: {lottery.prize}</p>
            <button className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">Enter Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LotteryCards;
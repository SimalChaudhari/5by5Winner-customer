import React, { useState } from "react";

function HeroPlayComponent() {
  const [sortConfig, setSortConfig] = useState({ key: "startDate", direction: "asc" });

  const lotteries = [
    {
      title: "Mega Millions",
      startDate: "2022-11-26",
      startTime: "2025-12-31",
      price: "$50.00",
      sold: "88.2%",
      status: "Running",
      img: "https://script.viserlab.com/lottolab/assets/images/lottery/637f81f8ca07e1669300728.png",
    },
    {
      title: "Powerball",
      startDate: "2022-11-26",
      startTime: "2025-12-31",
      price: "$100.00",
      sold: "15.5%",
      status: "Running",
      img: "https://script.viserlab.com/lottolab/assets/images/lottery/637f83224e7d11669301026.png",
    },
    {
      title: "Loteria de Navidad",
      startDate: "2022-11-26",
      startTime: "2025-12-31",
      price: "$123.00",
      sold: "22.3%",
      status: "Running",
      img: "https://script.viserlab.com/lottolab/assets/images/lottery/637f83c362ac01669301187.png",
    },
    {
      title: "Jackpot",
      startDate: "2022-11-26",
      startTime: "2025-12-31",
      price: "$70.00",
      sold: "7.7%",
      status: "Running",
      img: "https://script.viserlab.com/lottolab/assets/images/lottery/637f83fc2d5da1669301244.png",
    },
    {
      title: "La Primitiva",
      startDate: "2022-11-04",
      startTime: "2025-12-31",
      price: "$60.00",
      sold: "100%",
      status: "Closed",
      img: "https://script.viserlab.com/lottolab/assets/images/lottery/637f842c5f0501669301292.png",
    },
    {
      title: "Engla Raffles",
      startDate: "2022-11-26",
      startTime: "2025-12-31",
      price: "$100.00",
      sold: "20.5%",
      status: "Running",
      img: "https://script.viserlab.com/lottolab/assets/images/lottery/637f84690d0591669301353.png",
    },
    {
      title: "SuperEnalotto",
      startDate: "2022-11-26",
      startTime: "2025-12-31",
      price: "$90.00",
      sold: "40.5%",
      status: "Running",
      img: "https://script.viserlab.com/lottolab/assets/images/lottery/637f84b52f3451669301429.png",
    },
  ];

  // Sorting function
  const sortedLotteries = [...lotteries].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          <span>WELCOME TO</span>
          <span className="text-purple-700"> 5BY5 </span>
        </h1>
        <h1 className="text-3xl md:text-4xl my-5">
          <span className="text-purple-700">WINNER</span> PLAY ROOM
        </h1>
      </div>
      <div className="overflow-x-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-skyBlue text-customindigo">
              <th
                className="px-4 py-2 text-left whitespace-nowrap md:w-[20%] cursor-pointer"
                onClick={() => handleSort("title")}
              >
                Title
              </th>
              <th
                className="px-4 py-2 whitespace-nowrap cursor-pointer"
                onClick={() => handleSort("startDate")}
              >
                Start Date
              </th>
              <th
                className="px-4 py-2 whitespace-nowrap cursor-pointer"
                onClick={() => handleSort("startTime")}
              >
                Start Time
              </th>
              <th
                className="px-4 py-2 whitespace-nowrap cursor-pointer"
                // onClick={() => handleSort("price")}
              >
                Price
              </th>
              <th
                className="md:px-4 py-2 whitespace-nowrap cursor-pointer px-14"
                // onClick={() => handleSort("sold")}
              >
                Sold
              </th>
              <th
                className="px-4 py-2 whitespace-nowrap cursor-pointer"
                // onClick={() => handleSort("status")}
              >
                Status
              </th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedLotteries.map((lottery, index) => (
              <tr key={index} className="bg-customindigo text-white border-b-[1px] border-b-slate-500 py-14">
                <td className="p-4 flex items-center md:pr-0 pr-20">
                  <img src={lottery.img} alt="Play Room" className="h-12 w-12 mr-4" />
                  {lottery.title}
                </td>
                <td className="p-4 text-center whitespace-nowrap">{lottery.startDate}</td>
                <td className="p-4 text-center whitespace-nowrap">{lottery.startTime}</td>
                <td className="p-4 text-center whitespace-nowrap">{lottery.price}</td>
                <td className="p-4 text-center">
                  <div className="bg-gray-200 h-2 w-full rounded-full">
                    <div
                      className="bg-skyBlue h-full rounded-full "
                      style={{ width: lottery.sold }}
                    ></div>
                  </div>
                  <span className="text-xs">{lottery.sold}</span>
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`p-2 text-xs border-[1px] border-purple-600 rounded-full text-purple-600 bg-transparent`}
                  >
                    {lottery.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="bg-skyBlue text-customindigo font-semibold px-6 py-2 hover:bg-blue-400 transition-all">
                    PLAY
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HeroPlayComponent;

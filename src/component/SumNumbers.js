import React, { useState } from "react";

export default function SumNumbers() {
  const [getWinningNumber, setWinningNumber] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  const handleChangeWinningAmount = (event) => {
    setWinningNumber(event.target.value);
  };

  /**
   * Hanle winning amount - I wonn
   */
  const handleWinningAmount = () => {
    const numbers = getWinningNumber.split("").map(Number);
    let sum = 0;
    numbers.map((item) => {
      sum += item;
    });
    setTotalAmount(sum);
  };

  return (
    <div className="flex justify-center items-start h-screen">
      <div
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-100 dark:border-gray-700 mt-12 flex justify-center"
        style={{ height: "200px" }}
      >
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              <div className="flex justify-center">
                <input
                  className="focus:bg-white items-center hover:bg-snowwhite focus:border-white hover:border-snowwhite"
                  style={{ marginTop: "4rem", color: "black" }}
                  onChange={handleChangeWinningAmount}
                  value={getWinningNumber}
                />
              </div>
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <button
                className="bg-blue-500 hover:bg-blue-700  items-center text-white font-bold py-2 px-4 rounded"
                onClick={handleWinningAmount}
              >
                WON
              </button>
              <p>Winning Total:{totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

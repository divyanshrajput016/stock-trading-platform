import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="w-screen h-80 px-20  mt-40 flex">
      <div className="w-1/2 h-full flex justify-center ">
        <img src="/images/education.svg" alt="" />
      </div>

      <div className="w-2/5 h-full flex flex-col mt-14">
        <h2 className="font-semibold text-2xl mb-8">
          Free and open market education
        </h2>

        <p className="text-gray-500 mb-2">
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
        <Link className="text-blue-400 mb-8 flex">
          Versity
          <img
            className="h-4 w-4 mt-1.5 ml-2"
            src="https://img.icons8.com/?size=100&id=39777&format=png&color=228BE6"
            alt=""
          />
        </Link>

        <p className="text-gray-500 mb-2">
          TradingQ&A, the most active trading and investment community in India
          for all your market related queries.
        </p>
        <Link className="text-blue-400 mb-8 flex">
          TradingQ&A
          <img
            className="h-4 w-4 mt-1.5 ml-2"
            src="https://img.icons8.com/?size=100&id=39777&format=png&color=228BE6"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Education;

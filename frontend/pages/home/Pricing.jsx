import React from "react"
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="h-40 w-screen flex mt-20 gap-10 px-24">
      <div className=" w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Unbeatable pricing</h1>

        <p className="text-gray-500 ">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>

        <Link className='text-blue-400 flex'>See pricing <img className='h-4 w-4 mt-1.5 ml-2' src="https://img.icons8.com/?size=100&id=39777&format=png&color=228BE6" alt="" /></Link>
      </div>

      <div className="w-1/2 flex ">
        <div className="w-1/2 flex flex-col items-center border border-gray-400 justify-center gap-2">
          <h1 className="text-4xl font-bold">$0</h1>
          <p>Free equity delivery and direct mutual funds</p>
        </div>

        <div className="w-1/2 flex flex-col items-center border border-gray-400 justify-center gap-2">
          <h1 className="text-4xl font-bold">$20</h1>
          <p>Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

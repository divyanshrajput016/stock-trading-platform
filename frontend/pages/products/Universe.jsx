import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Universe = () => {
  return (
    <div className="w-screen flex flex-col items-center gap-4 my-6 px-78">
        <p className="text-2xl my-16">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <h1 className="font-semibold text-2xl">The Zerodha Universe</h1>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div>
        <div className="flex justify-around gap-4">
          <div className="flex flex-col items-center gap-4 my-6">
            <img src="images\zerodhaFundhouse.png" alt="" className="h-16 w-50"/>
            <p className="text-center my-4 text-gray-500 text-xs px-4 font-semibold">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 my-6">
            <img src="images\sensibullLogo.svg" alt="" className="h-16 w-50"/>
            <p className="text-center my-4 text-gray-500 text-xs px-4 font-semibold">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 my-6 ">
            <img src="images\goldenpiLogo.png" alt=""className="h-16 w-50" />
            <p className="text-center my-4 text-gray-500 text-xs px-4 font-semibold">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="flex justify-around gap-4">
          <div className="flex flex-col items-center gap-4 my-6">
            <img src="images\streakLogo.png" alt="" className="h-16 w-50"/>
            <p className="text-center my-4 text-gray-500 text-xs px-4 font-semibold">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 my-6">
            <img src="images\smallcaseLogo.png" alt="" className="h-16 w-50"/>
            <p className="text-center my-4 text-gray-500 text-xs px-4 font-semibold">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 my-6">
            <img src="images\dittoLogo.png" alt="" className="h-16 w-50"/>
            <p className="text-center my-4 text-gray-500 text-xs px-4 font-semibold">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>
      <Link className="text-white bg-blue-600 rounded py-2 px-6">
        Sign up for free
      </Link>
    </div>
  );
};

export default Universe;

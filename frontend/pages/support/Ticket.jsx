import React from 'react'
import { useState } from "react";

const Ticket = () => {
      const [open1, setOpen1] = useState(false);
      const [open2, setOpen2] = useState(false);
      const [open3, setOpen3] = useState(false);
      const [open4, setOpen4] = useState(false);
      const [open5, setOpen5] = useState(false);

  return (
    <div>
      <div className='my-4 w-screen '>
      <div className=" mx-42 border rounded-lg overflow-hidden">

      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
        onClick={() => setOpen1(!open1)}
      >
        <h2 className="font-semibold">Account Opening</h2>
        <span>{open1 ? "▲" : "▼"}</span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open1 ? "max-h-96 p-4" : "max-h-0"
        }`}
      >
        <ul className="list-disc pl-5 space-y-2 text-blue-600">
          <li>Resident individual</li>
          <li>Minor</li>
          <li>Non Resident Indian (NRI)</li>
          <li>Company, Partnership, HUF and LLP</li>
          <li>Glossary</li>
        </ul>
      </div>

    </div>
    </div>

    <div className='my-4 w-screen'>
      <div className=" mx-42 border rounded-lg overflow-hidden">

      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
        onClick={() => setOpen2(!open2)}
      >
        <h2 className="font-semibold">Your Zerodha Account</h2>
        <span>{open2 ? "▲" : "▼"}</span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open2 ? "max-h-96 p-4" : "max-h-0"
        }`}
      >
        <ul className="list-disc pl-5 space-y-2 text-blue-600">
          <li>Your Profile</li>
          <li>Account modification</li>
          <li>Client Master Report (CMR) and Depository Participant (DP)</li>
          <li>Nomination</li>
          <li>Transfer and conversion of securities</li>
        </ul>
      </div>

    </div>
    </div>

    <div className='my-4 w-screen'>
      <div className=" mx-42 border rounded-lg overflow-hidden">

      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
        onClick={() => setOpen3(!open3)}
      >
        <h2 className="font-semibold">Kite</h2>
        <span>{open3 ? "▲" : "▼"}</span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open3 ? "max-h-96 p-4" : "max-h-0"
        }`}
      >
        <ul className="list-disc pl-5 space-y-2 text-blue-600">
          <li>Trading FAQs</li>
          <li>Margin Trading Facility (MTF) and Margins</li>
          <li>Charts and orders</li>
          <li>Alerts and Nudges</li>
          <li>General</li>
        </ul>
      </div>

    </div>
    </div>

    <div className='my-4 w-screen'>
      <div className=" mx-42 border rounded-lg overflow-hidden">

      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
        onClick={() => setOpen4(!open4)}
      >
        <h2 className="font-semibold">Funds</h2>
        <span>{open4 ? "▲" : "▼"}</span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open4 ? "max-h-96 p-4" : "max-h-0"
        }`}
      >
        <ul className="list-disc pl-5 space-y-2 text-blue-600">
          <li>Add money</li>
          <li>Withdraw money</li>
          <li>Add bank accounts</li>
          <li>eMandates</li>
        </ul>
      </div>

    </div>
    </div>

    <div className='my-4 w-screen'>
      <div className=" mx-42 border rounded-lg overflow-hidden">

      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
        onClick={() => setOpen5(!open5)}
      >
        <h2 className="font-semibold">Coin</h2>
        <span>{open5 ? "▲" : "▼"}</span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open5 ? "max-h-96 p-4" : "max-h-0"
        }`}
      >
        <ul className="list-disc pl-5 space-y-2 text-blue-600">
          <li>National Pension Scheme (NPS)</li>
          <li>Fixed Deposit (FD)</li>
          <li>Features on Coin</li>
          <li>Payments and Orders</li>
          <li>General</li>
        </ul>
      </div>

    </div>
    </div>
    </div>
    
  )
}

export default Ticket

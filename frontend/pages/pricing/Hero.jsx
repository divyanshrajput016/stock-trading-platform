import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen my-4'>
      <div className='flex flex-col items-center gap-2 py-2 my-4 '>
        <h1 className='font-semibold text-3xl'>Charges</h1>
        <p className='text-2xl text-gray-500'>List of all charges and taxes</p>
      </div>

      <div className='flex mx-54 gap-8'>
        <div className='w-1/3 flex flex-col items-center gap-2 py-2'>
            <img src="images\pricing0.svg" alt="" className='p-10'/>
            <h2 className='font-semibold text-2xl'>Free equity delivery</h2>
            <p className='text-gray-500 text-center'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className='w-1/3 flex flex-col items-center gap-2 py-2'>
            <img src="images\intradayTrades.svg" alt="" className='p-10'/>
            <h2 className='font-semibold text-2xl'>Intraday and F&O trades</h2>
            <p className='text-gray-500 text-center'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className='w-1/3 flex flex-col items-center gap-2 py-2'>
            <img src="images\pricing0.svg" alt="" className='p-10'/>
            <h2 className='font-semibold text-2xl'>Free direct MF</h2>
            <p className='text-gray-500 text-center'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero

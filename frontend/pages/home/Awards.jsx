import React from 'react'

const Awards = () => {
  return (
    <div className='w-screen h-100 px-20 my-12 mt-60 flex'>
      <div className='w-1/2 h-full flex justify-center '>
        <img src="/images/largestBroker.svg" alt="" />
      </div>

      <div className='w-2/5 h-full flex flex-col gap-8'>
        <h1 className='text-4xl font-bold'>Largest stock broker in India</h1>

        <p className='pb-10'>2+ million Zerodha clients contribute to over 15% of all retail order
          volumes in India daily by trading and investing in:</p>


        <ul className="pl-4 grid grid-cols-2 list-disc gap-y-4">
          <li>Futures and Options</li>
          <li>Commodity derivatives</li>
          <li>Currency derivatives</li>
          <li>Stocks & IPOs</li>
          <li>Direct mutual funds</li>
          <li>Bonds and Govt</li>
        </ul>

        <img src="images\pressLogos.png" alt="" className=' w-fit my-4'/>
      </div>
    </div>
  )
}

export default Awards

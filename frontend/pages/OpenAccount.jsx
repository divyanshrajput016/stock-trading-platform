import React from 'react'
import {Link} from 'react-router-dom'

const OpenAccount = () => {
  return (
    <div className='h-70 w-screen mt-20 flex flex-col items-center'>
      <h1 className='font-medium text-3xl'>Open a Zerodha account</h1>

      <p className='my-6 text-gray-500'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

      <Link className='px-4 py-2 bg-blue-600 rounded text-white'>Sign up for free</Link>
    </div>
  )
}

export default OpenAccount

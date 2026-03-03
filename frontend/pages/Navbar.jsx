import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-16 flex justify-between px-38 py-4 border-b border-gray-300'>
      <div className='flex'>
        {/* <img src="https://img.icons8.com/?size=100&id=13GFrCusOVD0&format=png&color=000000" className='h-8 w-8 ' alt="" /> */}
        <Link to='/'><h1 className='text-blue-500 text-2xl font-serif font-bold px-2'>ZENTRA</h1></Link>
      </div>

      <div className='flex gap-8 text-gray-400 font-semibold'>
        <Link to="/signup">Signup</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/support">Support</Link>
      </div>
    </div>
  )
}

export default Navbar

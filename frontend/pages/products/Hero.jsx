import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col gap-6 items-center py-12 border-b-2 border-gray-200'>
      <h2 className='font-bold text-xl'>Zerodha Products</h2>
      <p className='text-xl'>Sleek, modern, and intuitive trading platforms</p>
      <p className='inline-block'>Check out our <Link className="text-blue-400 mb-8 inline-block">
          investment offerings
          <img
            className="h-4 w-4 mt-1.5 ml-2 inline-block pb-2"
            src="https://img.icons8.com/?size=100&id=39777&format=png&color=228BE6"
            alt=""
          />
        </Link></p>
    </div>
  )
}

export default Hero

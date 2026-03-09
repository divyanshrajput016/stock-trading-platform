import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen h-40 bg-gray-100 py-8'>
      <div className='mx-42 flex flex-col gap-4'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-3xl'>Support Portal</h1>
          <button className='bg-blue-700 text-white px-2 py-1 rounded'>My Tickets</button>
        </div>
        <div>
          <input className='bg-white w-full rounded px-2 py-2 text-gray-500' type="text" placeholder='Eg: How Do I Open MY Account, How Do i Open F&O' />
        </div>
      </div>
    </div>
  )
}

export default Hero

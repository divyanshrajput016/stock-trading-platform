import React from 'react'

const Hero = () => {
  return (
    <div className='w-screen ' >
        <div className='flex flex-col items-center py-4'>
            <img src="/images/homeHero.png" alt="HeroHome" className='h-78 w-172'/>
        </div>
      
        <div className='flex flex-col items-center gap-4'>
            <h1 className='font-bold text-3xl'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className='bg-blue-500 rounded text-white px-8 py-2'>Signup now</button>
        </div>
    </div> 
  )
}

export default Hero

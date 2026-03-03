import React from 'react'
import { Link } from 'react-router-dom'

const Stats = () => {
  return (
    <div className='w-screen h-160 flex mt-40 px-46'>
      <div className='w-1/2 flex flex-col justify-center '>
        <h1 className='font-bold text-4xl pb-12'>Trust with confidence</h1>

        <h2 className='font-semibold text-2xl'>Customer-first always</h2>
        <p className='mb-8 text-gray-500'>That's why 1.3+ crore customers trust Zerodha with ₹ 3.5+
          lakh crores worth of equity investments.</p>

        <h2 className='font-semibold text-2xl'>No spam or gimmicks</h2>
        <p className='mb-8 text-gray-500'>No gimmicks, spam, "gamification", or annoying push
          notifications. High quality apps that you use at your pace, the
          way you like.</p>

        <h2 className='font-semibold text-2xl'>The Zerodha universe</h2>
        <p className='mb-8 text-gray-500'>Not just an app, but a whole ecosystem. Our investments in
          30+ fintech startups offer you tailored services specific to
          your needs.</p>

        <h2 className='font-semibold text-2xl'>Do better with money</h2>
        <p className='text-gray-500'>With initiatives like Nudge and Kill Switch, we don't just
          facilitate transactions, but actively help you do better with
          your money.</p>

      </div>

      <div className='w-1/2 flex flex-col pl-28 pt-12'>
        <img src="images\ecosystem.png" alt="" />
        <div className='flex justify-around'>
          <Link className='text-blue-400 flex'>Explore all Products <img className='h-4 w-4 mt-1.5 ml-2' src="https://img.icons8.com/?size=100&id=39777&format=png&color=228BE6" alt="" /></Link>
          <Link className='text-blue-400'>Try Kite</Link>
        </div>
      </div>
    </div>
  )
}

export default Stats

import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const NotFound = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-20 px-20 my-16'>
            <h1 className='font-bold text-3xl'>404 Not Found</h1>

            <p>Sorry The Page you Are Looking for Does Not Exists.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default NotFound

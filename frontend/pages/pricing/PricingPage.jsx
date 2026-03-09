import React from 'react'
import Navbar from '../Navbar'
import Footer from "../Footer";
import Hero from './Hero';
import Brokerage from './Brokerage';

const PricingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brokerage/>
      <Footer/>
    </div>
  )
}

export default PricingPage

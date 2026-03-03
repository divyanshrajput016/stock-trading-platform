import React from 'react'
import HomePage from '../pages/home/HomePage'
import Signup from '../pages/signup/Signup'
import PricingPage from '../pages/pricing/PricingPage'
import { Route, Routes } from "react-router-dom";
import SupportPage from '../pages/support/SupportPage';
import ProductPage from '../pages/products/ProductPage';
import AboutPage from '../pages/about/AboutPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/pricing' element={<PricingPage/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
        <Route path='/support' element={<SupportPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App

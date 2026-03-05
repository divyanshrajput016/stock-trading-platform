import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Hero from './Hero'
import LeftImage from './LeftImage'
import RightImage from './RightImage'
import Universe from './Universe'

const productDetails = [
  {
    title: "Kite",
    details:
      "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    link: "/kite",
    img: "images/kite.png",
  },
  {
    title: "Console",
    details:
      "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    link: "/console",
    img: "images/console.png",
  },
  {
    title: "Coin",
    details:
      "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Start investing in mutual funds without distributor commissions.",
    link: "/coin",
    img: "images/coin.png",
  },
  {
    title: "Kite Connect API",
    details:
      "Build powerful trading platforms and experiences with simple HTTP/JSON APIs. Ideal for startups, traders, and developers.",
    link: "/kite-connect",
    img: "images/landing.svg",
  },
  {
    title: "Varsity",
    details:
      "An easy-to-grasp collection of stock market lessons with bite-size modules. Learn trading and investing for free.",
    link: "/varsity",
    img: "images/varsity.png",
  },
];

const ProductPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {productDetails.map((product, index) =>
        index % 2 === 0 ? (
          <LeftImage key={index} product={product} />
        ) : (
          <RightImage key={index} product={product} />
        )
      )}
      <Universe/>
      <Footer/>
    </div>
  )
}

export default ProductPage

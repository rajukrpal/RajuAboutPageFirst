import React from 'react'
import Banner from '../banner/Banner'
import About from '../about/About'
import Servises from '../servises/Servises'
import Expertise from '../experience/Expertise'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Servises />
      <Expertise />
      <Footer />
    </>
  )
}

export default HomePage

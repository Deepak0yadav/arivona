import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='px-8 h-screen '>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Home
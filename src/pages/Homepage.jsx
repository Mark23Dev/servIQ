import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Footer from '../components/Footer'
import Categories from '../sections/Categories'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'
import EmailSubscription from '../sections/EmailSubscription'

const Homepage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Footer />
      <Categories />
      <Services />
      <Testimonials />
      <EmailSubscription />
    </div>
  )
}

export default Homepage
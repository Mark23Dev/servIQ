import React from 'react'
import Navbar from '../components/Navbar'
import CategoryCard from '../components/CategoryCard'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import PrimaryBtn from '../components/PrimaryBtn'
import SecondaryBtn from '../components/SecondaryBtn'
import PostCard from '../components/PostCard'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <TestimonialCard />
        <PrimaryBtn />
        <SecondaryBtn />
        <PostCard />
    </div>
  )
}

export default Homepage
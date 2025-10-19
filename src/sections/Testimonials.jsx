import React from 'react'
import TestimonialCard from '../components/TestimonialCard'

const Testimonials = () => {
  return (
    <div className=''>
        <h1 className="text-2xl font-bold py-16 px-8">Testimonials</h1>
        <div className="flex gap-10">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
        </div>
    </div>
  )
}

export default Testimonials
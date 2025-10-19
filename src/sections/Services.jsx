import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className='py-16 px-6 md:px-20'>
        <h1 className='text-3xl font-bold mb-8'>Explore Services</h1>
        <div className="flex gap-10">
            <ServiceCard />
            <ServiceCard />
        </div>
    </div>
  )
}

export default Services
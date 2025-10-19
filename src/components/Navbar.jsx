import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center text-black/80 sticky top-0 z-20 bg-white/80 py-5 px-30">
        <span className="flex-1 text-3xl font-bolder">servIQ</span>
        <div className="nav flex-1 flex items-center gap-5 text-xl">
            <a href="#" className="">About Us</a>
            <a href="#" className="">Marketplace</a>
            <a href="#" className="">Blog</a>
        </div>
    </div>
  )
}

export default Navbar
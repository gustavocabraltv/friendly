import React from 'react'

 const Navbar = () => {
  return (
    <div className='flex items-center text-white justify-between h-24 max-w-[1124px] mx-auto p-4'>
        <h1 className="text-3xl font-bold text-white">UI Expert</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
        </ul>
    </div>
  )
}

export default Navbar;
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

 const Navbar = () => {
    const [nav, setNav] = useState(true)

    function handleNav(){
        setNav(!nav)
    }

  return (
    <div className='flex items-center text-white justify-between h-24 max-w-[1124px] mx-auto p-4'>
        <h1 className="text-3xl font-bold text-white">UI Expert</h1>
        <ul className='flex hidden sm:flex lg:flex '>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
        </ul>
        <div onClick={handleNav} className='cursor-pointer sm:hidden lg:hidden'>
            {!nav ? <AiOutlineClose/> :  <AiOutlineMenu/>}
     
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%] '}>
        <h1 className="text-3xl font-bold text-white m-4">UI Expert</h1>
            <ul className='pt-24 uppercase'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
            </ul>

        </div>
       
    </div>
  )
}

export default Navbar;
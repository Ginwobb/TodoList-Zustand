import React from 'react'
import { Link } from 'react-router-dom';
import { RiBearSmileFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className='bg-amber-500 flex justify-between h-[90px] text-white'>
        <h1 className='text-6xl font-bold p-5 flex justify-center ml-20'><RiBearSmileFill />Logo</h1>
        <nav className='flex gap-6 items-end p-1 mr-20'>
            <Link to = '/' className='p-2 rounded-md hover:font-bold hover:bg-amber-400 hover:text-black'>Home</Link>
            <Link to = '/about' className='p-2 rounded-md hover:font-bold hover:bg-amber-400 hover:text-black'>About</Link>
            <Link to = '/login'className='p-2 rounded-md hover:font-bold hover:bg-amber-400 hover:text-black'>Login</Link>        
        </nav>
    </div>
  )
}

export default Header
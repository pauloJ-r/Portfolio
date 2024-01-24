import React, { useState } from 'react'
import { Links } from '../../constants';
const Nav = () => {
    
    let [open,setOpen]=useState(false);
  return (
    <nav className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-around bg-white py-4 md:px-10 px-7'>
      <div >
        <a href="#Inicio" className='font-bold text-2xl cursor-pointer flex items-center font-poppins 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2 md:px-2 px-3'>
        <ion-icon name="code-slash-outline"></ion-icon>
        </span>
        Paulo Junior
        </a>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
  {Links.map((link) => (
    <li
      key={link.title}
      className='md:ml-8 text-xl md:my-0 my-7 transition duration-300 ease-in-out transform hover:scale-105'
    >
      <a
        href={`#${link.title}`}
        className='font-semibold text-gray-800 duration-500 relative hover:text-gray-400 hover:border-b-2 hover:border-indigo-600 hover:transition-all hover:duration-300 hover:ease-in-out'
      >
        {link.title}
      </a>
    </li>
  ))}
</ul>
      </div>
    </nav>
  )
}

export default Nav

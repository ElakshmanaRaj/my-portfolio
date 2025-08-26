
import React, { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import CVfile from "../assets/Elakshmanaraj_Web_Developer.pdf"

const Navbar = () => {
  const [ mobile, setMobile ] = useState(false);
  const closeMenu = () => setMobile(false)
  return (
   <>
   <div className='px-8 sm:px-12 py-4 flex w-full bg-gray-900 justify-between items-center fixed top-0 left-0 z-[999]'>
    <h4><a href="#home" className='text-xl md:text-2xl font-semibold text-white'>Elakshmana Raj </a></h4>
    <ul className='flex justify-between items-center gap-10 max-[1000px]:hidden'>
        <li><a href="#home" className='cursor-pointer py-1 hover:bg-violet-700 text-white rounded-full hover:px-4 duration-300'>Home</a></li>
        <li><a href="#about" className='cursor-pointer py-1 hover:bg-violet-700 text-white rounded-full hover:px-4 duration-300'>About</a></li>
        <li><a href="#skills" className='cursor-pointer py-1 hover:bg-violet-700 text-white rounded-full hover:px-4 duration-300'>Skills</a></li>
        <li><a href="#projects" className='cursor-pointer py-1 hover:bg-violet-700 text-white rounded-full hover:px-4 duration-300'>Projects</a></li>
        <li><a href="#contact" className='cursor-pointer py-1 hover:bg-violet-700 text-white rounded-full hover:px-4 duration-300'>Contact</a></li>
    </ul>
    <div className='max-[1000px]:hidden'>
      <a 
      className='bg-violet-700 text-white rounded-2xl px-4 py-2 ease-in-out duration-300 hover:bg-violet-500'
      href={CVfile}
      download>
      Download CV
      </a>
    </div>

    <button className='min-[1000px]:hidden text-white' onClick={()=>setMobile(!mobile)}>
      {mobile ? 
      (<LuX className='text-2xl'/>) :
      (<LuMenu className='text-2xl'/>
      )}
    </button>
    {/* Responsive Navbar */}
      
       <div className={`absolute top-12 w-full z-40 min-[1000px]:hidden transform transition-transform duration-300 ${
        mobile ? "opacity-100 right-0" : "opacity-0 right-[-100px]"
      }`} style={{transition:"transform 0.4s ease, opacity 0.4s ease-in-out, right 0.4s ease-in-out"}}>
          <div className='bg-violet-600 flex flex-col gap-6 items-center m-5 rounded-3xl py-5 list-none'>
          <li><a href="#home" className='text-white font-medium' onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className='text-white font-medium' onClick={closeMenu}>About</a></li>
          <li><a href="#skills" className='text-white font-medium' onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className='text-white font-medium' onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" className='text-white font-medium' onClick={closeMenu}>Contact</a></li>
          </div>
       </div>
      
   </div>
   </>
  )
}

export default Navbar
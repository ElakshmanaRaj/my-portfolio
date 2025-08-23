import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center bg-gray-900 py-3.5'>
        <p className='text-white text-[14px] sm:text-[16px]'> &copy; {new Date().getFullYear()} &nbsp; Developed by Elakshmanaraj </p>
    </div>
  )
}

export default Footer
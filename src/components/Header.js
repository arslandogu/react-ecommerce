import React from 'react'
import { logo } from '../assets/index';
import { TbShoppingBag } from 'react-icons/tb';
import { BsPersonCircle } from 'react-icons/bs';
function Header() {

  const liStyle = `text-base text-white font-bold hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300`;


  return (
    <div className='w-full font-titleFont bg-black h-20'>
      <div className='max-w-screen-2xl h-full mx-auto flex items-center justify-between'>
        <div className='items-center flex justify-center'>
          <img src={logo} alt='logo' className='w-16 rounded-xl' />
        </div>
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>Pages</li>
            <li className={liStyle}>Shop</li>
            <li className={liStyle}>Element</li>
            <li className={liStyle}>Blog</li>
          </ul>
          <div className='relative'>
            <TbShoppingBag color='white' className='w-8 h-8 cursor-pointer'/>
            <span className='absolute w-8 top-3 left-0 text-sm flex items-center justify-center font-semibold'>0</span>
          </div>
          <BsPersonCircle color='white' className='w-9 h-9'/>
        </div>
      </div>
    </div>
  )
}

export default Header
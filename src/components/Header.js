import React from 'react'
import { logo } from '../assets/index';
import { TbShoppingBag } from 'react-icons/tb';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {

  const productData = useSelector((state) => state.home.productData);
  console.log(productData);

  const liStyle = `text-base text-white font-bold hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300`;


  return (
    <div className='w-full font-titleFont bg-black h-20 sticky top-0 z-50'>
      <div className='max-w-screen-2xl h-full mx-auto flex items-center justify-between'>
          <Link to='/'>
        <div className='items-center cursor-pointer flex justify-center'>
          <img src={logo} alt='logo' className='w-16 rounded-2xl' />
        </div>
        </Link>
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>Pages</li>
            <li className={liStyle}>Shop</li>
          </ul>
          <div className='relative cursor-pointer'>
            <TbShoppingBag color='white' className='w-8 h-8'/>
            <span className='absolute w-8 top-3 left-0 text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
          </div>
          <BsPersonCircle color='white' className='w-9 h-9'/>
        </div>
      </div>
    </div>
  )
}

export default Header
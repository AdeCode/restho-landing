import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'

function Navbar() {
  return (
      <div className='bg-white shadow py-3 px-6 lg:w-[90%] rounded-full flex justify-between w-full left-[5%] sticky top-0 z-10'>
        <img src={logo} alt='logo' />
        <nav className='lg:flex hidden items-center'>
          <ul className='flex justify-between gap-6 items-center'>
            <li className='flex items-end'>
              <h3 className='font-semibold text-xl lg:text-2xl'>Home</h3>
              <span class="material-symbols-outlined text-gray-400">keyboard_arrow_down</span>
            </li>
            <li className='flex items-end'>
              <h3 className='font-semibold text-xl lg:text-2xl'>About</h3>
              <span class="material-symbols-outlined text-gray-400">keyboard_arrow_down</span>
            </li>
            <li className='flex items-end'>
              <h3 className='font-semibold text-xl lg:text-2xl'>Menu</h3>
              <span class="material-symbols-outlined text-gray-400">keyboard_arrow_down</span>
            </li>
            <li className='flex items-end'>
              <h3 className='font-semibold text-xl lg:text-2xl'>Pages</h3>
              <span class="material-symbols-outlined text-gray-400">keyboard_arrow_down</span>
            </li>
            <li className='flex items-end'>
              <h3 className='font-semibold text-xl lg:text-2xl'>Blog</h3>
              <span class="material-symbols-outlined text-gray-400">keyboard_arrow_down</span>
            </li>
            <li className='flex items-end'>
              <h3 className='font-semibold text-xl lg:text-2xl'>Contact</h3>
              <span class="material-symbols-outlined text-gray-400">keyboard_arrow_down</span>
            </li>
          </ul>
        </nav>
        <span className='bg-primaryText lg:flex hidden hover:bg-black transition-all font-bold text-lg cursor-pointer py-3 px-6 rounded-full text-white'>Find Reservation</span>
      </div>
    // </Nav>

  )
}

export default Navbar

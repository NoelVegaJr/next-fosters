import React from 'react'
import Logo from '../../Logo/Logo'
import HamburgerMenu from './Hamburger'

const Navbar = () => {
  return (
    <>
      <div className='h-20 top-0 sticky bg-slate-900 flex justify-between items-center px-6 border-b-4 border-b-violet-800 z-50'>
        <Logo>Gwennie&apos;s Kitties</Logo>
        <HamburgerMenu />
      </div>
      
    </>
  )
}

export default Navbar
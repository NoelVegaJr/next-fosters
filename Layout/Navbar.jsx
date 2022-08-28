import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Nav/Navigation'

const Navbar = () => {
  return (
    <>
      <div className='h-16 top-0 sticky bg-violet-800 flex justify-between items-center px-6 '>
        <Logo>Gwennie's Kitties</Logo>
        <Navigation />
      </div>
      
    </>
  )
}

export default Navbar
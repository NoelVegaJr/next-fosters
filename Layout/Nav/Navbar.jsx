import React from 'react'
import Logo from '../../components/Logo/Logo'
import Navigation from './Navigation'

const Navbar = () => {
  return (
    <>
      <div className='h-20 top-0 sticky bg-slate-900 flex justify-between items-center px-6 border-b-4 border-b-violet-800'>
        <Logo>Gwennie's Kitties</Logo>
        <Navigation />
      </div>
      
    </>
  )
}

export default Navbar
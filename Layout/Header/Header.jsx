import React from 'react'
const Header = ({children}) => {
  return (
    <div className='w-full'>
      <h1 className="text-xl text-center text-slate-900 tracking-wider py-6 font-bold md:text-2xl md:mb-10">{children}</h1>
    </div>
  )
}

export default Header
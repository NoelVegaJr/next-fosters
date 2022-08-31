import React from 'react'
import Navbar from './Nav/Navbar';
import Footer from './Footer/Footer';
const Layout = ({children}) => {
  return <>

  <div id="overlays"></div>
  <div className="min-h-screen w-screen relative">
    <Navbar />
      <div className="max-w-7xl mx-auto pb-16  px-4 sm:px-6 lg:px-8">
          {children}
      </div>
    <Footer/>
  </div>
  </>
}

export default Layout
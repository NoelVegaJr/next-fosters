import { useState } from 'react';
import SideNavigation from "./SideNavigation";

const HamburgerMenu = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNavHandler = () => {
    console.log('clicked')
    setShowSideNav(prev => !prev)
  }

  const classes = showSideNav ? 'translate-x-0': "-translate-x-full"

  return (
    <>
      <SideNavigation classes={classes} closeSideNav={toggleSideNavHandler}/>
      <button onClick={toggleSideNavHandler} className='flex flex-col gap-1.5'>
        <div className="w-8 h-1 bg-violet-800 rounded"></div>
        <div className="w-8 h-1 bg-violet-800 rounded"></div>
        <div className="w-8 h-1 bg-violet-800 rounded"></div>
      </button>
    </>
    

  )
}

export default HamburgerMenu;
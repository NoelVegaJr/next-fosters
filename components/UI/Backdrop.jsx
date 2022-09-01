import React from 'react'
import {createPortal} from 'react-dom';



const Backdrop = (props) => {
  const overlayRoot = document.getElementById('overlays');
  return (
    createPortal(
      <div onClick={props.onClose} className="h-screen w-full z-10 bg-black opacity-50 fixed"></div>
      , overlayRoot
    )
  )
}

export default Backdrop
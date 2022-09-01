import React from 'react'
import { createPortal } from 'react-dom';

const overlayRoot = document.getElementById('overlays');

const Pane = (props) => {
  const {height, width, zindex} = props;
  
    return createPortal(<div onClick={props.onClick} className={`h-${height ?? 'screen'} w-${width} z-${zindex} fixed ${props.className}`}>
      {props.children}
    </div>
    , overlayRoot)

}

export default Pane;
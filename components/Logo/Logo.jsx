import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
const Logo = ({children}) => {
  return (
    
      <Link href="/" >
        <div className="text-white w-fit text-xl flex items-center gap-2">
          {children}
          <FontAwesomeIcon icon={faPaw} className="fa-sm" />
        </div>
      </Link>
      
    

  )
}

export default Logo
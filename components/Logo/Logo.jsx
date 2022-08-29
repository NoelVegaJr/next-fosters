import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
const Logo = ({children}) => {
  return (
    
      <Link href="/" >
        <a className="block">
          <div className="text-white w-fit text-xl flex items-center gap-2">
            {children}
            <FontAwesomeIcon icon={faPaw} className="fa-sm" />
          </div>
        </a>

      </Link>
      
    

  )
}

export default Logo
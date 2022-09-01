import React from 'react';
import Image from 'next/image';
const Card = ({image, children}) => {
  console.log("rendering card")
  return (

    <div className="hover:cursor-pointer group">
      <div className="relative w-52 h-52 bg-gray-200  rounded-full overflow-hidden ">
        <Image src={image} layout="fill" alt="pet for adoption" objectFit='cover' quality={100} className="group-hover:scale-110 transition-all duration-500" />
      </div>
      <div className="mt-4">
        {children}
      </div>   
    </div>
  )
}

export default Card
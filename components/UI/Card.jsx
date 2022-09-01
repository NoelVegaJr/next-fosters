import React from 'react';
import Image from 'next/image';
const Card = ({image, children}) => {
  console.log("rendering card")
  return (
    <>
      <div className="relative w-full h-96 bg-gray-200 rounded-md -z-10">
        <Image src={image} layout="fill" alt="pet for adoption" objectFit='cover' quality={100} />
      </div>
      <div className="mt-4 flex justify-between">
        {children}
      </div>   
    </>
  )
}

export default Card
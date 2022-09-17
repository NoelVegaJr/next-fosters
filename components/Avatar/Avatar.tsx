import React from 'react';
import Image from 'next/image';

const Avatar = ({ imgUrl, size, rounded = true }) => {
  return (
    <div
      className={`relative w-${52} h-${52} bg-gray-900  ${
        rounded && 'rounded-full'
      } overflow-hidden`}
    >
      <Image
        src={imgUrl}
        layout='fill'
        alt='Avatar image'
        objectFit='cover'
        quality={100}
        className='group-hover:scale-110 transition-all duration-300'
      />
    </div>
  );
};

export default Avatar;

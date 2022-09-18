import React from 'react';
import Image from 'next/image';

const Avatar = ({ imgUrl, size }) => {
  return (
    <div
      className={`relative w-${size} h-${size} rounded-full overflow-hidden bg-red-300`}
    >
      <Image
        src={imgUrl}
        layout='fill'
        alt='Avatar image'
        objectFit='cover'
        quality={100}
        className='group-hover:scale-110 transition-all duration-300'
        priority
      />
    </div>
  );
};

export default Avatar;

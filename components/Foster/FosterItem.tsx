import React from 'react';
import Image from 'next/image';

interface FosterAnimal {
  name: string;
  avatar: string;
}

const FosterItem = ({ name, avatar }: FosterAnimal): JSX.Element => {
  return (
    <div className=''>
      <div className='flex gap-4 text-violet-700'>
        <div className='relative w-32 h-32 bg-gray-200  rounded-full overflow-hidden'>
          <Image
            src={avatar}
            layout='fill'
            alt='pet for adoption'
            objectFit='cover'
            quality={100}
            priority
          />
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default FosterItem;

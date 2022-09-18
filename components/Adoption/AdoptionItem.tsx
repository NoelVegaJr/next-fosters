import React from 'react';
import Avatar from '../Avatar/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const AdoptionItem = ({
  name,
  avatar,
}: {
  name: string;
  avatar: string;
}): JSX.Element => {
  return (
    <>
      <div className='hover:cursor-pointer group'>
        <Avatar imgUrl={avatar} className='h-52 w-52' />

        <h3 className='text-3xl text-center text-violet-800 group-hover:text-pink-600 mb-3 transition-all duration-300'>
          {name}
        </h3>
        <p className='flex items-center justify-center gap-5 '>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Somerville NJ</span>
        </p>
      </div>
    </>
  );
};

export default AdoptionItem;

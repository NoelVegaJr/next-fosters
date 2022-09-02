import React from 'react';
import Image from 'next/image';
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
      <div className="hover:cursor-pointer group">
        <div className="relative w-52 h-52 bg-gray-200  rounded-full overflow-hidden mb-5 ">
          <Image
            src={avatar}
            layout="fill"
            alt="pet for adoption"
            objectFit="cover"
            quality={100}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <h3 className="text-3xl text-center text-violet-800 group-hover:text-pink-600 mb-3 transition-all duration-300">
          {name}
        </h3>
        <p className="flex items-center justify-center gap-5 ">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Somerville NJ</span>
        </p>
      </div>
    </>
  );
};

export default AdoptionItem;

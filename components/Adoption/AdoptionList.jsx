import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdoptionItem from './AdoptionItem'
import ActiveLink from '../ActiveLink';


const AdoptionList = ({ animals }) => {
  const router = useRouter();

  
  return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-20">  
      {animals.map(animal => {
          return (
            <li key={animal._id} className="w-full mb-8 max-w-md flex justify-center">
              <ActiveLink href={`adopt/${animal._id}`}>
                <AdoptionItem  name={animal.name} type={animal.species} img={animal.image_url} />
              </ActiveLink>
            </li>
          )
          
      })}
    </ul>
  )
}


export default AdoptionList
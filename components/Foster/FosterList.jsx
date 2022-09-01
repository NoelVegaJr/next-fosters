import React from 'react'
import Link from 'next/link';
import FosterItem from './FosterItem'


const FosterList = ({ animals }) => {
  return (
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">  
      {animals.map(animal => {
          return (
            <li key={animal._id} className="w-full hover:cursor-pointer border p-6 hover:bg-slate-50">
              <Link href="#">
                <FosterItem   name={animal.name} image={animal.image_url} />
              </Link>
            </li>
          )
      })}
    </ul>

  )
}


export default FosterList
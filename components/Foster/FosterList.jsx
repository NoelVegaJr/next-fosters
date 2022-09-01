import React from 'react'
import FosterItem from './FosterItem'


const FosterList = ({ animals }) => {
  return (
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">  
      {animals.map(animal => {
          return (
            <li key={animal._id} className="w-full mb-8 max-w-md  mx-auto min-w-96">
              <FosterItem   name={animal.name} image={animal.image_url} />
            </li>
          )
      })}
    </ul>

  )
}


export default FosterList
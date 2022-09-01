import React from 'react'
import AdoptionItem from './AdoptionItem'


const AdoptionList = ({ animals }) => {
  
  
  return (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center max-w-5xl mx-auto gap-y-20">  
      {animals.map(animal => {
          return (
            <li key={animal._id} className="w-full mb-8 max-w-md flex justify-center">
              <AdoptionItem  name={animal.name} type={animal.species} img={animal.image_url} />
            </li>
          )
          
      })}
    </ul>
  )
}


export default AdoptionList
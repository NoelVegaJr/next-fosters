import React from 'react'
import AdoptionItem from './AdoptionItem'


const AdoptionList = ({ animals }) => {
  
  
  return (
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">  
      {animals.map(animal => {
          return (
            <li key={animal._id} className="w-full mb-8 max-w-md  mx-auto min-w-96">
              <AdoptionItem  name={animal.name} type={animal.species} img={animal.image_url} />
            </li>
          )
          
      })}
    </ul>

  )
}


export default AdoptionList
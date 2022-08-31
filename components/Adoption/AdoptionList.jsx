import React from 'react'
import AdoptionItem from './AdoptionItem'
const AdoptionList = ({ animals }) => {

  return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">  
            {animals.map(animal => {
                return <AdoptionItem key={animal._id}  name={animal.name} type={animal.species} img={animal.image_url} />
                
            })}
        </ul>

    
  )
}


export default AdoptionList
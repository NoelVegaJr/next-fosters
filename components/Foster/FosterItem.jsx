import React from 'react'
import Card from '../ui/Card'


const FosterItem = ({name, image}) => {
  console.log("Rendering foster item")
  return (
        <Card image={image}>
          <p>{name}</p>
        </Card>


            
  )
}

export default FosterItem
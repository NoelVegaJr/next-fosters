import Cat from "./Cat";
import React from 'react'
const cats = [
  {id: 'c1', name: "Baby Hans", type: "Domestic Shorthair", img: '/images/kitty-1.jpg'} ,
  {id: 'c2', name: "Baby Dusty", type: "Domestic Longhair", img: '/images/kitty-2.jpg'} ,
  {id: 'c3', name: "Baby Heather", type: "Ragdoll", img: '/images/kitty-3.jpg'} ,

]

const CatList = () => {
  return (
    <ul className="flex flex-col gap-8">
      {cats.map(cat => {
        return <li key={cat.id}><Cat name={cat.name} type={cat.type} img={cat.img} /></li>
      })}
    </ul>

  )
}

export default CatList
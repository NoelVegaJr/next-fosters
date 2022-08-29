import React from 'react'
import AdoptionList from '../../components/Adoption/AdoptionList';
import Header from '../../Layout/Header/Header';
const AdoptPage = () => {
  const animals = [
    {id: 'c1', name: "Baby Hans", type: "Domestic Shorthair", img: '/images/kitty-1.jpg'} ,
    {id: 'c2', name: "Baby Dusty", type: "Domestic Longhair", img: '/images/kitty-2.jpg'} ,
    {id: 'c3', name: "Baby Heather", type: "Ragdoll", img: '/images/kitty-3.jpg'} ,
  
  ]
  return (
    <div className="">
      <Header>Adopt Today</Header>
      <AdoptionList animals={animals} />
    </div>
  )
}


export default AdoptPage
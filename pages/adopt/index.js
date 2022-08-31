import React, {useState, useEffect} from 'react'
import axios from 'axios';
import AdoptionList from '../../components/Adoption/AdoptionList';
import Header from '../../Layout/Header/Header';
const AdoptPage = () => {
  const [animals, setAnimals] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/foster/all').then(response => {
      setAnimals(response.data)
      setIsLoading(false)
    })
  },[])


  if(isLoading) {
    return <p></p>
  }
  // const animals = 
  // [
  //   {id: 'c1', name: "Baby Hans", type: "Domestic Shorthair", img: '/images/kitty-1.jpg'} ,
  //   {id: 'c2', name: "Baby Dusty", type: "Domestic Longhair", img: '/images/kitty-2.jpg'} ,
  //   {id: 'c3', name: "Baby Heather", type: "Ragdoll", img: 'https://res.cloudinary.com/deu15ekam/image/upload/v1661927061/animals/oxnh2cnaolf1o0imzxl1.jpg'} ,
  
  // ]
  return (
    <div className="">
      <Header>Adopt Today</Header>
      
      <AdoptionList animals={animals} />
    </div>
  )
}


export default AdoptPage
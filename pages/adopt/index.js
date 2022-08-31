import React, {useState, useEffect} from 'react'
import axios from 'axios';
import AdoptionList from '../../components/Adoption/AdoptionList';
import Header from '../../Layout/Header/Header';

import { useQuery } from 'react-query';

const fetchAnimals = async () => {
  const response = await fetch('/api/foster/all');
  if(!response.ok) {
    throw new Error("Error fetching animals");
  }
  return response.json();
}

const AdoptPage = () => {
  const {data, status} = useQuery('animals', fetchAnimals);

  const content = {
    error: <p>Error fetching data 😭</p>,
    // loading: <p>Loading 🐈</p>,
    succes: <AdoptionList animals={data} />
  }

  return (
    <div className="">
      <Header>Adopt Today</Header>
      {status === 'success' ? <AdoptionList animals={data}/> : null}
    </div>
  )
}


export default AdoptPage
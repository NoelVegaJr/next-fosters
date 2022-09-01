import React from 'react'
import AdoptionList from '../../components/Adoption/AdoptionList';
import Header from '../../components/Layout/Header/Header';
import { useQuery } from '@tanstack/react-query';
import { fetchAnimals } from '../../utils/animals'

const AdoptPage = () => {
  const query = useQuery(['animals'], fetchAnimals);
  return (
    <>
      <Header>Adopt Today</Header>
      {query.data && <AdoptionList animals={query.data} />}
    </>

  )
}


export default AdoptPage
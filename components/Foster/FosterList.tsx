import React from 'react';
import Link from 'next/link';
import FosterItem from './FosterItem';
import { useQuery } from '@tanstack/react-query';

interface Animal {
  id: string;
  name: string;
  avatar: string;
}

export const fetchUserAnimals = async (key: {
  queryKey: string[];
}): Promise<Animal[]> => {
  const id = key.queryKey[1];
  const response = await fetch(`/api/user/${id}/animals`);
  if (!response.ok) {
    throw new Error('Error fetching animals');
  }
  return response.json();
};

const FosterList = ({ userId }: { userId: string }): JSX.Element => {
  const {
    isLoading,
    isError,
    data: animals,
  } = useQuery(['userAnimals', userId], fetchUserAnimals);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {animals.map((animal) => {
        console.log(animal);
        return (
          <li
            key={animal.id}
            className="w-full hover:cursor-pointer border p-6 hover:bg-slate-50"
          >
            <FosterItem name={animal.name} avatar={animal.avatar} />
          </li>
        );
      })}
    </ul>
  );
};

export default FosterList;

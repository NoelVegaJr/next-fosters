import React from 'react';
import Link from 'next/link';
import AdoptionItem from './AdoptionItem';
import { useQuery } from '@tanstack/react-query';

interface Animal {
  id: string;
  name: string;
  avatar: string;
}

const fetchAnimals = async (): Promise<Animal[]> => {
  console.log('fetching');
  const response = await fetch('/api/animals/');

  if (!response.ok) {
    console.log('error');
    throw new Error('Error fetching animals');
  }
  return response.json();
};

const AdoptionList = (): JSX.Element => {
  const {
    isLoading,
    isError,
    data: animals,
  } = useQuery(['animals'], fetchAnimals);

  if (isLoading) {
    return null;
  }
  if (isError) {
    return <p>Error</p>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-20">
      {animals.map((animal) => {
        return (
          <li
            key={animal.id}
            className="w-full mb-8 max-w-md flex justify-center"
          >
            <Link href={`/adopt/${animal.id}`}>
              <a>
                <AdoptionItem name={animal.name} avatar={animal.avatar} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default AdoptionList;

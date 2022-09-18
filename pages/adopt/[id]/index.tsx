import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Avatar from '../../../components/Avatar/Avatar';
import AnimalDescriptionPanel from '../../../components/AnimalDescriptionPanel/AnimalDescriptionPanel';
import AdoptCallToAction from '../../../components/AdoptCallToAction/AdoptCallToAction';

interface Animal {
  name: string;
  type: string;
  breed: string;
  gender: string;
  age: number;
  weight: number;
  avatar: string;
  location?: string;
}

const fetchAnimal = async (key: { queryKey: string[] }): Promise<Animal> => {
  const id = key.queryKey[1];
  const response = await fetch(`/api/animals/${id}`);
  if (!response.ok) {
    throw new Error('Error fetching animals');
  }
  return response.json();
};

const AnimalPage = (): JSX.Element => {
  const router = useRouter();
  const {
    isLoading,
    isError,
    data: animal,
  } = useQuery(['animal', router.query.id as string], fetchAnimal);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <>
      {animal && (
        <>
          <div className='mt-20 lg:flex'>
            <div className='w-full flex justify-center lg:w-1/2'>
              <Avatar
                imgUrl={animal.avatar}
                className='h-80 w-80 lg:h-96 lg:w-96'
              />
            </div>
            <div className='flex flex-col gap-6 lg:w-1/2'>
              <div>
                <AnimalDescriptionPanel animal={animal} />
              </div>
              <div>
                <AdoptCallToAction />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AnimalPage;

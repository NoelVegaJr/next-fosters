import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCat,
  faVenusMars,
  faCalendar,
  faWeight,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

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
          <div className="flex">
            <div className="relative w-96 h-80 bg-gray-200 overflow-hidden ">
              <Image
                src={animal.avatar}
                layout="fill"
                alt="pet for adoption"
                objectFit="cover"
                quality={100}
                className="group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div>
              <h2>Get to know {animal.name}</h2>
              <div className="flex">
                <div>
                  <p>Breed</p>
                  <FontAwesomeIcon icon={faCat} />
                  <p>{animal.breed}</p>
                </div>
                <div>
                  <p>Gender</p>
                  <FontAwesomeIcon icon={faVenusMars} />
                  <p>{animal.gender}</p>
                </div>
                <div>
                  <p>Age</p>
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>{animal.age}</p>
                </div>
                <div>
                  <p>Weight</p>
                  <FontAwesomeIcon icon={faWeight} />
                  <p>{animal.weight}</p>
                </div>
                <div>
                  <p>Location</p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>{animal.location}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AnimalPage;

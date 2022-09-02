import Image from 'next/image';
import { useRouter } from 'next/router';
import { fetchAnimal } from '../../utils/animals';
import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faVenusMars, faCalendar, faWeight, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const AnimalPage = () => {
  const router = useRouter();
  const { isLoading, isError, data: animal} = useQuery(['animal', router.query.id], fetchAnimal)


  if(isLoading) {
    <p>Loading...</p>
  }

  return (
    <>
      {!isError && <p>{JSON.stringify(animal)}</p>}
      {animal && (
        <>
        <div className="flex">
          <div className="relative w-96 h-80 bg-gray-200 overflow-hidden ">
            <Image src={animal.image_url} layout="fill" alt="pet for adoption" objectFit='cover' quality={100} className="group-hover:scale-110 transition-all duration-500" />
          </div>
          <div>
            <h2>Get to know {animal.name}</h2>
            <div className="flex">
              <div>
                <p>Breed</p>
                <FontAwesomeIcon icon={faCat}/>
                <p>{animal.species}</p>
              </div>
              <div>
                <p>Gender</p>
                <FontAwesomeIcon icon={faVenusMars}/>
                <p>{animal.species}</p>
              </div>
              <div>
                <p>Age</p>
                <FontAwesomeIcon icon={faCalendar}/>
                <p>{animal.species}</p>
              </div>
              <div>
                <p>Weight</p>
                <FontAwesomeIcon icon={faWeight}/>
                <p>{animal.species}</p>
              </div>
              <div>
                <p>Location</p>
                <FontAwesomeIcon icon={faLocationDot}/>
                <p>{animal.species}</p>
              </div>
            </div>
          </div>
        </div>


        </>
        )
        
      }
    </>
  )
};

export default AnimalPage;
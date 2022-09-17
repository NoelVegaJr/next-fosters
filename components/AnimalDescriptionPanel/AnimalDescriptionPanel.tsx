import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCat,
  faVenusMars,
  faCalendarDays,
  faWeight,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

export const AnimalDescription = ({ title, faIcon, value, bg }) => {
  return (
    <div className={`flex-1 ${bg === 2 && 'bg-neutral-100'} h-full`}>
      <div className='flex flex-col justify-center h-full gap-6 items-center text-lg'>
        <p>{title}</p>
        <FontAwesomeIcon icon={faIcon} className=' text-neutral-600 text-3xl' />
        <p>{value}</p>
      </div>
    </div>
  );
};

const AnimalDescriptionPanel = ({ animal }) => {
  return (
    <div className='border bg-white w-full text-neutral-500'>
      <header className='p-6 text-center text-3xl border-b-2 '>
        Get to know <span className='text-violet-600'>{animal.name}</span>
      </header>
      <div className='flex flex-basis-0 flex-grow h-52'>
        <AnimalDescription
          title='Breed'
          faIcon={faCat}
          value={animal.breed}
          bg={1}
        />
        <AnimalDescription
          title='Gender'
          faIcon={faVenusMars}
          value={animal.gender}
          bg={2}
        />
        <AnimalDescription
          title='Age'
          faIcon={faCalendarDays}
          value={animal.age}
          bg={1}
        />
        <AnimalDescription
          title='Weight'
          faIcon={faWeight}
          value={animal.weight}
          bg={2}
        />
        <AnimalDescription
          title='Location'
          faIcon={faLocationDot}
          value={animal.location}
          bg={1}
        />
      </div>
      <footer className='flex   bg-violet-600 text-white'>
        <p className='h-full px-10  py-5 text-xl font-bold bg-violet-400'>
          Status
        </p>
        <p className='h-full text-center w-full py-5 text-lg'>
          Available for Adoption
        </p>
      </footer>
    </div>
  );
};

export default AnimalDescriptionPanel;

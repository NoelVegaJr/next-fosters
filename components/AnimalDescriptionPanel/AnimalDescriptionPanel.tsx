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
    <div
      className={`${
        bg === 2 && 'bg-neutral-100'
      } h-full py-8 px-1 text-center basis-1/5 `}
    >
      <div className='flex flex-col justify-center h-full gap-6 items-center text-sm lg:text-lg'>
        <p className='text-violet-400'>{title}</p>
        <FontAwesomeIcon icon={faIcon} className=' text-neutral-600 text-3xl' />
        <p>{value}</p>
      </div>
    </div>
  );
};

const AnimalDescriptionPanel = ({ animal }) => {
  return (
    <div className='border bg-white w-full text-neutral-500'>
      <header className='p-6 text-center text-xl border-b-2 '>
        Get to know <span className='text-violet-600'>{animal.name}</span>
      </header>
      <div className='lg:flex'>
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
          title='Birthday'
          faIcon={faCalendarDays}
          value={new Date(animal.dob).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
          bg={1}
        />
        <AnimalDescription
          title='Weight'
          faIcon={faWeight}
          value={`${animal.weight} lbs`}
          bg={2}
        />
        <AnimalDescription
          title='Location'
          faIcon={faLocationDot}
          value={animal.location}
          bg={1}
        />
      </div>
      <footer className=' bg-violet-600 text-white'>
        <p className='p-4 text-center text-lg font-semibold bg-violet-400'>
          Status
        </p>
        <p className='p-4 text-center text-lg bg-violet-600'>
          Available for adoption
        </p>
      </footer>
    </div>
  );
};

export default AnimalDescriptionPanel;

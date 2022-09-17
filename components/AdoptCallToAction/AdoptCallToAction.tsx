import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

const AdoptCallToAction = () => {
  const router = useRouter();

  return (
    <Link href={`/adopt/${router.query.id}/adoption-form`}>
      <a className='bg-green-600 text-center text-white p-4 flex justify-center items-center gap-6 '>
        <FontAwesomeIcon
          icon={faClipboardList}
          className=' text-white text-3xl'
        />
        Fill out an application here!
      </a>
    </Link>
  );
};

export default AdoptCallToAction;

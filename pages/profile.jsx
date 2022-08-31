import React, {useState} from 'react';
import { getSession } from 'next-auth/react';
import NewFosterForm from '../components/Foster/NewFosterForm';
import AdoptionList from '../components/Adoption/AdoptionList';
import { useQuery, useMutation } from 'react-query';

const { URL } = process.env;

const fetchUserAnimals = async (username) => {
  const response = await fetch(`/api/user/${username}/animals`);
  if(!response.ok) {
    throw new Error("Error fetching animals");
  }
  return response.json();
}

export default function ProfilePage({ user }) {
  const  {username, firstName, lastName, phone, email} = user;
  const [addingNewFoster, setAddingNewFoster] = useState(false);
  const { data, status } = useQuery('userAnimals', () => fetchUserAnimals(username));

  if(status === 'error') {
    return <p>Is error</p>
  }

  const newFosterClickHandler = () => {
    setAddingNewFoster(!addingNewFoster);
  }

  return (
    <div className="mt-10">
      <h1 className="text-3xl">Welcome {username}</h1>
      <button onClick={newFosterClickHandler} className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md">+ New Foster</button>
      {addingNewFoster && <NewFosterForm careTaker={username} />}
      {status !== 'loading' && <AdoptionList animals={data} />}
    </div>
    
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({req: context.req})

  if(!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const response = await fetch(`${URL}/api/user/`+session.user.name);
  const user = await response.json();

  return {
    props: { user }
  }
}
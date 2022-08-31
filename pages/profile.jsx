import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import ModelOverlay from '../UI/ModalOverlay';
import NewFosterForm from '../components/Foster/NewFosterForm';
import AdoptionList from '../components/Adoption/AdoptionList';

export default function ProfilePage({ user }) {
  const  {username, firstName, lastName, phone, email} = user;
  const [addingNewFoster, setAddingNewFoster] = useState(false);
  const [animals, setAnimals] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      axios.get(`/api/user/${username}/animals`).then(response => {
        setAnimals(response.data)
        setIsLoading(false)
      })


    
  },[username])


  if(isLoading) {
    return <p>Is Loading</p>
  }
  const newFosterClickHandler = () => {
    setAddingNewFoster(!addingNewFoster);
  }

  

  const closeNewFosterForm = () => {
    setAddingNewFoster(false)
  }

  return (
    <div className="mt-10">
      <h1 className="text-3xl">Welcome {username}</h1>
      <button onClick={newFosterClickHandler} className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md">+ New Foster</button>
      {/* {addingNewFoster && <ModelOverlay onClose={closeNewFosterForm}><button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md">+ New Foster</button></ModelOverlay>} */}
      {addingNewFoster && <NewFosterForm careTaker={username} onSubmitLoading={setIsLoading}/>}
      {isLoading && <p>Loading animals</p>}
      {!isLoading && <AdoptionList animals={animals} />}
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

  const response = await axios('http://localhost:3000/api/user/'+session.user.name);
  const user = response.data;

  return {
    props: { user }
  }
}
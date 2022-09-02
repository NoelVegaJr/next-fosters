import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import NewFosterForm from '../components/Foster/NewFosterForm';
import FosterList from '../components/Foster/FosterList';
import { useQuery } from '@tanstack/react-query';
import { fetchUserAnimals } from '../utils/animals';

const { URL } = process.env;

export default function ProfilePage({ user }) {
  const [addingNewFoster, setAddingNewFoster] = useState(false);
  const [content, setContent] = useState('foster');

  const newFosterClickHandler = () => {
    setAddingNewFoster(!addingNewFoster);
  };

  return (
    <>
      <div className="mt-10">
        <h1 className="text-3xl mb-10">Welcome {user.username}</h1>
        <div className="flex justify-center">
          <button
            onClick={(e) => setContent('foster')}
            className={`px-10 pb-2  ${
              content === 'foster' &&
              ' border-b-amber-400 shadow-[-1px_-3px_0px_-1px_rgb(255,212,8)_inset]'
            }`}
          >
            Fosters
          </button>
          <button
            onClick={(e) => setContent('application')}
            className={`px-10 pb-2    ${
              content === 'application' &&
              ' border-b-amber-400 shadow-[-1px_-3px_0px_-1px_rgb(255,212,8)_inset]'
            }`}
          >
            Applications
          </button>
          <button
            onClick={(e) => setContent('archive')}
            className={`px-10 pb-2    ${
              content === 'archive' &&
              ' border-b-amber-400 shadow-[-1px_-3px_0px_-1px_rgb(255,212,8)_inset]'
            }`}
          >
            Archive
          </button>
        </div>

        {content === 'foster' && (
          <>
            <button
              onClick={newFosterClickHandler}
              className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md mb-5"
            >
              + New Foster
            </button>
            {addingNewFoster && <NewFosterForm username={user.username} />}
            <FosterList userId={user.id} />
          </>
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    avatar: string;
  }
  const session = await getSession({ req: context.req });
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  console.log(`${URL}/api/user/` + session.user.name);
  const response = await fetch(`${URL}/api/user/` + session.user.name);
  const user = await response.json();

  return {
    props: { user },
  };
};

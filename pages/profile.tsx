import React, { useState } from 'react';
import validateSession from '../utils/session';
import NewFosterForm from '../components/Foster/NewFosterForm';
import FosterList from '../components/Foster/FosterList';

const { URL } = process.env;

export const getServerSideProps = async ({ req, res }) => {
  console.log(req.cookies);
  const session = await validateSession(req.cookies.session);
  if (session) {
    const response = await fetch(
      `https://next-fosters-lhlzy8ooc-noelvegajr.vercel.app/api/user/${session.userId}`
    );
    const userData = await response.json();

    return {
      props: { user: { ...userData } },
    };
  } else {
    console.log('Invalid session');
    return {
      redirect: {
        permenant: false,
        destination: 'login',
      },
      props: {},
    };
  }
};

export default function ProfilePage({ user }) {
  const [addingNewFoster, setAddingNewFoster] = useState(false);
  const [content, setContent] = useState('foster');

  const newFosterClickHandler = () => {
    setAddingNewFoster(!addingNewFoster);
  };

  return (
    <>
      <div className='mt-10'>
        <h1 className='text-3xl mb-10'>
          {user.firstName} {user.lastName}
        </h1>
        <div className='flex justify-center'>
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
              className='bg-green-600 text-white font-semibold py-2 px-4 rounded-md mb-5'
            >
              + New Foster
            </button>
            {addingNewFoster && <NewFosterForm userId={user.id} />}
            <FosterList userId={user.id} />
          </>
        )}
      </div>
    </>
  );
}

import React, { useState } from 'react';
import validateSession from '../utils/session';
import NewFosterForm from '../components/Foster/NewFosterForm';
import FosterList from '../components/Foster/FosterList';
import prisma from '../utils/db';

const { URL } = process.env;

export const getServerSideProps = async ({ req, res }) => {
  const session = await validateSession(req.cookies.session);
  if (session) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: session.userId,
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      });
      return {
        props: { user: { ...user } },
      };
    } catch (err) {
      res.status(500).json({ message: 'Error finding user' });
    }
  }
  return {
    redirect: {
      permenant: false,
      destination: 'login',
    },
    props: {},
  };
};

export default function ProfilePage({ user }) {
  const [addingNewFoster, setAddingNewFoster] = useState(false);
  const [content, setContent] = useState('foster');

  const toggleNewFosterHandler = () => {
    setAddingNewFoster(!addingNewFoster);
  };

  return (
    <>
      <div className='mt-10 relative'>
        <h1 className='text-3xl mb-10'>
          {user.firstName} {user.lastName}
        </h1>
        <div className='flex justify-center mb-4'>
          <button
            onClick={(e) => setContent('foster')}
            className={`px-4 pb-2  ${
              content === 'foster' &&
              ' border-b-amber-400 shadow-[-1px_-3px_0px_-1px_rgb(255,212,8)_inset]'
            }`}
          >
            Fosters
          </button>
          <button
            onClick={(e) => setContent('application')}
            className={`px-4 pb-2    ${
              content === 'application' &&
              ' border-b-amber-400 shadow-[-1px_-3px_0px_-1px_rgb(255,212,8)_inset]'
            }`}
          >
            Applications
          </button>
          <button
            onClick={(e) => setContent('archive')}
            className={`px-4 pb-2    ${
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
              onClick={toggleNewFosterHandler}
              className='bg-green-600 text-white font-semibold py-2 px-4 rounded-md mb-5 w-full md:w-fit'
            >
              + New Foster
            </button>
            {addingNewFoster && (
              <NewFosterForm
                userId={user.id}
                onClose={toggleNewFosterHandler}
              />
            )}
            <FosterList userId={user.id} />
          </>
        )}
      </div>
    </>
  );
}

import React from 'react';
import {getSession } from 'next-auth/react';

export default function Profile() {

  return <h1>User Profile</h1>
}

export async function getServerSideProps(context) {
  const session = await getSession({req: context.req})
  console.log(session)
  if(!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
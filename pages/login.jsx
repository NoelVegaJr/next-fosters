import React from 'react';
import AuthForm from '../components/Auth/AuthForm';
import { getSession } from 'next-auth/react';

const Login = () => {

  console.log("render login form")
  return (
    <AuthForm />
  )
}


export async function getServerSideProps(context) {
  const session = await getSession({req: context.req})
  console.log(session)
  if(session) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

export default Login
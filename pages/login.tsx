import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import Header from '../components/Layout/Header/Header';
import { verify } from 'jsonwebtoken';

export const getServerSideProps = async ({ req, res }) => {
  try {
    const authenticated = verify(req.cookies.auth, 'SECRET') as any;
    const response = await fetch(
      `http://localhost:3000/api/user/${authenticated.userId}`
    );
    const data = await response.json();
    return {
      redirect: {
        permenant: false,
        destination: '/profile',
      },
      props: { user: data },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

const Login = () => {
  return (
    <div>
      <Header>Login</Header>
      <LoginForm />
    </div>
  );
};

export default Login;

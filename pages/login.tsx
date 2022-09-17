import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import Header from '../components/Layout/Header/Header';

const Login = () => {
  console.log('render login form');
  return (
    <div>
      <Header>Login</Header>
      <LoginForm />
    </div>
  );
};

export default Login;

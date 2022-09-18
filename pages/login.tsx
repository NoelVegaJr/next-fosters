import LoginForm from '../components/Login/LoginForm';
import Header from '../components/Layout/Header/Header';
import validateSession from '../utils/session';

export const getServerSideProps = async ({ req, res }) => {
  const session = await validateSession(req.cookies.session);

  if (session) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
      props: {},
    };
  } else {
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

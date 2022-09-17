import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

interface LoginCredentials {
  email: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const [failedLogin, setFailedLogin] = useState(false);
  const router = useRouter();

  const submitHandler = async ({ email, password }) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: () => {
      submitHandler(formik.values);
    },
  });
  const inputClasses = '';
  return (
    <>
      <div className='mt-20'>
        {failedLogin && (
          <p className='text-sm text-center text-red-600'>
            Incorrect email or password
          </p>
        )}
        <form
          onSubmit={formik.handleSubmit}
          className='py-6 px-4 flex flex-col gap-4  bg-white h-full sm:gap-6 md:p-6 md:rounded-md md:gap-10 md:text-xl  max-w-lg mx-auto'
        >
          <div>
            <input
              placeholder='Email'
              id='email'
              type='email'
              {...formik.getFieldProps('email')}
              className='w-full rounded p-1 outline-none border-b-2'
            />
            {formik.touched.email && formik.errors.email ? (
              <p className='text-xs text-red-600'>{formik.errors.email}</p>
            ) : null}
          </div>
          <div>
            <input
              placeholder='Password'
              id='password'
              type='password'
              {...formik.getFieldProps('password')}
              className='w-full rounded p-1 outline-none border-b-2'
            />
            {formik.touched.password && formik.errors.password ? (
              <p className='text-xs text-red-600'>{formik.errors.password}</p>
            ) : null}
          </div>
          <button
            type='submit'
            className=' bg-pink-600  text-white font-bold px-6 py-2 mt-4 rounded-3xl hover:shadow-lg hover:bg-pink-700 transition-all duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

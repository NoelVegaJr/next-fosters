import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Registration {
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
  phone: string;
  password: string;
  password2: string;
}
const RegisterForm = () => {
  const router = useRouter();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  console.log('Rendering Registration Form');

  const submitHandler = async (registration: Registration) => {
    const { password2, ...rest } = registration;
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rest),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
        throw new Error('Request Failed');
      }
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      dob: new Date().toISOString().split('T')[0],
      phone: '',
      password: '',
      password2: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      dob: Yup.date().required('Required'),
      email: Yup.string().required('Required').email(),
      phone: Yup.string()
        .required('Required')
        .matches(phoneRegExp, 'Phone number is not valid'),
      password: Yup.string()
        .required('Required')
        .min(6, 'Password must be more than 6 characters long'),
      password2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: submitHandler,
  });

  const inputClasses = 'w-full rounded p-1 outline-none border-b-2';
  return (
    <>
      <form
        method="post"
        onSubmit={formik.handleSubmit}
        className="py-6 px-4 flex flex-col gap-4 bg-white max-w-lg mx-auto"
      >
        <div className="flex flex-col gap-4 sm:gap-6">
          <div>
            <input
              placeholder="First"
              id="firstName"
              type="text"
              {...formik.getFieldProps('firstName')}
              className={`${inputClasses}`}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p className="text-xs text-red-600">
                {formik.errors.firstName[0]}
              </p>
            ) : null}
          </div>
          <div>
            <input
              placeholder="Last"
              id="lastName"
              type="text"
              {...formik.getFieldProps('lastName')}
              className={`${inputClasses}`}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p className="text-xs text-red-600">
                {formik.errors.lastName[0]}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6">
          <div>
            <label className="text-xs text-neutral-400">Date of Birth</label>
            <br />
            <input
              id="dob"
              type="date"
              {...formik.getFieldProps('dob')}
              className={`${inputClasses}`}
            />
            {formik.touched.dob && formik.errors.dob ? (
              <p className="text-xs text-red-600">{formik.errors.dob[0]}</p>
            ) : null}
          </div>
          <div>
            <input
              placeholder="Primary phone number"
              id="phone"
              type="text"
              {...formik.getFieldProps('phone')}
              className={`${inputClasses}`}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-xs text-red-600 sticky">
                {formik.errors.phone[0]}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <input
            placeholder="Email"
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
            className={`${inputClasses}`}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-xs text-red-600">{formik.errors.email[0]}</p>
          ) : null}
        </div>
        <div>
          <input
            placeholder="Password"
            id="password"
            type="password"
            {...formik.getFieldProps('password')}
            className={`${inputClasses}`}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-xs text-red-600">{formik.errors.password[0]}</p>
          ) : null}
        </div>
        <div>
          <input
            placeholder="Confirm password"
            id="password2"
            type="password"
            {...formik.getFieldProps('password2')}
            className={`${inputClasses}`}
          />
          {formik.touched.password2 && formik.errors.password2 ? (
            <p className="text-xs text-red-600">{formik.errors.password2[0]}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className=" bg-pink-600  text-white font-bold px-6 py-2 mt-4 rounded-3xl hover:shadow-lg hover:bg-violet-900"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterForm;

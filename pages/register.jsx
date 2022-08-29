import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Header from '../Layout/Header/Header';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Register = () => {
  const router = useRouter();
  const [usernameExists, setUsernameExists] = useState(false)
  const [emailExists, setEmailExists] = useState(false)
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  console.log("Rendering Registration Form")


  const submitHandler = async (values) => {
    const {password2, ...rest} = values
    try {
      const response = await fetch('http://localhost:3000/api/test/newUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rest)
      })
      const data = await response.json();

      if(!response.ok) {
        data.usernameExists ? setUsernameExists(true) : setUsernameExists(false)
        data.emailExists ? setEmailExists(true) : setEmailExists(false)
        throw new Error("Request Failed");
      }
      router.push('/login')
    } catch(error) {
      console.error(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      firstName: '',
      lastName: '',
      dob: '',
      phone: '',
      email: '',
      password: '',
      password2: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, 'Must be at least 4 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      dob: Yup.date()
        .required('Required'),
      phone: Yup.string()
        .required('Required')
        .matches(phoneRegExp, 'Phone number is not valid'),
      email: Yup.string()
        .required('Required')
        .email(),
      password: Yup.string()
        .required('Required')
        .min(6, 'Password must be more than 6 characters long'),
      password2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required')
    }),
    onSubmit: submitHandler
  });
      
  const inputClasses = "w-full rounded p-1 outline-none border-b-2"
  return (
    <>
        <Header>Register</Header>

          <form method="post" onSubmit={formik.handleSubmit} className="py-6 px-4 flex flex-col gap-4 bg-white max-w-lg mx-auto">
            <div>
              <input placeholder="Username" id="username" type="text" {...formik.getFieldProps('username')}   className={`${inputClasses}`}/>
              {formik.touched.username && formik.errors.username ? <p className="text-xs text-red-600">{formik.errors.username}</p> : null}
              {usernameExists && <p className="text-lg text-red-600">This username is taken.</p>}
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <input placeholder="First" id="firstName" type="text" {...formik.getFieldProps('firstName')}  className={`${inputClasses}`}/>
                {formik.touched.firstName && formik.errors.firstName ? <p className="text-xs text-red-600">{formik.errors.firstName}</p> : null}
              </div>
              <div>
                <input placeholder="Last" id="lastName" type="text" {...formik.getFieldProps('lastName')}   className={`${inputClasses}`}/>
                {formik.touched.lastName && formik.errors.lastName ? <p className="text-xs text-red-600">{formik.errors.lastName}</p> : null}
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <label className="text-xs text-neutral-400">Date of Birth</label><br/>
                <input id="dob" type="date" {...formik.getFieldProps('dob')}   className={`${inputClasses}`}/>
                {formik.touched.dob && formik.errors.dob ? <p className="text-xs text-red-600">{formik.errors.dob}</p> : null}
              </div>
              <div>
                <input placeholder="Primary phone number" id="phone" type="text" {...formik.getFieldProps('phone')}   className={`${inputClasses}`}/>
                {formik.touched.phone && formik.errors.phone ? <p className="text-xs text-red-600 sticky">{formik.errors.phone}</p> : null}
              </div>
            </div>

            <div>
              <input placeholder="Email" id="email" type="email" {...formik.getFieldProps('email')}   className={`${inputClasses}`}/>
              {formik.touched.email && formik.errors.email ? <p className="text-xs text-red-600">{formik.errors.email}</p> : null}
              {emailExists && <p className="text-lg text-red-600">This email is taken.</p>}
            </div>
            <div>
              <input placeholder="Password" id="password" type="password" {...formik.getFieldProps('password')}   className={`${inputClasses}`}/>
              {formik.touched.password && formik.errors.password ? <p className="text-xs text-red-600">{formik.errors.password}</p> : null}
            </div>
            <div>
              <input placeholder="Confirm password" id="password2" type="password" {...formik.getFieldProps('password2')}   className={`${inputClasses}`}/>
              {formik.touched.password2 && formik.errors.password2 ? <p className="text-xs text-red-600">{formik.errors.password2}</p> : null}
            </div>
            <button type="submit" className=" bg-pink-600  text-white font-bold px-6 py-2 mt-4 rounded-3xl hover:shadow-lg hover:bg-violet-900">Submit</button>
          </form>


    </>
  )
}

export default Register
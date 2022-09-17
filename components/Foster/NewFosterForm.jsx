import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import uploadImage from '../../utils/cloudinary';

const addAnimal = async (newAnimal) => {
  console.log('adding animal');
  console.log(newAnimal)
  try {
    await fetch(`/api/user/${newAnimal.userId}/animals/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAnimal)
      });
  } catch (error) {
    console.log(error);
  }
};

const NewFosterForm = ({ userId }) => {
  const queryClient = useQueryClient();
  const addAnimalMutation = useMutation(addAnimal, {
    onSuccess: () => {
      queryClient.invalidateQueries('userAnimals');
    },
  });

  const formSubmitHandler = async (values) => {
    console.log(values);
    console.log('form submitted');
    const {image, ...rest} = values;
    let image_url = await uploadImage(image);
    const newAnimal = {
      userId: userId,
      ...rest,
      avatar: image_url
    }
    console.log(newAnimal);
    addAnimalMutation.mutate(newAnimal);
  };

  const formik = useFormik({
    initialValues: {
      type: 'Cat',
      breed: '',
      name: '',
      gender: 'Female',
      dob: '',
      weight: '',
      image: '',
    },
    validationSchema: Yup.object({
      type: Yup.string().required('Required'),
      breed: Yup.string().required('Required'),
      name: Yup.string()
        .required('Required')
        .max(20, 'Must be 20 characters or less'),
      gender: Yup.string().required('Required'),
      dob: Yup.string().required('Required'),
      weight: Yup.string().required('Required'),
      image: Yup.mixed().required('Required'),
    }),
    onSubmit: () => {
      console.log('form submitted');
      formSubmitHandler(formik.values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='border '>
      <div className='flex gap-6 '>
        <div>
          <label>Type</label>
          <br />
          <select
            id='type'
            {...formik.getFieldProps('type')}
            className='border border-slate-200 w-'
          >
            <option value='cat'>Cat</option>
            <option value='dog'>Dog</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <br />
          <select
            id='gender'
            {...formik.getFieldProps('gender')}
            className='border border-slate-200 w-'
          >
            <option value='female'>Female</option>
            <option value='male'>Male</option>
          </select>
        </div>
        <div>
          <label>Name</label>
          <br />
          <input
            id='name'
            type='text'
            {...formik.getFieldProps('name')}
            className='border border-slate-200'
          />
        </div>
      </div>
      <div className='flex'>
        <div>
          <label>Breed</label>
          <br />
          <input
            id='breed'
            {...formik.getFieldProps('breed')}
            className='border border-slate-200 w-'
          />
        </div>
        <div>
          <label>Age</label>
          <br />
          <input
            id='dob'
            type='date'
            {...formik.getFieldProps('dob')}
            className='border border-slate-200'
          />
        </div>
        <div>
          <label>Weight</label>
          <br />
          <input
            id='weight'
            type='number'
            {...formik.getFieldProps('weight')}
            className='border border-slate-200'
          />
        </div>
      </div>
      <div>
        <label>Profile Picture</label>
        <br />
        <input
          id='img'
          type='file'
          accept='image/png, image/jpeg, image/jpg'
          onChange={(e) => formik.setFieldValue('image', e.target.files[0])}
          className='border border-slate-200'
        />
      </div>
      <button
        type='submit'
        className=' bg-pink-600  text-white font-bold px-6 py-2 mt-4 rounded-3xl hover:shadow-lg hover:bg-pink-700'
      >
        Submit
      </button>
    </form>
  );
};

export default NewFosterForm;

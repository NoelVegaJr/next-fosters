import { useState, useEffect } from 'react';
import Script from 'next/script';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import uploadImage from '../../utils/cloudinary';

const addAnimal = async (newAnimal) => {
  try {
    await fetch(`/api/user/${newAnimal.userId}/animals/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAnimal),
    });
  } catch (error) {
    console.log(error);
  }
};

const NewFosterForm = ({ userId, onClose }) => {
  const [breeds, setBreeds] = useState([]);
  const queryClient = useQueryClient();
  const addAnimalMutation = useMutation(addAnimal, {
    onSuccess: () => {
      queryClient.invalidateQueries('userAnimals');
    },
  });

  useEffect(() => {
    fetch('/api/breeds')
      .then((response) => response.json())
      .then((data) => {
        setBreeds(data);
      });
  }, []);

  const formSubmitHandler = async (values) => {
    console.log(values);
    console.log('form submitted');
    const { image, ...rest } = values;
    let image_url = await uploadImage(image);
    const newAnimal = {
      userId: userId,
      ...rest,
      avatar: image_url,
    };
    addAnimalMutation.mutate(newAnimal);
  };

  const formik = useFormik({
    initialValues: {
      type: 'Cat',
      breed: 'Abyssinian',
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
      onClose();
    },
  });

  return (
    <>
      <div
        onClick={onClose}
        className='fixed top-0 left-0 z-20 bg-slate-100/10 h-screen w-full'
      ></div>
      <div className=" z-30 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mx-auto   lg:px-8">
        <form
          onSubmit={formik.handleSubmit}
          className='border  p-6 flex flex-col gap-4 rounded-lg shadow-lg bg-white  '
        >
          <div className='w-full'>
            <label>Type</label>
            <br />
            <select
              id='type'
              {...formik.getFieldProps('type')}
              className='border border-slate-200 w-full'
            >
              <option value='cat'>Cat</option>
              <option value='dog'>Dog</option>
            </select>
          </div>
          <div className=' w-full'>
            <label>Gender</label>
            <br />
            <select
              id='gender'
              {...formik.getFieldProps('gender')}
              className='border border-slate-200 w-full'
            >
              <option value='Female'>Female</option>
              <option value='Male'>Male</option>
            </select>
          </div>
          <div className='w-full'>
            <label>Name</label>
            <br />
            <input
              id='name'
              type='text'
              {...formik.getFieldProps('name')}
              className='border border-slate-200 w-full'
            />
          </div>

          <div className=' w-full'>
            <label>Breed</label>
            <br />
            <select
              id='breed'
              {...formik.getFieldProps('breed')}
              className='border border-slate-200 w-full'
            >
              {breeds.map((breed) => {
                return (
                  <option key={breed.id} value={breed.name}>
                    {breed.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='w-full'>
            <label>Age</label>
            <br />
            <input
              id='dob'
              type='date'
              {...formik.getFieldProps('dob')}
              className='border border-slate-200 w-full'
            />
          </div>
          <div className='w-full'>
            <label>Weight</label>
            <br />
            <input
              id='weight'
              type='number'
              {...formik.getFieldProps('weight')}
              className='border border-slate-200 w-full'
            />
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
      </div>
    </>
  );
};

export default NewFosterForm;

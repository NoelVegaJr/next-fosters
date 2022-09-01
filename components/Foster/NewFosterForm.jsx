import React from 'react';
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import uploadImage from '../../utils/cloudinary';

const addAnimal = async ({username, type, name, species, image_url}) => {
  console.log("adding animal")
  try {
    await axios.post(`/api/user/${username}/animals/create`, {
      careTaker: username,
      type: type,
      name: name,
      species: species,
      image_url: image_url
    });
  } catch(error) {
    console.log(error)
  }
}

const NewFosterForm = ({ username }) => {
  const queryClient = useQueryClient()
  const addAnimalMutation = useMutation(addAnimal, {
    onSuccess: () => {
      queryClient.invalidateQueries('userAnimals')
    }
  });

  const formSubmitHandler = async ({type, name, species, image}) => {
    let image_url = await uploadImage(image)
    addAnimalMutation.mutate({username, type, name, species, image_url})
  }


  const formik = useFormik({
    initialValues: {
      animalType: 'cat',
      name: '',
      species: '',
      image: ''
    }, validationSchema: Yup.object({
      animalType: Yup.string()
        .required('Required'),
      name: Yup.string()
        .required('Required')
        .max(20, 'Must be 20 characters or less'),
      species: Yup.string()
        .required('Required'),
      image: Yup.mixed().required('Required')
    }),
    onSubmit: () => formSubmitHandler(formik.values)
  })

  return (
    <form onSubmit={formik.handleSubmit} className="border flex gap-6">
      <div>
        <label>Type</label><br/>
        <select id="animalType" onChange={e => formik.setFieldValue('animalType', e.currentTarget.value)} className="border border-slate-200 w-">
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </div>
      <div>
        <label>Name</label><br />
        <input id="name" type="text" {...formik.getFieldProps('name')} className="border border-slate-200" />
      </div>
      <div>
        <label>Species</label><br />
        <input id="species" type="text" {...formik.getFieldProps('species')} className="border border-slate-200" />
      </div>
      <div>
        <label>Profile Picture</label><br />
        <input id="img" type="file" accept="image/png, image/jpeg, image/jpg" onChange={e => formik.setFieldValue('image', e.target.files[0])}  className="border border-slate-200" />
      </div>
      <button type="submit" className=" bg-pink-600  text-white font-bold px-6 py-2 mt-4 rounded-3xl hover:shadow-lg hover:bg-violet-900">Submit</button>
    </form>
  )
}

export default NewFosterForm
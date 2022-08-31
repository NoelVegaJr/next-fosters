import React from 'react';
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NewFosterForm = ({careTaker, onSubmitLoading}) => {
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
    onSubmit: async () => {
      onSubmitLoading(true)
      const { image } = formik.values;
      const formData = new FormData()
      let image_url;
      try {
        formData.append('file', image)
        formData.append('upload_preset', "fosters")
        const res = await axios.post('https://api.cloudinary.com/v1_1/deu15ekam/image/upload', formData)
        image_url = res.data.secure_url
      } catch (e) {
        console.log(e)
      }

      try {
        await axios.post('/api/foster/create', {
          careTaker: careTaker,
          type: formik.values.type,
          name: formik.values.name,
          species: formik.values.species,
          image_url: image_url
        })
      } catch(error) {
        console.log(error)
      }
      onSubmitLoading(false)
    }
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
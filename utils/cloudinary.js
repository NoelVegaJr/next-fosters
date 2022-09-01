import axios from 'axios';
const uploadImage = async (image) => {
  const formData = new FormData()
  formData.append('file', image)
  formData.append('upload_preset', "fosters")
  const res = await axios.post('https://api.cloudinary.com/v1_1/deu15ekam/image/upload', formData)
  return res.data.secure_url
}


export default uploadImage;
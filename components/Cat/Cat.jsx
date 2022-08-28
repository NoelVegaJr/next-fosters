import React, {useState} from 'react'

import ApplicationForm from '../ApplicationForm/ApplicationForm';
const Cat = (props) => {
  const [isAdopting, setIsAdopting] = useState(false);
  const adoptionFormHandler = () => {
    setIsAdopting(true);
  }

  const closeFormHandler = () => {
    setIsAdopting(false);
  }

  return (
    <>
    <div className="rounded overflow-hidden border shadow-md w-fit mx-auto">
      <img src={props.img} alt="Kitten"  />
      <div className="p-4 flex flex-col gap-2">
        <p className="text-2xl text-violet-900 font-bold">{props.name}</p>
        <p className="font-semibold">{props.type}</p>
        <button onClick={adoptionFormHandler} className="bg-violet-800 text-white font-semibold mt-8 px-6 py-2 rounded-3xl hover:shadow-lg hover:bg-violet-900">Adopt</button>
      </div>
    </div>
    {isAdopting && <ApplicationForm catName={props.name} onClose={closeFormHandler}/>}
    </>
  )
}

export default Cat
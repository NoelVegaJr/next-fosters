import React, {useState} from 'react'
import Image from 'next/image';
import ApplicationForm from '../ApplicationForm/ApplicationForm';

const AdoptionItem = (props) => {
  const [isAdopting, setIsAdopting] = useState(false);
  const adoptionFormHandler = () => {
    console.log("clicked")
    setIsAdopting(true);
  }

  const closeFormHandler = () => {
    setIsAdopting(false);
  }
  console.log(props.img)
  return (
        <>
          <li className="w-full mb-8 max-w-md  mx-auto min-w-96">
            <div className="relative w-full h-96 bg-gray-200 rounded-md -z-10">
              <Image src={props.img} layout="fill" alt="pet for adoption" objectFit='cover' quality={100} />
            </div>
            <div className="mt-4 flex justify-between">
              <div className="">
                <h3 className="text-sm text-gray-700">
                <a href="#">
                  {props.name}
                </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{props.type}</p> 
              </div>
              <button onClick={adoptionFormHandler} className="self-start bg-violet-800 text-white font-semibold mt-8 px-6 py-2 rounded-3xl hover:shadow-lg hover:bg-violet-900">Adopt</button>
            </div>
            
          </li>
          {isAdopting && <ApplicationForm catName={props.name} onClose={closeFormHandler}/>}           
        </>


            
  )
}

export default AdoptionItem;
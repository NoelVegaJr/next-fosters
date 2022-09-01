import React, {useState} from 'react'
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

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
    <div className="hover:cursor-pointer group">
      <div className="relative w-52 h-52 bg-gray-200  rounded-full overflow-hidden mb-5 ">
        <Image src={props.img} layout="fill" alt="pet for adoption" objectFit='cover' quality={100} className="group-hover:scale-110 transition-all duration-300" />
      </div>
        <h3 className="text-3xl text-center text-violet-800 group-hover:text-pink-600 mb-3 transition-all duration-300">
          {props.name}
        </h3>
        <p className="flex items-center justify-center gap-5 ">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Somerville NJ</span>
        </p>

        {/* <button onClick={adoptionFormHandler} className="self-start bg-violet-800 text-white font-semibold mt-8 px-6 py-2 rounded-3xl hover:shadow-lg hover:bg-violet-900">Adopt</button> */}
    </div>
      {isAdopting && <ApplicationForm catName={props.name} onClose={closeFormHandler}/>}           
        </>


            
  )
}

export default AdoptionItem;
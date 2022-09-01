import React, {useState} from 'react'
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import Card from '../ui/Card';

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
          <Card image={props.img}>
            <div className="mt-4 flex justify-between">
              <div className="">
                <h3 className="text-sm text-gray-700">
                <a className="text-lg">
                  {props.name}
                </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{props.type}</p> 
              </div>
              <button onClick={adoptionFormHandler} className="self-start bg-violet-800 text-white font-semibold mt-8 px-6 py-2 rounded-3xl hover:shadow-lg hover:bg-violet-900">Adopt</button>
            </div>
          </Card>
          {isAdopting && <ApplicationForm catName={props.name} onClose={closeFormHandler}/>}           
        </>


            
  )
}

export default AdoptionItem;
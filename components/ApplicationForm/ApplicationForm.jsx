import React, {useState} from 'react'
import ModelOverlay from '../../UI/ModalOverlay';
import Input from '../../UI/Input';
import Step from './Step';

const ApplicationForm = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  console.log("Form Rendering")
  console.log("initial step", currentStep)


  const currentStepHandler = () => {
    console.log("Next Step")
    setCurrentStep(prev => prev + 1)
  }

  const steps = [];

  for(let step = 1; step <= 3; step++) {
    if(step < currentStep) {
      console.log("creating step")
      steps.push(<Step key={step} className="bg-green-600 text-white">{step}</Step>)
    } else {
      steps.push(<Step key={step}>{step}</Step>)
    }
  }
  let form;
  switch(currentStep) {
    case 1:
      console.log("step 1")
      form = <form className="flex flex-col gap-4">
        <Input id="name" label="Name" input={{type: 'text'}} />
        <Input id="email" label="Email" input={{type: 'email'}} />
        <Input id="phone" label="Phone" input={{type: 'text'}} />
        <Input id="address" label="Address" input={{type: 'text'}} />
        <Input id="city" label="City" input={{type: 'text'}} />
        <Input id="state" label="State" input={{type: 'text'}} />
        <button type="button" onClick={currentStepHandler} className="bg-green-600 text-white py-2 rounded-md mt-6 ">Next</button>
      </form>
      break
    case 2:
      console.log("step 2")
      form = <form className="flex flex-col gap-4">
      <Input id="firstTime" label="Is this your first time owning a cat ?" input={{type: 'text'}} />
      <Input id="cargiver" label="Primary care taker ?" input={{type: 'email'}} />
      <Input id="declaw" label="Will the cat be declawed ?" input={{type: 'text'}} />
      <Input id="outside" label="Will you allow access outside ?" input={{type: 'text'}} />
      <Input id="outside" label="Living arrangements:" input={{type: 'text'}} />
      <Input id="living" label="How many people live with you ?" input={{type: 'text'}} />
      <button type="button" onClick={currentStepHandler} className="bg-green-600 text-white py-2 rounded-md mt-6 ">Next</button>
    </form>
    break
    case 3:
      console.log("step 3")
      form = <form className="flex flex-col gap-4">
      <label className="font-semibold">Reference 1</label>
      <Input id="ref-1" label="Name" input={{type: 'text'}} />
      <Input id="ref-1" label="Primary #" input={{type: 'text'}} />
      <label className="font-semibold">Reference 2</label>
      <Input id="ref-2" label="Name" input={{type: 'text'}} />
      <Input id="ref-2" label="Primary #" input={{type: 'text'}} />
      <button type="button" onClick={currentStepHandler} className="bg-green-600 text-white py-2 rounded-md mt-6 ">Next</button>
    </form>
    break
    case 4:
      console.log("step 3")
      break
    default:
      return null
  }

  return (
    <ModelOverlay onClose={props.onClose}>
      <div className="bg-white rounded-lg p-6 w-full">
        <div className="mb-8">
          <p className="flex gap-10 justify-center">
            {steps}
          </p>
        </div>
        {currentStep < 4 ? form : <div className="text-center flex flex-col gap-4">
          <h1>{props.catName} says thank you!</h1>
          <p>We will review your application and get back to you within the next 48 hours.</p>
        </div>}
      </div>
    </ModelOverlay>
  )
}

export default ApplicationForm
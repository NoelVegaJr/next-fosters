import React from 'react'

const Step = (props) => {
  return <span className={`border font-semibold border-slate-300 rounded-full w-10 h-10 flex justify-center items-center ${props.className}`}>
    {props.children}
  </span>
  
}

export default Step
import React from 'react'

const Input = (props) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={props.id}>{props.label}</label>
        <input {...props.input} className="border" />
      </div>

    </>

  )
}

export default Input
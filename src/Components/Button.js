import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick} type="button" class="shadow-md shadow-indigo-500/20 text-indigo-300 bg-indigo-900 focus:outline-none font-bold rounded-lg text-lg px-10 py-2.5 text-center mr-4 mt-4">{props.title}</button>
  )
}

export default Button
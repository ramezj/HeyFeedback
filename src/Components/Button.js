import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick} type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 focus:outline-none font-bold rounded-lg text-lg px-10 py-2.5 text-center mr-4 mt-4 shadow-lg shadow-teal-500/50">{props.title}</button>
  )
}

export default Button
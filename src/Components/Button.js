import React from 'react'

const Button = (props) => {
  return (
    <button 
    onClick={props.onClick} 
    type="button" 
    className="shadow-md
    text-indigo-100 
    bg-indigo-600 
    focus:outline-none
    focus:ring-none 
    font-extrabold 
    rounded-lg 
    text-lg 
    px-10 py-2.5 
    text-center 
    mr-4 mt-4 
    hover:bg-indigo-500 
    duration-500
    shadow-xl
    shadow-indigo-500/10
    font-extrabold
    ">
    {props.title}
    </button>
  )
}

export default Button
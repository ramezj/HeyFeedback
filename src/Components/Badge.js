import React from 'react'

const Badge = (props) => {
  return (
    <span class="bg-indigo-100 text-indigo-800 text-md font-medium mr-2 px-5 py-2 rounded-full dark:bg-indigo-900 dark:text-indigo-300">{props.text}</span>
  )
}

export default Badge
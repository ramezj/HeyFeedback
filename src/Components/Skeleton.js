import React from 'react'

const Skeleton = () => {
  return (
    <>
    <div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    </div>
    </>
  )
}

export default Skeleton
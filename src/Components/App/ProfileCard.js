import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Button  from '../Button';

const ProfileCard = () => {
  const { data: session, status } = useSession()
  if (session) {
    return (
        <>
        <div className="w-full max-w-sm bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c] rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center pb-10">
        <br></br>
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={session.user.image} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{session.user.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{session.user.email}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
        <Button title="Hello"/>
        <Button title="Hello"/>
        </div>
    </div>
</div>
        </>
    )
  }
  return (
    <>
    </>
  )
}

export default ProfileCard
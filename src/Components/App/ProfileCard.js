import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const ProfileCard = () => {
  const { data: session, status } = useSession()
  if (session) {
    return (
        <>
        <div class="w-full max-w-sm bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c] rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
        <br></br>
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={session.user.image} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{session.user.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{session.user.email}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
        <button type="button" class="font-bold text-lg flex items-center justify-center shadow-md shadow-teal-500/20 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 shadow-xl px-8 py-2 tracking-wide capitalize transition-colors transform rounded-lg">Upgrade </button>
        <button type="button" class="font-bold text-lg flex items-center justify-center shadow-md shadow-teal-500/20 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 shadow-xl px-8 py-2 tracking-wide capitalize transition-colors transform rounded-lg">Sign Out </button>
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
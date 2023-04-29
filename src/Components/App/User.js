import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import useSWR from 'swr'

const User = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data: session, status } = useSession()
  const { data, error, isLoading } = useSWR('/api/User', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return (
    <>
    <div><span class="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash"></span><span class="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.2s]"></span><span class="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-flash [animation-delay:0.4s]"></span></div>
    <h1>Loading your amazing feedback</h1>
    </>
  )
  return  (
    <>
    {JSON.stringify(data.data)}
    {JSON.stringify(data.id)}
    </>
    )
}

export default User
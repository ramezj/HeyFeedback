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
    <h1>Loading your amazing feedback</h1>
    </>
  )
  return <div>{JSON.stringify(data.data)}</div>
}

export default User
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import useSWR from 'swr'
import { motion } from 'framer-motion';

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
    <motion.div className="flex flex-wrap gap-5 justify-center w-4/5">
    {
      data.data.map((x) => {
        return (
          <> 
          <motion.div 
    whileHover={{
        scale:1.1
    }}
    className="w-full max-w-sm p-8 bg-form rounded-lg shadow-lg dark:bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c] dark:border-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{x.email}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Body :{x.body}</p>
          <p>IP :{x.ipAddress}</p>
          <p>GEO :{x.geo}</p>
          </motion.div>
          </>
        )
      })
    }
    </motion.div>
    </>
    )
}

export default User
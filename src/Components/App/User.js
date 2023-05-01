import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import useSWR from 'swr'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Button from '../Button';

const User = () => {
  const { data: session, status } = useSession({
    // Redirect User if Unauthenticated
    required:true,
    onUnauthenticated() {
      router.push('/')
    }
  })
  const router = useRouter();
  const [ data, setData ] = useState();
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState()
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch('/api/User');
      const resJSON = await res.json();
      setData(resJSON);
      setLoading(false);
    }
    fetchData();
  }, [])
  if (loading || loading == true) return (
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
               <a href="#" class="bg-green-100 text-green-800 text-md font-bold inline-flex items-center px-2.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                </a>
                <div href="#" class="bg-green-100 text-green-800 text-md font-bold inline-flex items-center px-2.5 space-x-3 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                <img src={"https://flagcdn.com/" + x.geo.toLowerCase() + ".svg"} width="25" alt="Country Flag" />
                  <p> {x.ipAddress}</p>
                </div>
    <br></br>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{x.email}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{x.body}</p>
          <Button title="Reply With email" onClick={() => {window.location = "mailto:" + x.email}}/>
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
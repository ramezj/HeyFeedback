import React, { useState, useEffect } from 'react'
import { useSession, getSession } from "next-auth/react"
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Button from '../Button';

const User = ( props, userData ) => {
  const router = useRouter();
  const { data: session, status } = useSession({
    // Redirect User if Unauthenticated
    required:true,
    onUnauthenticated() {
      router.push('/')
    }
  })
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
  if (status == "unauthenticated") { 
    return (
      <>
      <p>Please Sign In First.</p>
      </>
    )
  }
  if (loading || loading == true) return (
    <>
    <h1 className="font-bold text-3xl">🌎 This shouldnt take long</h1>
    </>
  )
  return  (
    <>
    {
      data.user.isSubscribed 
      ? 
      <> 
      <motion.div className="flex flex-wrap gap-8 justify-center w-full">
    {
      data.data.map((x) => {
        return (
          <> 
          <motion.div whileHover={{scale:1.1}}
            className="w-full max-w-sm p-8 bg-form rounded-lg shadow-lg dark:bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c] dark:border-gray-700 items-center">
               <a href="#" class="bg-green-100 text-green-800 text-md font-bold inline-flex items-center px-2.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                </a>
                {/* <div href="#" class="bg-green-100 text-green-800 text-md font-bold inline-flex items-center px-2.5 space-x-3 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                  <p> {x.userAgent}</p>
                </div> */}
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
      : 
      <> 
      <motion.div 
    whileHover={{
        scale:1.1
    }}
    className="w-full max-w-sm p-8 bg-form rounded-lg shadow-lg dark:bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c] dark:border-gray-700">
               <a href="#" class="bg-green-100 text-green-800 text-md font-bold inline-flex items-center px-2.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                </a>
                <div href="#" class="bg-green-100 text-green-800 text-md font-bold inline-flex items-center px-2.5 space-x-3 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                <img src={"https://flagcdn.com/eg.svg"} width="25" alt="Country Flag" />
                  <p>192.168.1.1</p>
                </div>
    <br></br>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hey@Feedback.pro</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is what your user feedback will look like.</p>
          <Button title="Reply With email" onClick={() => {window.location = "mailto:user@heyfeedback.com"}}/>
          </motion.div>
      </>
    }
    </>
  )
}

export default User
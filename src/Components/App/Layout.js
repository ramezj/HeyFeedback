import React, { useState, useEffect } from 'react'
import motion from "framer-motion"
import { useSession, getSession, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import User from './User'
import Link from "next/link"

const Layout = () => {
   const router = useRouter();
   const [ user, setUser ] = useState();
   const [ premium, setPremium ] = useState(false);
   console.log("user :", user);
   console.log("premium :", premium);
   const { data: session, status } = useSession({
     // Redirect User if Unauthenticated
     required:true,
     onUnauthenticated() {
       router.push('/')
     }
   })
   useEffect(() => {
      const checkUser = async () => {
         const res = await fetch('/api/User');
         const data = await res.json();
         setUser(data);
         setPremium(data.user.isSubscribed);
      }
      checkUser();
   }, [])
  return (
    <div className="h-full min-h-screen bg-[#050505]"> 
{/* <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button> */}
<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-[#1d1d1d] dark:bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c]">
   <div className="flex justify-center">
             <Link className="btn btn-ghost normal-case text-2xl mt-4 font-bold mr-1" href="/">HeyFeedback</Link>
         </div>
         <br></br>
      <ul class="space-y-2 font-medium">
         <li>
            <Link href="/App" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#0e0e0e] dark:hover:bg-[#0e0e0e]">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <span class="flex-1 ml-3 whitespace-nowrap">{session.user.name}</span>
            </Link>
         </li>
         <li>
            {
               premium 
               ? <>
               <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#0e0e0e] dark:hover:bg-[#0e0e0e]">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Premium</span>
               </a>
               </>
               : <>
               <a onClick={(()=> {
            Paddle.Checkout.open({
              product:49358,
              passthrough:uid,
              email:user.email
            })
          })} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#0e0e0e] dark:hover:bg-[#0e0e0e]">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Upgrade</span>
               <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
               </a>
               </>
            }
         </li>
         <li>
            <a onClick={() => signOut()} class="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#0e0e0e] dark:hover:bg-[#0e0e0e]">
               <svg aria-hidden="true" class="cursor-pointer flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap cursor-pointer">Sign Out</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
<div class="p-4 sm:ml-64">
   <div class="p-4 rounded-lg">
      <h2 className='text-5xl font-bold'>📚 Received Feedbacks</h2>
      <br></br><br></br>
      <User />
   </div>
</div>
    </div>
  )
}

export default Layout
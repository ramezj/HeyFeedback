import React, { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react"
import "flowbite";
import { motion } from "framer-motion"; 
import Link from 'next/link'

const Navbar = () => {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
        console.log(session)
        return (
            <>
  <div className="navbar bg-transparent">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-2xl mt-4 ml-4" href="/">HeyFeedback</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-4 mt-4 ">
        <div className="w-10 rounded-full">
          <img src={session.user.image} alt={session.user.image}/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between" href="/App">
            App
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={() => {signOut({ callbackUrl: '/' })}}>Sign Out</button></li>
      </ul>
    </div>
  </div>
</div>
</>
        )
      } else {
        return (
            <>
            <div className="navbar bg-bg-transparent">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-2xl mt-4 ml-4">HeyFeedback</a>
  </div>
  <div className="navbar-end">
  <motion.button onClick={() => {signIn("google", { callbackUrl: '/App' })}} className="shadow-md
    text-indigo-100 
    bg-indigo-600 
    focus:outline-none
    focus:ring-none 
    font-bold 
    rounded-lg 
    text-lg 
    px-10 py-2.5 
    text-center 
    mr-4 mt-4 
    hover:bg-indigo-500 
    duration-500"
    whileHover={{
      y:-3
    }}
    >
    Sign In
  </motion.button>
  </div>
</div>
</>
        )
      }
}
export default Navbar;
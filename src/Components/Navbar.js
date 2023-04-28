import React, { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"
import { signIn, signOut } from "next-auth/react"
import "flowbite";
import Button from '../Components/Button';
import Link from 'next/link'

const Navbar = () => {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
        console.log(session)
        return (
            <>
            <div className="navbar bg-[#090909]">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-2xl mt-4 ml-4" href="/">HeyFeedback</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-4 mt-4 ">
        <div className="w-10 rounded-full shadow-md shadow-blue-500/50">
          <img src={session.user.image} alt={session.user.image}/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link className="justify-between" href="/App">
            {session.user.name} Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={() => {signOut()}}>Sign Out</button></li>
      </ul>
    </div>
  </div>
</div>
</>
        )
      } else {
        return (
            <>
            <div className="navbar bg-[#090909]">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-2xl mt-4 ml-4">HeyFeedback</a>
  </div>
  <div className="navbar-end">
  <div class="relative group mt-3 mr-3 cursor-pointer">
    <button onClick={() => {signIn("google", { callbackUrl:"/App"})}}>
    <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
      </div>
      <div class="relative px-10 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg text-lg font-bold">
        Get Started</div>
        </button>
        </div>
  </div>
</div>
            </>
        )
      }
}
export default Navbar;
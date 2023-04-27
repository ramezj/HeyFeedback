import React, { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"
import { signIn } from "next-auth/react"
import "flowbite";

const Navbar = () => {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
        console.log(session)
        return (
            <>
            <div className="navbar bg-[#090909]">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl mt-4 ml-4">HeyFeedback</a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-4 mt-4 ">
        <div className="w-10 rounded-full shadow-md shadow-blue-500/50">
          <img className="shadow-lg shadow-blue-500/50" src={session.user.image} alt={session.user.image}/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {session.user.name} Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
</>
        )
      } else {
        return (
            <>
            <div className="navbar bg-base-black">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-2xl mt-4 ml-4">HeyFeedback</a>
  </div>
  <div className="navbar-end">
  <button onClick={() => {signIn("google")}} type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 focus:outline-none font-bold rounded-lg text-lg px-10 py-2.5 text-center mr-4 mt-4 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/60">Get Started</button>
  </div>
</div>
            </>
        )
      }
}
export default Navbar;
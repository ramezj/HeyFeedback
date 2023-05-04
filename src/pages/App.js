import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '../Components/Navbar';
import { useRouter } from 'next/router';
import ProfileCard from '../Components/App/ProfileCard';
import User from '../Components/App/User';
import { motion } from 'framer-motion';

const App = () => {
  const { data: session, status } = useSession({
    // Redirect User if Unauthenticated
    required:true,
    onUnauthenticated() {
      router.push('/')
    }
  })
  const submitData = async () => {
    const res = await fetch('/api/receive?id=644c3ead88e5896ba0194013', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body:'testing userAgent',
        rating:1,
        email:"ramezsocials@gmail.com",
      })
    })
    const response = await res.json();
    console.log(response);
   }
  const router = useRouter();
  return (
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{
      duration:1
    }}
    class="h-full min-h-screen bg-[#050505]"
    >
    <Navbar />
    <br></br>
    <center>
    <ProfileCard />
    <br></br>
    <br></br>
    <button onClick={submitData}>Testing Data</button>
    <User />
    </center>
    <br></br>
    </motion.div>
  )
}

export default App
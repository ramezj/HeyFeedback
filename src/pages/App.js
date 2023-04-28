import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '../Components/Navbar';
import { useRouter } from 'next/router';
import ProfileCard from '../Components/ProfileCard';

const App = () => {
  const { data: session, status } = useSession({
    // Redirect User if Unauthenticated
    required:true,
    onUnauthenticated() {
      router.push('/')
    }
  })
  const router = useRouter();
  return (
    <div class="h-full min-h-screen bg-[#090909]">
    <Navbar />
    <br></br>
    <center>
    <ProfileCard />
    </center>
    </div>
  )
}

export default App
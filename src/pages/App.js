import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '../Components/Navbar';
import { router } from 'next/router';

const App = () => {
  const { data: session, status } = useSession()
  return (
    <div class="h-full min-h-screen bg-[#090909]">
    <Navbar />
    </div>
  )
}

export default App
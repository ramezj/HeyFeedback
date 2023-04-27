import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div class="h-full min-h-screen bg-[#090909]">
  <Navbar/>
    </div>
  )
}

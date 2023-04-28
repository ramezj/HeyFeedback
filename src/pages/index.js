import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "../Components/Navbar";
import Jumbotron from '@/Components/Jumbotron';
import { motion } from 'framer-motion';
import Badge from '../Components/Badge';

export default function Home() {
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
  <Navbar/>
  <br></br>
  <center>
  <div>
  <Badge text="Introducing HeyFeedback 1.0"/>
  </div>
  </center>
  <Jumbotron />
  <br></br>
  </motion.div>
  )
}

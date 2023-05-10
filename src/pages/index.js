import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState, useEffect, useRef } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "../Components/Navbar";
import Jumbotron from '@/Components/Jumbotron';
import { motion, useInView } from 'framer-motion';
import Features from '../Components/Features';
import SendFeedback from '../Components/SendFeedback';

export default function Home() {
  return (
    <motion.div 
    initial={{opacity: 0 }}
    animate={{opacity: 1 }}
    exit={{opacity: 0 }}
    transition={{
      duration:1
    }}
    className="h-full min-h-screen backgroundImg"
    >
  <Navbar/>
  <br></br>
  <center>
  </center>
  <Jumbotron />
  <Features />
  <br></br>
  <center>
  <SendFeedback />
  </center>
  <br></br>
  <br></br>
  </motion.div>
  )
}
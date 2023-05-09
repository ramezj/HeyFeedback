import React, { useState, useEffect } from 'react'
import { useSession, getSession, signIn, signOut } from "next-auth/react"
import Navbar from '../Components/Navbar';
import { useRouter } from 'next/router';
import ProfileCard from '../Components/App/ProfileCard';
import User from '../Components/App/User';
import { motion } from 'framer-motion';
import Layout from "../Components/App/Layout";

const App = ({ data }) => {
  const router = useRouter();
  const { data: session, status } = useSession({
    // Redirect User if Unauthenticated
    required:true,
    onUnauthenticated() {
      router.push('/')
    }
  })
   if (status == "authenticated") {
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
      <br></br>
      <br></br>
      <Layout />
      </center>
      <br></br>
      </motion.div>
    )
   }
}

export async function getServerSideProps(context) {
const session = await getSession(context);
  if(!session) {
    return {
      redirect: {
      destination: '/'
      }
    }
  } 
  return {
    props: {
      session,
      data:session
    }
  }
}

export default App
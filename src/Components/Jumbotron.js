import React from 'react';
import { motion } from "framer-motion"
import { signIn, signOut } from "next-auth/react"

const Jumbotron = () => {
return (
    <>
<section>
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-9xl bg-gradient-to-br from-white to-slate-300 inline-block text-transparent bg-clip-text">Taking <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-br from-indigo-500 to-indigo-800 relative inline-block">
    <span class="relative text-white ">Feedback</span>
  </span>Management to the Next Level</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <motion.button 
        whileHover={{
            scale:1.1
        }}
        onClick={() => {signIn("google", { callbackUrl: '/App' })}}
        type="button" className="font-extrabold text-xl flex items-center justify-center text-gray-900 bg-white shadow-lg shadow-indigo-500/60 px-20 py-4 tracking-wide capitalize transition-colors transform rounded-lg">
            🚀 Get Started 
            </motion.button>
        </div>
    </div>
</section>

    </>
)
}

export default Jumbotron;
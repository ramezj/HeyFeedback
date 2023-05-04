import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SendFeedback = () => {
    const [ send, setSend ] = useState("Send Feedback")
    const [ body, setBody ] = useState("test");
    const [ email, setEmail ] = useState("ramez@test.com");
    const [ rating, setRating ] = useState(1);
    const sendRequest = async () => {
        setSend("🚀 Sending Feedback");
        const res = await fetch('/api/receive?id=644c3ead88e5896ba0194013', {
            method:'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                body:body,
                rating:rating,
                email:email,
              })
          })
          const response = await res.json();
          if (response.ok == false) {
            setSend("😟 Woops..");
          }
          if (response.ok == true) {
            setSend("🎇 Sent!");
          }
    }
  return (
    <>
    <motion.div 
    whileHover={{
        scale:1.1
    }}
    className="w-full max-w-sm p-8 bg-form rounded-lg shadow-lg dark:bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c] dark:border-gray-700">
    <button 
    type="button" 
    className="shadow-md
    text-indigo-100 
    bg-indigo-600 
    focus:outline-none
    focus:ring-none 
    font-bold 
    rounded-lg 
    text-lg 
    px-14 py-3 
    text-center 
    mr-4 mt-4 
    hover:bg-indigo-500 
    duration-500"
    onClick={sendRequest}
    >
    {send}
    </button>
    </motion.div>
    </>
  )
}

export default SendFeedback
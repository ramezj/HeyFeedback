import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SendFeedback = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true});
    const [ send, setSend ] = useState("Send Feedback")
    const [ body, setBody ] = useState("");
    const [ email, setEmail ] = useState("");
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
    <motion.div 
    whileHover={{
        scale:1.1
    }}
    className="w-full max-w-sm p-8 bg-form rounded-lg shadow-lg dark:bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c] dark:border-gray-700">
    <h1 className="font-extrabold text-2xl">Tell us anything!</h1>
    <br></br>
    <input type="text" className="input border-none outline-none focus:border-none focus:outline-none bg-[#0c0c0c] w-full max-w-xs font-bold" 
    value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ali@Instatus.com'
    />
    <br></br><br></br>
    <textarea placeholder="We would love to hear your feedback" rows="3" className="textarea textarea-bordered textarea-sm w-full max-w-xs bg-[#0c0c0c] outline-none border-none font-bold focus:border-none focus:outline-none"
    value={body} onChange={(e) => setBody(e.target.value)}/>
    <br></br><br></br>
    <div className="space-x-4">
    <button className="shadow-lg shadow-yellow-500/50 rounded-3xl text-4xl">😊</button>
    <button className="shadow-lg shadow-yellow-500/50 rounded-3xl text-4xl">😊</button>
    <button className="shadow-lg shadow-yellow-500/50 rounded-3xl text-4xl">😊</button>
    <button className="shadow-lg shadow-yellow-500/50 rounded-3xl text-4xl">😊</button>
    <button className="shadow-lg shadow-yellow-500/50 rounded-3xl text-4xl">😊</button>
    </div>
    <br></br>
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
  )
}

export default SendFeedback
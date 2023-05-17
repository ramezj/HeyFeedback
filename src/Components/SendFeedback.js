import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SendFeedback = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once:true});
    const [ send, setSend ] = useState("Send")
    const [ loading, setLoading ] = useState(false);
    const [ body, setBody ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ rating, setRating ] = useState(1);
    const sendRequest = async () => {
        setLoading(true);
        setSend("Sending");
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
            setLoading(false);
            setSend("Woops..");
          }
          if (response.ok == true) {
            setLoading(false);
            setSend("🚀 Sent!");
          }
    }
  return (
    <motion.div 
    whileHover={{
        scale:1.1
    }}
    className="w-full max-w-md p-8 bg-form rounded-lg shadow-lg dark:bg-gradient-to-br from-[#1d1d1d] to-[#0c0c0c] dark:border-gray-700">
    <h1 className="font-extrabold text-2xl">Tell us anything</h1>
    <br></br>
    <input type="text" className="input border-none outline-none focus:border-none focus:outline-none bg-[#0c0c0c] w-full max-w-md font-bold" 
    value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ali@Instatus.com'
    />
    <br></br><br></br>
    <textarea placeholder="We would love to hear your feedback" rows="3" className="textarea textarea-bordered textarea-sm w-full max-w-md bg-[#0c0c0c] outline-none border-none font-bold focus:border-none focus:outline-none"
    value={body} onChange={(e) => setBody(e.target.value)}/>
    <br></br><br></br>
    <div className="space-x-4">
    <button className="shadow-lg rounded-3xl text-4xl">😊</button>
    <button className="shadow-lg rounded-3xl text-4xl">😊</button>
    <button className="shadow-lg rounded-3xl text-4xl">😊</button>
    <button className="shadow-lg rounded-3xl text-4xl">😊</button>
    <button className="shadow-lg rounded-3xl text-4xl">😊</button>
    </div>
    <br></br>
    <button onClick={sendRequest} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-lg font-bold px-14 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    {
      loading ? 
      <>
      <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
      </>
    : <>
    </>
    }
    {send}
</button>
    </motion.div>
  )
}

export default SendFeedback
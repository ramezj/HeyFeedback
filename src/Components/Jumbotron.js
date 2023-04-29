import React from 'react';
import { motion } from "framer-motion"

const Jumbotron = () => {
return (
    <>
<section>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">User Feedback Management at its Finest </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <button type="button" class="font-bold text-lg flex items-center justify-center text-gray-900 bg-white shadow-xl px-14 py-3 tracking-wide capitalize transition-colors transform rounded-lg">
            Get Started
            </button>
        </div>
    </div>
</section>

    </>
)
}

export default Jumbotron;
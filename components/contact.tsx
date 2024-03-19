'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

const Contact = () => {
    const { ref } = useSectionInView('Contact', 0.9)
    return (
        <motion.section id='contact'
            ref={ref}
            className='mb-20 sm:mb-28 w-[min(100%,38rem)]'
            initial={{
                opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }} >
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 text-center -mt-5'>Feel free to contact me directly or at this email: <a href="mailto:mohaiminul.sirat@gmail.com">mohaiminul.sirat@gmail.com</a>
                {" "} or through the form below: </p>
            <form className='mt-10 flex flex-col' action="">
                <input className='h-14 rounded-lg border border-black/10 px-4' type="email" placeholder='Your email' />
                <textarea className='h-52 my-3 rounded-lg border-black/10 p-4' placeholder='Your message' />
                <button className='group mx-auto h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
                flex items-center justify-center focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950' type='submit'>
                    Submit <FaPaperPlane className='text-xs opacity-70 transition-all
                    group-hover:translate-x-1 group-hover:-translate-y-1' />
                </button>
            </form>

        </motion.section>
    )
}

export default Contact
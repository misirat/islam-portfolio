'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import sendEmail from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

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
            <form
                className='mt-10 flex flex-col'
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData)
                    if (error) {
                        toast.error(error)
                        return
                    }
                    toast.success('Email sent successfully')
                }}>
                <input
                    name='senderEmail'
                    className='h-14 rounded-lg border border-black/10 px-4'
                    type="email"
                    placeholder='Your email'
                    maxLength={30}
                    required />
                <textarea
                    name='senderMessage'
                    className='h-52 my-3 rounded-lg border-black/10 p-4'
                    placeholder='Your message'
                    required
                    maxLength={1000} />
                <SubmitBtn />
            </form>

        </motion.section>
    )
}

export default Contact
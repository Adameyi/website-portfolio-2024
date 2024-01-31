"use client"

import React from 'react'
import SectHeading from './sect-heading'
import { motion } from 'framer-motion'
import { useSectInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import toast from "react-hot-toast";
import SubmitButton from './submit-button'

export default function Contact() {
    const { ref } = useSectInView('Contact');
    return (
        <motion.section
            ref={ref}
            id="contact"
            className='mb-22 sm:mb-30 w-[min(100%,36rem)]'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >   {/* If Screen width is too small, use 100% of the screen width instead of fixed rem*/}
            <SectHeading>Contact Me</SectHeading>
            <p className="text-gray-600 -mt-6 text-center dark:text-white/80">Feel free to contact me directly at <a className='underline' href="mailto:adameyileten2@gmail.com">adam.eyileten@gmail.com</a>{" "} or through this form.</p>
            <form
                className="mt-11 flex flex-col dark:text-black/80"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                
                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success('Email sent successfully!');
                }}>
                <input
                    name="senderEmail"
                    className=' px-4 rounded-lg borderBlack h-14 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' type="email" required={true} placeholder="Your Email" maxLength={100} />
                <textarea
                    name="message"
                    className='h-[10rem] my-4 rounded-lg borderBlack p-5 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' placeholder="Your Message" maxLength={500}></textarea>
                <SubmitButton />
            </form>
        </motion.section>
    )
}

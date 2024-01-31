"use client";
import React from 'react'
import Image from "next/image"
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa"
import { HiDownload } from "react-icons/hi"
import { motion } from "framer-motion"
import { useSectInView } from '@/lib/hooks';
import { useActiveSectContext } from '@/context/active-sect-context';

export default function Intro() {
    // const { ref, inView } = useInView({
    //     threshold: 0.4,
    // });
    // const { setActiveSection, timeOfLastClick  } = useActiveSectContext();

    // useEffect(() => {
    //     if (inView  && Date.now() - timeOfLastClick > 1000) {
    //         setActiveSection("Home");
    //     }
    // }, [inView, setActiveSection, timeOfLastClick])
    const { ref } = useSectInView('Home', 0.5);
    const {
        setActiveSection,
        setTimeOfLastClick, 
    }= useActiveSectContext();
    
    return (
        <section ref={ref} id="home" className='scroll-mt-30 mt-[-6.5rem] mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}>
                        <Image src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                            alt="Alper Portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full border-[0.4rem] border-white object-cover shadow-xl" />
                    </motion.div>
                    <motion.span className="absolute text-4xl bottom-0 right-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.5,
                            duration: 0.7,
                            stiffness: 110,
                        }}>
                        
                    </motion.span>
                </div>
            </div>
            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">
                    Hello! I am Adam.{" "}
                </span>
                    I am a passionate in creating and designing{" "}
                <span className="underline">
                    dynamic and interactive experiences
                </span>
                {" "}with a gallery of projects for showcasing{" "}
                <span className="italic">
                    innovative{" "}
                </span>
                cyber security and web applications.


            </motion.h1>

            <motion.div className="flex flex-col gap-2 px-4 sm:flex-row items-center justify-center text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link 
                className="group rounded-full bg-gray-900 text-white px-7 py-3 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer" href="#contact" 
                onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                }}> Contact me here
                    <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>
                <a className="rounded-full bg-white px-7 py-3 flex items-center gap-2 dark:bg-gray-600" href="/CV.pdf">
                    Download CV <HiDownload className='opacity-60 group-hover: translate-y-1 transition' />
                </a>

                <a className="group rounded-full bg-white text-gray-700 p-4 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-gray-600">
                    <BsLinkedin className='opacity-60 transition' />
                </a>
                <a className="group rounded-full bg-white text-gray-700 p-4 flex items-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-gray-600">
                    <FaGithubSquare className='opacity-60 transition'/>
                </a>
            </motion.div>
        </section>
    )
}

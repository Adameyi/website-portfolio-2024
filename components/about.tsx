"use client";

import React, { useEffect } from 'react'
import SectHeading from './sect-heading'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectContext } from "@/context/active-sect-context"
import { useSectInView } from '@/lib/hooks';

export default function About() {
    const {ref} = useSectInView('About');
    return (
        <motion.section ref={ref} id="about" className='scroll-mt-28 mt-40 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <SectHeading>About Me</SectHeading>
            <p className='mb-3'>
                I'm a passionate Full Stack Developer with a keen interest in building innovative and scalable web applications. With a solid foundation in both front-end and back-end technologies, I thrive in dynamic and collaborative environments where I can contribute my skills to create seamless and user-friendly digital experiences.
            </p>
            <p>
                Front-end: Proficient in HTML, CSS, JavaScript (React, Vue.js), and responsive design principles. I have a strong focus on creating intuitive and visually appealing user interfaces.

                Back-end: Experienced in server-side scripting and development using Node.js, Express, and Python (Django). Skilled in designing robust APIs and integrating third-party services.

                Database: Well-versed in database management systems including MySQL, PostgreSQL, and MongoDB. I design efficient database structures and optimize queries for enhanced performance.

                DevOps: Familiar with containerization (Docker) and orchestration (Kubernetes). Proficient in setting up CI/CD pipelines for automated testing and deployment.
            </p>
        </motion.section>
    )
}

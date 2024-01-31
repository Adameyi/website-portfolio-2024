"use client"

import React from 'react'
import SectHeading from './sect-heading'
import { skillsData } from "@/lib/data"
import { useSectInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariant = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index
            }
        }
    },
}

export default function Skills() {
    const { ref } = useSectInView('Skills');

    return (
        <section id='skills' ref={ref} className="max-w-[55rem] scroll-mt-30 text-center sm:mb-42">
            <SectHeading>My Skills</SectHeading>
            <ul className="gap-2 text-lg text-gray-700 flex flex-wrap justify-center">
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            className='border-black/[0.15] px-3 py-3 border bg-white dark:bg-white/20 dark:text-white/70'
                            key={index}
                            variants={fadeInAnimationVariant}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill.name}
                            <img src={skill.imageUrl} alt={skill.name} className="mt-2 w-16 h-16 object-fit mx-auto" />
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}

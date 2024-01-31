"use client";

import React, { useRef } from 'react'
import Image from "next/image"
import { webProjectsData } from '@/lib/data'
import { useScroll, motion, useTransform } from 'framer-motion';

type ProjectProps = (typeof webProjectsData)[number]

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.55, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className='group mb-3 sm:mb-8 last:mb-0'
        >
            <article className='relative bg-gray-200 max-w-[45rem] sm:w-[70rem] border-black/5 border overflow-hidden even:pl-10 hover:bg-gray-300 transition sm:pr-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
                <div className='px-5 pt-4 pb-8 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full group-even:ml-[18rem] sm:max-width-1/2 sm:mt-auto'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='w-[20rem] mt-2 text-xs leading-relaxed text-gray-800 dark:text-white/70'>{description}</p>
                    <div className='flex flex-wrap mt-4 gap-2 max-w-[25rem] dark:text-white/70'>
                        {tags.map((tag, index) => (
                            <div
                                className='bg-black/[0.6] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full'
                                key={index}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <Image
                    className='absolute top-8 -right-40 w-[18rem] rounded-t-lg shadow-2xl md:w-[28rem] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:scale-[1.1] group-hover:-rotate-3  group-even:group-hover:translate-x-3 group-even:group-hover:translatey-3 group-even:group-hover:rotate-3 transition group-even:right-[initial] group-even:-left-40'
                    src={imageUrl}
                    alt='My Completed Projects'
                    quality={92}
                />
            </article>
        </motion.div>
    );
}
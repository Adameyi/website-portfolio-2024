"use client"

import React, { useContext } from 'react'
import SectHeading from './sect-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data';
import { useSectInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
    const { ref } = useSectInView('Experience');
    const theme = 'dark'

    return (
        <section ref={ref} id="experience" className='mb-28 mt-20 scroll-mt-28 sm:mb-40'>
            <SectHeading>My Experience</SectHeading>
            <VerticalTimeline lineColor="">
                {
                    experiencesData.map((experienceItem, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                visible={true}
                                contentStyle ={{
                                    background: theme === 'dark' ? "rgba(255,255,255,0.1)" : "#f3f5f7",
                                    boxShadow: "none",
                                    border: "2px solid rgba(0, 0, 0, 0.06)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem"
                                }}
                                 contentArrowStyle= {{
                                    borderRight:"0.5rem solid #9CA3AF"
                                 }}
                                 date={experienceItem.date}
                                 icon={experienceItem.icon}
                                 iconStyle={{
                                    background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : '#fff',
                                    fontSize:"1.4rem",
                                 }}
                            >
                                <h3 className='font-semibold capitalize'>{experienceItem.title}</h3>
                                <p className='font-normal !mt-0 dark:text-white/80'>{experienceItem.location}</p>
                                <p className='font-nirmal !mt-1 text-gray-700'>{experienceItem.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    )
}


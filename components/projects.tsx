"use client";

import React, { useEffect } from 'react'
import Project from './project'
import SectHeading from './sect-heading'
import { webProjectsData } from '@/lib/data';
import { useSectInView } from '@/lib/hooks';

export default function Projects() {
    const {ref} = useSectInView('Projects', 0.4);
    
    return (
        < section ref={ref} id="projects" className='mb-30 scroll-mt-28' >
            <SectHeading>My Projects</SectHeading>
            <div>
                {
                    webProjectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section >
    )
}

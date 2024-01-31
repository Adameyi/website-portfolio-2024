import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectContext } from '@/context/active-sect-context';
import type { SectionName } from "./types";

type useSectInViewProps = {
    sectionName: SectionName;
}

export function useSectInView(sectionName: SectionName, threshold = 0.7) { //Default Threshold value: 0.7
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, sectionName, setActiveSection, timeOfLastClick])

    return {
        ref, 
    };
}
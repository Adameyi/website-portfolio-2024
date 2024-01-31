"use client";

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react';

type ActiveSectContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectContextProvider({children}:ActiveSectContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); //Required for tracking in case observer is disabled when nav link is clicked by user. 

    return (<ActiveSectionContext.Provider value={{
        activeSection, 
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
    }}>{children}</ActiveSectionContext.Provider>);
};

export function useActiveSectContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        return { activeSection: 'default', setActiveSection: () => {}, timeOfLastClick: 0, setTimeOfLastClick: () => {} };
    }

    if ('timeOfLastClick' in context) {
        // The context is of type ActiveSectionContextType
        const { activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick } = context;

        return { activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick };
    }

    // Fallback for the case where context is not exactly of type ActiveSectionContextType
    return context;
}

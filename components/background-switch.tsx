"use client"

import { useTheme } from '@/context/theme-context';
import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function BackgroundSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className='fixed bottom-5 right-5 bg-white w-[4rem] h-4[rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-1.20] active:scale-110 transition-all dark:bg-gray-900'
            onClick={toggleTheme}
        >
            {
                theme === "dark" ? <BsMoon /> : <BsSun />
            }
        </button>
    )
}

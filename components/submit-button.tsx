
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom"

export default function SubmitButton() {
    const { pending } = useFormStatus();
    
    return (
        <button type='submit'
            className='flex items-center justify-center group gap-3 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-850 h-[3rem] w-[10rem] text-white rounded-full outline-none transition-all bg-gray-800 disabled:scale-100 disabled:bg-opacity-60 dark:bg-white dark:bg-opacity-10' disabled={pending}>
            {
                pending ? (<div className='rounded-full border-b-2 h-4 w-4 animate-spin'></div>) : (
                    <>
                        Submit
                        <FaPaperPlane
                            className='text-xs opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />{" "}
                    </>
                )
            }

        </button>
    )
}

import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-gray-400 text-center'>
        <small className='mb-2 block text-xs'>
            &copy; 2024 Adam. All rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>
                About this website:
            </span>
                Built with React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resent, Vercel Hosting.
        </p>
    </footer>
  )
}

import React from 'react'

const Footer = () => {
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='mb-2 block text-xs'>
                &copy; {new Date().getFullYear()}{" "}Md Mohaiminul Islam. All rights reserved.
            </small>
            <p>
                This site is built with{" "}<a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js,</a>{" "}React, TypeScript, Tailwind CSS, Framer Motion, Server Action, and hosted on <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>.
            </p>
        </footer>
    )
}

export default Footer
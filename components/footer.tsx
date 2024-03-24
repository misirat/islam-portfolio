import React from 'react'

const Footer = () => {
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='mb-2 block text-xs'>
                &copy; {new Date().getFullYear()} Mohaiminul Islam. All rights reserved.
            </small>
            <p>
                Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a> and hosted on <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>.
            </p>
        </footer>
    )
}

export default Footer
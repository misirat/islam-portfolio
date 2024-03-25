'use client'

import ThemeContextProvider, { useTheme } from '@/context/theme-content'
import { BsMoon, BsSun } from 'react-icons/bs'


const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button className='fixed top-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 
        backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
        hover:scale-110 active:scale-105 transition-all dark:bg-gray-950 dark:bg-opacity-80'
            onClick={toggleTheme}>
            {theme === "light" ? <BsMoon /> : <BsSun />}
        </button>
    )
}

export default ThemeSwitch
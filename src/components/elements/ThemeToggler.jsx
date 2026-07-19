import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import MoonIcon from '../elements/icons/MoonIcon';
import SunIcon from '../elements/icons/SunIcon';

const ThemeToggler = () => {
    
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            type='button'
            onClick={toggleTheme}
            className='w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-stone-900/10 dark:shadow-yellow-500/5 border-transparent bg-white dark:bg-stone-900 dark:text-stone-100 border- dark:border-stone-950 cursor-pointer transition-colors duration-200'
        >
            {theme === 'light' ? <MoonIcon className={`w-5 h-5 text-stone-700`} /> : <SunIcon className={`w-5 h-5 text-yellow-400`} />}
        </button>
    )
}

export default ThemeToggler
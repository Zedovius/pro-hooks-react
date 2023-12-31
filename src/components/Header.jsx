import React, { useState } from 'react'

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode)
    };

  return (
    <div className='Header'>
        <h1>React Hooks Pro</h1>
        <button 
            type='button'
            onClick={handleClick}
        >{darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
    </div>
  )
}

export  { Header };
import './Styles/Switcher.css'
import React, { useState } from 'react';

const ThemeSwitcher = ({light= 'light-mode', dark= 'dark-mode'}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div style={{width: '400px', height: '100px', alignItems: 'center'}} className={isDarkMode ? dark : light}>
            <button style={{backgroundColor: 'purple'}} onClick={handleToggleTheme}>
                {isDarkMode ? light : dark}
            </button>
        </div>
    );
};

export default ThemeSwitcher;
import React, { useState } from 'react';

const LanguageSwitcher = ({es = 'Español', en = 'English', color = 'green'}) => {
    const [language, setLanguage] = useState('es');

    const handleLanguageChange = () => {
        const newLanguage = language === 'es' ? 'en' : 'es';
        setLanguage(newLanguage);
    };

    return (
        <button style={{backgroundColor: color}} onClick={handleLanguageChange}>
            {language === 'es' ? en : es}
        </button>
    );
};

export default LanguageSwitcher;
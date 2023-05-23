import React, { useState } from 'react';

const FontSizeSelector = ({ s = 'Small', m = 'Medium', l = 'Large', color = 'grey' }) => {
    const [fontSize, setFontSize] = useState(16);

    const handleFontSizeChange = (size) => {
        setFontSize(size);
    };

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button style={{background: color}} onClick={() => handleFontSizeChange(16)}>{s}</button>
                <button style={{background: color}} onClick={() => handleFontSizeChange(24)}>{m}</button>
                <button style={{background: color}} onClick={() => handleFontSizeChange(30)}>{l}</button>
            </div>
            <p style={{ fontSize: `${fontSize}px` }}>BOOTCAMP</p>
        </div>
    );
};

export default FontSizeSelector;
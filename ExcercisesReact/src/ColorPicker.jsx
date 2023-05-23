import React, { useState } from 'react';

const ColorPicker = ({ colorRed = 'red', colorBlue = 'blue', colorGreen = 'green' }) => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button style={{backgroundColor: colorRed}} onClick={() => handleColorChange(colorRed)}>RED</button>
                <button onClick={() => handleColorChange(colorBlue)}>BLUE</button>
                <button style={{backgroundColor: colorGreen}} onClick={() => handleColorChange(colorGreen)}>GREEN</button>
            </div>
            <div style={{ backgroundColor: selectedColor, width: '200px', height: '200px', marginTop: '30px' }}></div>
        </div>
    );
};

export default ColorPicker;
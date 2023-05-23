import React, { useState } from 'react';

const NumberSelector = ({ one = 1, two = 2, three = 3, color = 'brown' }) => {
    const [selectedNumber, setSelectedNumber] = useState(0);

    const handleNumberChange = (number) => {
        setSelectedNumber(number);
    };

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button style={{backgroundColor: color}} onClick={() => handleNumberChange(1)}>{one}</button>
                <button style={{backgroundColor: color}} onClick={() => handleNumberChange(2)}>{two}</button>
                <button style={{backgroundColor: color}} onClick={() => handleNumberChange(3)}>{three}</button>
            </div>
            <p>Selected Number: {selectedNumber}</p>
        </div>
    );
};

export default NumberSelector;
import React, { useState } from 'react';

const Counter = ({ up = 'Increase', down = 'Decrease' }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <button onClick={handleDecrement}>{down}</button>
                <button onClick={handleIncrement}>{up}</button>
            </div>
            <p>Counter: {count}</p>
        </div>
    );
};

export default Counter;
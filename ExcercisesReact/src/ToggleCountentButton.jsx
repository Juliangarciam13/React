import React, { useState } from 'react';

const ToggleContentButton = ({hide = 'Hide Content', show = 'Show Content', text = 'Hello'}) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleToggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <div>
            <button onClick={handleToggleContent}>
                {isContentVisible ? hide : show}
            </button>
            {isContentVisible && <p>{text}</p>}
        </div>
    );
};

export default ToggleContentButton;
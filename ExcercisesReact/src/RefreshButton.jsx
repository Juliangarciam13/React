import React from 'react';

const RefreshButton = ({text = 'Refresh', color = 'purple'}) => {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <button style={{backgroundColor: color, width: '250px', height: '100px'}} onClick={handleRefresh}>{text}</button>
    );
};

export default RefreshButton;
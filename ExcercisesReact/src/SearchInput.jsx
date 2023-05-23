import React, { useState } from 'react';

const SearchInput = ({text = 'Search', type = 'text'}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        alert('Searching')
    };

    return (
        <div>
            <input style={{width: '200%'}} type={type} value={searchQuery} onChange={handleInputChange} />
            <button onClick={handleSearch}>{text}</button>
        </div>
    );
};

export default SearchInput;
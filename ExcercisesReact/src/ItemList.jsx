import React, { useState } from 'react';

const ItemList = ({text = 'Delete', color = 'orange'}) => {
    const [items, setItems] = useState(['Element 1', 'Element 2', 'Element 3']);

    const handleRemoveItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <ul style={{listStyle: 'none'}}>
            {items.map((item, index) => (
                <li style={{fontSize: '30px'}} key={index}>
                    {item}
                    <button style={{backgroundColor: color, fontSize: '20px'}} onClick={() => handleRemoveItem(index)}>{text}</button>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
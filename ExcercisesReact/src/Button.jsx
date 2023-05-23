import './Styles/Button.css';
import { useState } from 'react';
import HatchbackCars from './HatchbackCars';
import SportCars from './SportCars';
import SuvCars from './SuvCars';
import PickupCars from './PickupCars';

const texts = [
    {
        text: 'HATCHBACK',
        component: <HatchbackCars />
    },
    {
        text: 'SUV',
        component: <SuvCars />
    },
    {
        text: 'PICKUP',
        component: <PickupCars />
    },
    {
        text: 'SPORTS',
        component: <SportCars />
    }
];


const Button = ({ color = '#B82D2D' }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className="buttonContainer" style={{marginBottom: '20px'}}>
            <div className="buttonsRow" style={{ display: 'flex', flexDirection: 'row' }}>
                {texts.map((item, index) => (
                    <button
                        key={index}
                        style={{ backgroundColor: color }}
                        onClick={() => handleClick(item.component)}
                    >
                        {item.text}
                    </button>
                ))}
            </div>
            <div className="cardsColumn" style={{ display: 'flex', flexDirection: 'column' }}>
                {selectedComponent}
            </div>
        </div>
    );
};


export default Button;

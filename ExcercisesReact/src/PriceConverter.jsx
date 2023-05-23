import { useState } from 'react';

const PriceConverter = ({ priceInEuros }) => {
    const [convertedPrice, setConvertedPrice] = useState(null);

    const convertToColombianPesos = () => {
        
        const exchangeRate = 4900;
        const converted = priceInEuros * exchangeRate;
        setConvertedPrice(converted);
    };

    return (
        <div>
            <button style={{backgroundColor: '#B82D2D'}} className="convert" onClick={convertToColombianPesos}>
                Convert to COP
            </button>
            {convertedPrice && <p>Price In COP: {convertedPrice}</p>}
        </div>
    );
};

export default PriceConverter;
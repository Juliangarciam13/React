import './Styles/Card.css';
import PriceConverter from './PriceConverter';

const CardCar = ({ name = 'Volkswagen golf gti mk7', content = '2.0 TSI 220 CV', img = 'https://i.pinimg.com/originals/e2/23/df/e223df383e1b675373645d0474d8b8bb.png', price = 54000}) => {
    return (
        <div className="card">
            <h1>{name}</h1>
            <img id='imageCar' src={img} alt={name}/>
            <p>Specifications: {content}</p>
            <p>Price In Eur: {price}</p>
            <PriceConverter priceInEuros={price} />
        </div>
    )
};

export default CardCar;
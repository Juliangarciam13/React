import './Styles/Card.css';
import CardCar from './CardCar';

const sportCars = [
    {
        name: 'BMW I8',
        content: 'Hibrido 374 CV',
        img: 'https://static.motor.es/fotos-noticias/2017/11/nuevo-bmw-i8-201741708_1.jpg',
        price: 146000
    },
    {
        name: 'Jaguar F-Type',
        content: 'V6 3.0 SC 550 CV',
        img: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Jaguar/F-TYPE/7810/1675671305429/front-left-side-47.jpg',
        price: 150000
    },
    {
        name: 'Mercedes Benz AMG Gt',
        content: 'V8 4.0 L 730 CV',
        img: 'https://imgr1.auto-motor-und-sport.de/Mercedes-AMG-GT-Black-Series-169FullWidth-fae4ee2c-1704780.jpg',
        price: 140000
    },
];

const SportCars = () => {
    return (
        <div>
            {sportCars.map((car, index) => (
                <CardCar
                    key={index}
                    name={car.name}
                    content={car.content}
                    img={car.img}
                    price={car.price}
                />
            ))}
        </div>
    );
};

export default SportCars;
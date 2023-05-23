import './Styles/Card.css';
import CardCar from './CardCar';

const suvCars = [
    {
        name: 'Chevrolet Blazer RS',
        content: 'V6 3.6 L 308 HP',
        img: 'https://www.tuningblog.eu/wp-content/uploads/2021/03/Chevrolet-Blazer-Lingenfelter-Performance-Tuning-5.jpg',
        price: 52000
    },
    {
        name: 'BMW X6 M40I',
        content: 'V6 3.0 L TP 340 HP',
        img: 'https://www.diariomotor.com/imagenes/picscache/750x/manhart_bmw_x6_m_1_750x.jpg',
        price: 100000
    },
    {
        name: 'Audi Q8 RS',
        content: 'V8 4.0 L 600 HP',
        img: 'https://cdn.motor1.com/images/mgl/G33ZZ1/s1/4x3/audi-rs-q8-signature-edition-by-abt.webp',
        price: 156000
    },
];

const SuvCars = () => {
    return (
        <div>
            {suvCars.map((car, index) => (
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

export default SuvCars;


import CardCar from './CardCar';

const hatchbackCars = [
    {
        name: 'Volkswagen golf gti mk7',
        content: '2.0 TSI 245 CV',
        img: 'https://i.pinimg.com/originals/e2/23/df/e223df383e1b675373645d0474d8b8bb.png',
        price: 54000
    },
    {
        name: 'Mercedes Benz A45 AMG',
        content: '2.0 T 416 HP',
        img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2019/07/20190704-MERCEDES-AMG-A-45-4MATIC-01.jpg',
        price: 63000
    },
    {
        name: 'Audi RS3',
        content: '2.5 TFSI 400 HP',
        img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/06/02062022-PORTADA-MANHART-RS3-500.jpg',
        price: 75000
    },
];

const HatchbackCars = () => {
    return (
        <div>
            {hatchbackCars.map((car, index) => (
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

export default HatchbackCars;
import CardCar from './CardCar';

const pickupCars = [
    {
        name: 'Ford Ranger Raptor',
        content: '2.0 L 213 HP 4x4',
        img: 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/6SYH3DWXWFAILIYLHBLHMBMTZY.jpeg',
        price: 80000
    },
    {
        name: 'Toyota Hilux TRD Pro',
        content: '2.8 L  204 CV 4x4',
        img: 'https://www.clarin.com/img/2022/05/23/czxQRSdEt_2000x1500__1.jpg',
        price: 75000
    },
    {
        name: 'Nissan Frontier Pro 4x',
        content: '2.5 L 166 HP 4x4',
        img: 'https://www.nissan-cdn.net/content/dam/Nissan/mexico/vehicles/frontier/MY21/VLP/PRO4X/Mosaico/Mosaico-16-9-1d.jpg.ximg.l_full_m.smart.jpg',
        price: 72000
    },
];

const PickupCars = () => {
    return (
        <div>
            {pickupCars.map((car, index) => (
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

export default PickupCars;
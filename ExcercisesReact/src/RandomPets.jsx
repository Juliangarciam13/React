const pets = [
    {
        name: 'Apolo',
        src: require('./Media/Pets/husky.jpeg')
    },
    {
        name: 'Ares',
        src: require('./Media/Pets/persa.jpeg')
    },
    {
        name: 'Milo',
        src: require('./Media/Pets/siames.jpeg')
    }
]

const RandomPets = ({race='', age=''}) => {
    const randomIndex = Math.floor(Math.random() * pets.length);
    const randomPet = pets[randomIndex];

    if (randomPet.name === 'Apolo') {
        race = 'Husky Siberian';
        age = 6;
    } else if (randomPet.name === 'Milo') {
        race = 'Siames';
        age = 9;
    } else if (randomPet.name === 'Ares') {
        race = 'Persa';
        age = 4;
    }

    return (
        <div className='cardPets' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>{randomPet.name}</h1>
            <img style = {{width: '100px', height: '120px'}}id='imagePets' src={randomPet.src} alt={randomPet.name}/>
            <p>
                Race: {race}
            </p>
            <p>
                Age: {age}
            </p>
        </div>
    )
}

export default RandomPets;
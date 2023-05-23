import carVideo from './Media/Cars/carVideo.mp4';
import Button from './Button';

const Cars = () => {
    return (
        <div>
            <video autoPlay muted loop style={{ width: '100%', margin: '0' }}>
                <source src={carVideo} type='video/mp4' />
            </video>
            <h1>CAR CATEGORIES</h1>
            <div style={{marginTop: '0px'}} className='buttonContainer'>
                <Button/>
            </div>
        </div>
    )
}

export default Cars;
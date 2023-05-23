import './Styles/Milo.css';

const Milo = ( {src = require('./Media/Pets/siames.jpeg'), alt = 'Milo', size = '150px'} ) => {
    return (
        <div style = {{ display : 'flex',justifyContent : 'center', marginTop : '100px'}}>
            <h1 style={{fontSize: '50px'}} className='miloTitle'>{alt}</h1>
            <img src = {src} alt = {alt} style = {{width : size, height : '200px'}} className='imgMilo'/>
        </div>
    )
}

export default Milo;
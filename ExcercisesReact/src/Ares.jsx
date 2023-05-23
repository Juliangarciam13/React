import './Styles/Ares.css';

const Ares = ( {src = require('./Media/Pets/persa.jpeg'), alt = 'Ares', size = '150px'} ) => {
    return (
        <div style = {{ display : 'flex',justifyContent : 'center', marginTop : '100px'}}>
            <h1 style={{fontSize: '50px'}} className='aresTitle'>{alt}</h1>
            <img src = {src} alt = {alt} style = {{width : size, height : '200px'}} className='imgAres'/>
        </div>
    )
}

export default Ares;
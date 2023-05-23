import './Styles/Apolo.css';

const Apolo = ( {src = require('./Media/Pets/husky.jpeg'), alt = 'Apolo', size = '150px'} ) => {
    return (
        <div style = {{ display : 'flex',justifyContent : 'center', marginTop : '100px'}}>
            <h1 style={{fontSize: '50px'}} className='apoloTitle'>{alt}</h1>
            <img src = {src} alt = {alt} style = {{width : size, height : '200px'}} className='imgApolo'/>
        </div>
    )
}

export default Apolo;
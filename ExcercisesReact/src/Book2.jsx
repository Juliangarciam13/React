const Book2 = ({ title = 'Ciudades de Papel', author = 'John Green', isPublished = true }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            {isPublished ? <img src='https://images.cdn1.buscalibre.com/fit-in/360x360/02/e2/02e26163f010a6cde56702c652688bd2.jpg' style = {{width: '300px', height : '300px'}}/> : <p>Not published</p>}
        </div>
    );
};

export default Book2;
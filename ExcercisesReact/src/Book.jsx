const Book = ({ title = 'El Mundo es tuyo pero tienes que ganartelo', author = 'kim Woo-jung', isPublished = true }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            {isPublished ? <img src='https://0.academia-photos.com/attachment_thumbnails/37277860/mini_magick20180815-30823-53k4uu.png?1534366466' style = {{width: '300px', height : '300px'}}/> : <p>Not published</p>}
        </div>
    );
};

export default Book;
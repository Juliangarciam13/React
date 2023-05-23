import './Styles/LinkOpenLibrary.css';
const LinkOpenLibrary = ({ url = 'https://openlibrary.org/', text = 'OPEN LIBRARY'}) => {
    return (
        <div className='button'>
            <button style={{width: '400px', height: '100px'}} className="LinkOpenLibrary">
                <a href = {url} >
                    {text}
                </a>
            </button>
        </div>
    )
}

export default LinkOpenLibrary;
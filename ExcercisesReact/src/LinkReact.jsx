import './Styles/LinkReact.css';
const LinkReact = ({ url = 'https://react.dev/', text = 'REACT'}) => {
    return (
        <div className='Button'>
            <button className="LinkReact">
                <a href = {url} rel='Link React'>
                    {text}
                </a>
            </button>
        </div>
    )
}

export default LinkReact;
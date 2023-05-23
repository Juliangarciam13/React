const links = [
    {
        name: 'Netflix',
        url: 'https://www.netflix.com/co/'
    },
    {
        name: 'Amazon Prime',
        url: 'https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root'
    },
    {
        name: 'Star Plus',
        url: 'https://www.starplus.com/es-co'
    }
]
const LinksStreaming = () => {
    const handleLinkClick = (url) => {
        window.open(url);
    };

    return (
        <div className='Button' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <button className="LinkNetflix" onClick={() => handleLinkClick(links[0].url)}>
                {links[0].name}
            </button>
            <button className="LinkAmazonPrime" onClick={() => handleLinkClick(links[1].url)}>
                {links[1].name}
            </button>
            <button className="LinkStarPlus" onClick={() => handleLinkClick(links[2].url)}>
                {links[2].name}
            </button>
        </div>
    )
}

export default LinksStreaming;
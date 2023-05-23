const icons = {
    gitHub: require('./Media/Profile/Github.png'),
    facebook: require('./Media/Profile/Facebook.png'),
    instagram: require('./Media/Profile/Instagram.png'),
    linkedIn: require('./Media/Profile/LinkedIn.png'),
};

const Icons = ({ target = '_blank', rel = 'noopener noreferrer' }) => {
    return (
        <div className='icons' style={{ display: 'flex', flexDirection: 'row' }}>
            <a href='https://github.com/Juliangarciam13' target={target} rel={rel} className="iconLink">
                <img src={icons.gitHub} alt="GitHub" />
            </a>
            <a href='https://www.facebook.com/julianandresgm?mibextid=LQQJ4d' target={target} rel={rel} className="iconLink">
                <img src={icons.facebook} alt="Facebook" />
            </a>
            <a href='https://instagram.com/jgm_0813?igshid=NTc4MTIwNjQ2YQ==' target={target} rel={rel} className="iconLink">
                <img src={icons.instagram} alt="Instagram" />
            </a>
            <a href='https://www.linkedin.com/in/julian-garcia-b644671a3' target={target} rel={rel} className="iconLink">
                <img src={icons.linkedIn} alt="LinkedIn" />
            </a>
        </div>
    );
};

export default Icons;
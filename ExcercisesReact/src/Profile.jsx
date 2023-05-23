import './Styles/Profile.css';
import videoIntro from './Media/Profile/videoIntro.mp4';
import Icons from './Icons';
import Menu from './Menu';
import Cars from './Cars';
import Streaming from './Streaming';
import Book from './Book';

const Profile = ({img = require('./Media/Profile.JPG'), age = '25', email = 'juliangarciam13@hotmail.com'}) => {

    const items = [{
        item: 'PROFILE',
        component: <Profile />
    },
    { 
        item: 'CARS' ,
        component: <Cars />
    },
    { 
        item: 'STREAMING',
        component: <Streaming />
    },
    { 
        item: 'BUTTONS',
        component: <Book />
    }]

    

    return (
        <div className='profileContainer'>
            <div>
                <Menu items={items}/>
            </div>
            <div className='videoContainer'>
            <video autoPlay muted loop>
                    <source src={videoIntro} type='video/mp4' />
            </video>
            </div>
            <img className='imgProfile' src={img} alt='Julian Garcia' style={{ width: '300px', height: '400px', marginTop: '40px' }} />
            <p>
                Age: {age}
            </p>
            <p>
                Email: {email}
            </p>
            <div>
                <Icons/>
            </div>
        </div>
    )
}

export default Profile;
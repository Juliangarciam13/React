import Apolo from './Apolo';
import Ares from './Ares';
import Batman from './Batman';
import Book from './Book';
import Book2 from './Book2';
import Event from './Event';
import LinkOpenLibrary from './LinkOpenLibrary';
import Milo from './Milo';
import Profile from './Profile';
import RandomPets from './RandomPets';
import Cars from './Cars';
import Streaming from './Streaming';
import Buttons from './Buttons';

const App = () => {
    return (
        <div className='container'>
            <div className='profile'>
                <Profile />
            </div>
            <div className='carSale'>
                <Cars />
            </div>
            <div className='streaming'>
                <Streaming />
            </div>
            <div className='buttons'>
                <Buttons />
            </div>
            <div className='pets'>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Apolo />
                    <Ares />
                    <Milo />
                </div>
                <RandomPets />
            </div>
            <div className='books'>
                <Book />
                <Book2 />
                <LinkOpenLibrary />
            </div>
            <div className='superheroes'>
                <Batman />
                <Event />
            </div>
        </div>
    )
}

export default App;
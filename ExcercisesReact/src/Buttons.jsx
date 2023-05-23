import FavoriteButton from './FavoriteButton';
import LikeButton from './LikeButton';
import ThemeSwitcher from './ThemeSwitcher';
import ToggleContentButton from './ToggleCountentButton';
import Counter from './Counter';
import SearchInput from './SearchInput';
import ItemList from './ItemList';
import LanguageSwitcher from './LenguageSwitcher';
import ColorPicker from './ColorPicker';
import FontSizeSelector from './FontSizeSelector';
import NumberSelector from './NumberSelector';
import RefreshButton from './RefreshButton';
import PlayPauseButton from './PlayPauseButton';
import buttonVideo from './Media/Buttons/Buttons.mp4';
import './Styles/Buttons.css'

const Buttons = ({ src =  buttonVideo , type = 'video/mp4'}) => {
    return (
        <div className='buttons'>
            <video autoPlay muted loop style={{ width: '100%', margin: '0' }}>
                <source src={src} type={type} />
            </video>
            <h1>BUTTONS</h1>
            <div className='playPause'>
                <PlayPauseButton />
                <FavoriteButton />
            </div>
            <div className='likeButton'>
                <LikeButton />
            </div>
            <div className='Switcher'>
                <ThemeSwitcher />
                <ToggleContentButton />
            </div>
            <div className='counter'>
                <Counter />
                <SearchInput />
                <ItemList />
            </div>
            <div className='selector'>
                <LanguageSwitcher />
                <ColorPicker />
                <FontSizeSelector />
                <NumberSelector />
            </div>
            <div className='refresh'>
            <RefreshButton />
            </div>
        </div>
    )
}

export default Buttons;
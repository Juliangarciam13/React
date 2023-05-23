import './Styles/Menu.css'

const Menu = ({ items }) => {

    const handleItemClick = (event, component) => {
        event.preventDefault();
        window.location.href = `/${component.item.toLowerCase()}`;
    };
    
    return (
        <div className="menu">
            <ul className="menuList">
                {items.map((item, index) => (
                    <li key={index} className="menuItem">
                        <a href={`/${item.item.toLowerCase()}`} onClick={(event) => handleItemClick(event, item)}>
                            {item.item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
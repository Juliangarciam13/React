const Event = ({ title = 'Programmers day', date = 'September 13th', img = 'https://e1.pxfuel.com/desktop-wallpaper/88/629/desktop-wallpaper-hackerman-posted-by-ryan-anderson-hackerman.jpg' }) => {
    return (
        <div>
            {date === 'September 13th' ? (
                <div style={{ display: 'flex', flexDirection : 'column' ,alignItems : 'center' }}>
                    <h2 style = {{textAlign : 'center'}}>{title}</h2>
                    <img style = {{width : '400px', height : '400px'}} src={img} alt="Programmers day" />
                </div>
            ) : (
                <h2 style={{textAlign: 'center'}}>NO PROGRAMMERS DAY</h2>
            )}
        </div>
    )
}

export default Event;
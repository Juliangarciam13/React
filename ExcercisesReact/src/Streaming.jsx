import streamingVideo from './Media/Streaming/streaming.mp4';
import StreamingButton from './ButtonStreaming';

const Streaming = ({title = 'STREAMING SERVICES'}) => {

    return (
        <div>
            <video autoPlay muted loop style={{ width: '100%', margin: '0' }}>
                <source src={streamingVideo} type='video/mp4' />
            </video>
            <h1> 
                {title}
            </h1>
            <div style={{marginTop: '0px'}} className='buttonContainer'>
                <StreamingButton />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Streaming;
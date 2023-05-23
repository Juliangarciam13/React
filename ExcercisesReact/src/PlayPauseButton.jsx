import React, { useState } from 'react';

const PlayPauseButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleToggleVideo = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            {!isPlaying ? (
                <button onClick={handleToggleVideo}>Show Video</button>
            ) : (
                <div>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/BuhF5WEO8CE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <button onClick={handleToggleVideo}>Hide Video</button>
                </div>
            )}
        </div>
    );
};

export default PlayPauseButton;
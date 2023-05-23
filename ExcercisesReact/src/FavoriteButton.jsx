import React, { useState } from 'react';

const FavoriteButton = ({favorite = 'Add to Favorites', removeFavorite = 'Remove from Favorites'}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <button onClick={handleToggleFavorite}>
            {isFavorite ? removeFavorite : favorite}
        </button>
    );
};

export default FavoriteButton;
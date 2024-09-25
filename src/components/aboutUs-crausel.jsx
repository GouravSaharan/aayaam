import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia } from '@mui/material';

const Carousel = ({ cards }) => {
    const [isPaused, setIsPaused] = useState(false);

    const carouselStyle = {
        overflow: 'hidden',
        width: '100%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        cursor: isPaused ? 'pointer' : 'auto',
    };

    const carouselTrackStyle = {
        display: 'flex',
        animation: 'scroll 15s linear infinite',
        animationPlayState: isPaused ? 'paused' : 'running',
    };

    const carouselCardStyle = {
        minWidth: '320px',
        margin: '0 10px',
        textAlign: 'center',
        borderRadius: '8px',
        backgroundColor: '#f5f5f5',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform 0.3s ease',
    };

    const overlayStyle = {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '80px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: '#fff',
        padding: '10px 0',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const cardMediaStyle = {
        height: '200px',
        objectFit: 'cover',
        filter: 'brightness(70%)',
    };

    const handleMouseOver = () => {
        setIsPaused(true);
    };

    const handleMouseOut = () => {
        setIsPaused(false);
    };

    return (
        <Box sx={carouselStyle}>
            <Box sx={carouselTrackStyle}>
                {cards.concat(cards).map((card, index) => (
                    <Card
                        key={index}
                        sx={carouselCardStyle}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <CardMedia
                            component="img"
                            image={card.img}
                            alt={card.name}
                            sx={cardMediaStyle}
                        />
                        <Box sx={overlayStyle}>
                            <Typography variant="h6">{card.name}</Typography>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Carousel;

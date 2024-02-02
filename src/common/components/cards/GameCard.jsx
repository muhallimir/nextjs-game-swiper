import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Theme from 'src/styles/theme';

export default function GameCard({ game, styles }) {
    const { card, cardImage, title: { wrapper, icon, text } } = styles;

    return (
        <Box
            key={game._id}
            sx={card}
        >
            <Box
                component="img"
                alt={game.name}
                src={
                    Theme.breakpoints.down('sm')
                        ? game.image_sm
                        : game.image_md
                }
                sx={cardImage}
            />
            <Box sx={wrapper}>
                <Box component="img" alt={game.name} src={game.icon} width={icon.width} height={icon.height} />
                <Typography variant='body2' sx={text}>
                    {game.name}
                </Typography>
            </Box>
        </Box>
    );
}

GameCard.propTypes = {
    game: PropTypes.instanceOf(Object).isRequired,
    styles: PropTypes.instanceOf(Object).isRequired
};

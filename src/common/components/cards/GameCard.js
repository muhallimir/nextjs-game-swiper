import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Theme from 'src/styles/theme';
import { useSelector } from 'react-redux';

export default function GameCard({ game }) {
    const { theme: mode } = useSelector(({ app }) => app);
    const darkMode = mode === 'dark';

    return (
        <Box
            key={game._id}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                border: `1px solid ${darkMode ? 'var(--common-white)' : 'var(--common-black)'}`,
                borderRadius: '10px',
                gap: '2px',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                '&:hover, &:focus': {
                    border: `2px solid var(--primary-ast-main)`,
                },
                [Theme.breakpoints.down('xs')]: {
                    maxHeight: '178px',
                },
                [Theme.breakpoints.down('sm')]: {
                    maxHeight: '178px',
                },
                [Theme.breakpoints.between('md', 'lg')]: {
                    height: '198px',
                },
                [Theme.breakpoints.up('lg')]: {
                    height: '199px',
                },
                [Theme.breakpoints.up('xl')]: {
                    height: '228px',
                },
            }}
        >
            <Box
                component="img"
                alt={game.name}
                src={
                    Theme.breakpoints.down('sm')
                        ? game.image_sm
                        : game.image_md
                }
                sx={{
                    width: '100%',
                    objectFit: 'cover',
                    borderTopRightRadius: '10px',
                    borderTopLeftRadius: '10px',
                    [Theme.breakpoints.down('xs')]: {
                        minHeight: '151px',
                    },
                    [Theme.breakpoints.down('sm')]: {
                        height: '151px',
                    },
                    [Theme.breakpoints.between('md', 'lg')]: {
                        height: '198px',
                    },
                    [Theme.breakpoints.up('lg')]: {
                        height: '199px',
                    },
                    [Theme.breakpoints.up('xl')]: {
                        height: '180px',
                    },
                }}
            />
            <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center', padding: '10px' }}>
                <Box component="img" alt={game.name} src={game.icon} width={24} height={24} />
                <Typography variant='body2' color={darkMode ? 'common.white' : 'common.black'}>
                    {game.name}
                </Typography>
            </Box>
        </Box>
    );
}

GameCard.propTypes = {
    game: PropTypes.object.isRequired,
};

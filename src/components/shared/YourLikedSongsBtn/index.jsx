import React from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function YourLikedSongsBtn() {
    return (
        <Link
            to="/Playlist"
            style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                margin: '0 2.8rem 3.4rem',
            }}>
            <Box
                sx={{
                    width: '5.6rem',
                    height: '5.6rem',
                    background:
                        'linear-gradient(180deg, #A6F3FF -15.18%, #00C2CB 84.82%)',
                    borderRadius: '50%',
                    boxShadow: '0 0 .2rem #00C2CB',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#000000',
                }}>
                <FavoriteBorderRoundedIcon sx={{ fontSize: '2rem' }} />
            </Box>
            <Typography
                sx={{
                    fontFamily: 'Century Gothic',
                    fontSize: '2rem',
                    color: '#ffffff',
                    ml: '2.4rem',
                    textDecoration: 'none',
                }}>
                Your Liked Songs
            </Typography>
            <Typography />
        </Link>
    );
}

export default YourLikedSongsBtn;

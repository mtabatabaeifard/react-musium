import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import image1 from '../../assets/images/library-musium-logo.png';

function libraryPagesHeader() {
    return (
        <Box
            sx={{
                backgroundColor: '#000000',
                maxWidth: '43.3rem',
                margin: '0 auto',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pt: '2.8rem',
                    pb: '2.4rem',
                    mx: '2rem',
                }}>
                <img src={image1} alt="logo" />
                <Typography
                    sx={{
                        color: '#00C2CB',
                        fontFamily: 'Century Gothic',
                        fontSize: '2.7rem',
                        flexGrow: '1',
                        my: 0,
                    }}
                    component="h3">
                    Your Library
                </Typography>
                <Link to="/search">
                    <SearchIcon sx={{ color: '#ffffff', fontSize: '2rem' }} />
                </Link>
            </Box>
        </Box>
    );
}

export default libraryPagesHeader;

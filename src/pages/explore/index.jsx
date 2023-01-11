/* eslint-disable import/no-duplicates */
import { Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from 'assets/images/musium-logo.jpg';
import { SearchBarExplor } from 'components';
import { CardImgExplor } from 'components';
import { CardImageExplortwo } from 'components';
import Footer from 'layout/Footer';
import React from 'react';

export default function ExplorPage() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: '#0000',
                height: '100vh',
                width: '100%',
                textDecoration: 'none',
            }}>
            <Box
                sx={{
                    maxWidth: 433,
                    height: 915,
                    background: theme.palette.primary.dark,
                    mx: 'auto',
                    position: 'relative',
                    overflow: 'hidden',
                    fontFamily: 'Century Gothic',
                    color: theme.palette.text.primary,
                    pt: 35 / 8,
                    textDecoration: 'none',
                }}>
                <Box
                    sx={{
                        width: '350px',
                        display: 'flex',
                        mt: '2.9rem',
                        ml: '3.6rem',
                    }}>
                    <img width="63px" height="48px" alt="logo" src={Logo} />
                    <Box
                        sx={{
                            color: '#00C2CB',
                            fontFamily: 'Century Gothic',
                            fontWeight: '700',
                            fontSize: '2.7rem',
                            lineHeight: '33px',
                            mt: '.8rem',
                        }}>
                        Search
                    </Box>
                </Box>
                <SearchBarExplor />
                <Box
                    sx={{
                        marginTop: '3.2rem',
                        marginLeft: '4.1rem',
                        fontFamily: 'Century Gothic',
                        fontWeight: '700',
                        fontSize: '2rem',
                        lineHeight: '2.4rem',
                    }}>
                    Your Top Genres
                </Box>
                <CardImgExplor />
                <Box
                    sx={{
                        mt: '5rem',
                        ml: '4.1rem',
                        fontWeight: '700',
                        fontSize: '2rem',
                        fontFamily: 'Century Gothic',
                        lineHeight: '2.4rem',
                        color: 'rgba(255, 255, 255, 1)',
                    }}>
                    Browse All
                </Box>
                <CardImageExplortwo />
                <Box
                    sx={{
                        ml: '2rem',
                    }}>
                    <Footer />
                </Box>
            </Box>
            <Link to="/ExplorPage" />
        </Box>
    );
}

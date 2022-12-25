import { Box, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import musiumLogo from '../../assets/images/LaunchScreen/musium logo.png';
import musium from '../../assets/images/LaunchScreen/musium.svg';

export function LaunchScreen() {
    return (
        <Link to="/welcome">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    bgcolor: '#000',
                }}>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                    }}>
                    <img
                        src={musiumLogo}
                        alt="Logo"
                        width="100%"
                        style={{ maxWidth: '40rem' }}
                    />
                    <img src={musium} alt="musium" />
                </Container>
            </Box>
        </Link>
    );
}

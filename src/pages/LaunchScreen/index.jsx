import { Box } from '@mui/material';
import React from 'react';
import musiumLogo from '../../assets/images/LaunchScreen/musium logo.png';
import musium from '../../assets/images/LaunchScreen/musium.svg';

export function LaunchScreen() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                bgcolor: 'common.black',
            }}>
            <img src={musiumLogo} alt="Logo" />
            <img src={musium} alt="musium" width="169px" />
        </Box>
    );
}

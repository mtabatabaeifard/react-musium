import React from 'react';
import { Box } from '@mui/system';
import { LogoSection } from './logo';
import { FormSection } from './form';
import { social } from './social';
import './styles/style.css';

export default function Login() {
    return (
        <Box
            sx={{
                maxWidth: 428,
                mx: 'auto',
                background: '#000',
                pt: 35 / 8,
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'Century Gothic',
            }}>
            {LogoSection()}
            {FormSection()}
            {social()}
        </Box>
    );
}

import React from 'react';
import Logo from 'components/Logo';
import { Box } from '@mui/system';
import { FormSection } from './form';
import { social } from './social';
import './styles/style.css';

export default function Login() {

    return (
        <Box pb={1} sx={{
            maxWidth: 428,
            mx: 'auto',
            background: '#000',
            pt: 35 / 8,
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'Century Gothic'
        }}>
            <Logo title='Login to your account' />
            {FormSection()}
            {social()}
        </Box>

    )
}

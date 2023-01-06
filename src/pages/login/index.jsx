import React from 'react';
import Logo from 'components/Logo';
import Social from 'components/SocialSection';
import { Box } from '@mui/system';
import { FormSection } from './form';
import './styles/style.css';

export default function Login() {
    return (
        <Box
            pb={1}
            sx={{
                maxWidth: 428,
                mx: 'auto',
                background: '#000',
                pt: 35 / 8,
                position: 'relative',
                overflow: 'hidden',
                fontWeight: '700',
            }}>
            <Logo title="Login to your account" />
            <FormSection />
            <Social
                divName="Don’t have an account?"
                buttonName=" Sign Up"
                linkTo="/signup"
            />
        </Box>
    );
}

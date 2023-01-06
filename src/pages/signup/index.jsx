import React from 'react';
import Logo from 'components/Logo';
import Social from 'components/SocialSection';
import { Box } from '@mui/system';
import { FormSection } from './form';
import './styles/style.css';

export default function SignUp() {
    return (
        <Box
            sx={{
                maxWidth: 428,
                mx: 'auto',
                background: '#000',
                pt: 35 / 8,
                position: 'relative',
                overflow: 'hidden',
                fontWeight: '700',
            }}>
            <Logo title="Signup an account " />
            <FormSection />
            <Social
                divName="Already have an account?"
                buttonName=" Login"
                linkTo="/login"
            />
        </Box>
    );
}

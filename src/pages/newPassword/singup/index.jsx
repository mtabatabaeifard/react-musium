import React from 'react';
import Logo from 'components/Logo';
import { Box } from '@mui/system';
import { FormSection } from './form';
import { Social } from './social';
import './styles/style.css';

export default function NewPassword() {
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
            <Logo title="Enter new password " />
            <FormSection />
            <Social />
        </Box>
    );
}

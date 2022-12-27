import React from 'react';
import { Box } from '@mui/system';
import Logo from 'components/Logo';
import { FormSection } from './firstFormSection';

export default function ForgotPassword() {
    const style = {
        main: {
            maxWidth: 428,
            mx: 'auto',
            background: '#000',
            pt: 35 / 8,
            position: 'relative',
            overflow: 'hidden',
            fontFamily: 'Century Gothic',
        },
    };

    return (
        <Box sx={style.main}>
            <Logo title="Forgot Password?" />
            {FormSection()}
        </Box>
    );
}

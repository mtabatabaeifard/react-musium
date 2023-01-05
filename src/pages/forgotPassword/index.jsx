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
            fontWeight: '700',
        },
    };

    return (
        <Box pb={41.35} sx={style.main}>
            <Logo title="Forgot Password?" />
            <FormSection />
        </Box>
    );
}

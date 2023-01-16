import React from 'react';
import { Box } from '@mui/system';
import Logo from 'components/Logo';
import { FirstFormSection } from './firstFormSection';

export default function ResetPassword() {
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
        <Box pb={44} sx={style.main}>
            <Logo title="OTP VERIFICATION" />
            <FirstFormSection />
        </Box>
    );
}

import React from 'react';
import { Button as MuiButton } from '@mui/material';

export function SignInButton(props) {
    return (
        <MuiButton
            {...props}
            sx={{
                backgroundColor: '#1E1E1E',
                borderRadius: '1rem',
                border: '0.2px solid #DBE7E8',
                width: '85vw',
                paddingY: '1rem',
                color: '#fff',
                fontSize: '1.6rem',
                fontWeight: '500',
                textTransform: 'none',
                direction: 'rtl',
                gap: '1.5rem',
                maxWidth: '45rem',
            }}
        />
    );
}

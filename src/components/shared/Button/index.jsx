import React from 'react';
import { Button as MuiButton } from '@mui/material';

export function Button(props) {
    return (
        <MuiButton
            sx={{
                backgroundColor: 'background.button',
                color: 'text.primary',
                display: 'flex',
                fontSize: '1.6rem',
                fontWeight: '400',
                borderRadius: '5rem',
                boxShadow: '0px 0px 10px 0.5px #39C0D4',
                paddingY: '1.5rem',
                textTransform: 'none',
                maxWidth: '40rem',
                width: '87.5vw',
            }}
            {...props}
        />
    );
}

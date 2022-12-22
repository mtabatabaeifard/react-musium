import React from 'react';
import { Button as MuiButton } from '@mui/material';

export function Button(props) {
    return (
        <MuiButton
            sx={{
                backgroundColor: '#06A0B5',
                color: 'common.white',
                fontSize: '1.6rem',
                fontWeight: '400',
                borderRadius: '5rem',
                boxShadow: '0px 0px 10px 0.5px #39C0D4',
                width: '37.7rem',
                height: '6rem',
                textTransform: 'none',
            }}
            {...props}
        />
    );
}

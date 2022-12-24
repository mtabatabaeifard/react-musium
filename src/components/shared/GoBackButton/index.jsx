import React from 'react';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { useNavigate } from 'react-router-dom';

export function GoBackButton() {
    const navigate = useNavigate();
    return (
        <KeyboardBackspaceRoundedIcon
            sx={{
                color: '#fff',
                width: '5.6rem',
                height: '3.6rem',
                paddingTop: '6rem',
                paddingLeft: '1.5rem',
                alignSelf: 'start',
            }}
            onClick={() => navigate(-1)}
        />
    );
}

import React from 'react';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { useNavigate } from 'react-router-dom';

export function GoBackButton(paddingLeft, paddingTop) {
    const navigate = useNavigate();
    return (
        <KeyboardBackspaceRoundedIcon
            sx={{
                color: '#fff',
                width: '5.6rem',
                height: '3.6rem',
                paddingTop: { ...paddingTop },
                paddingLeft: { ...paddingLeft },
                alignSelf: 'start',
                cursor: 'pointer',
            }}
            onClick={() => navigate(-1)}
        />
    );
}

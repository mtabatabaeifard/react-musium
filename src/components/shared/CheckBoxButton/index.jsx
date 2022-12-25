import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

export function CheckBoxButton(props) {
    const style = {
        formControlLabel: {
            padding: '2.125rem 2.5rem 2.75rem 2.75rem',
            color: '#FFFFFF',
        },
        checkBox: {
            color: ' #00C2CB',
            '&.Mui-checked': {
                color: ' #00C2CB',
            },
        },
    };
    return (
        <FormControlLabel
            sx={style.formControlLabel}
            control={<Checkbox defaultChecked labal sx={style.checkBox} />}
            {...props}
        />
    );
}

import { useTheme } from '@emotion/react';
import MUTextField from '@mui/material/TextField';

export function TextField(props) {
    const theme = useTheme();
    const styles = {
        inputs: {
            height: '6rem',
            width: '90%',
            backgroundColor: '#1E1E1E',
            color: theme.palette.secondary.main,
            borderRadius: '10px',
            '& input::placeholder': {
                color: '#fff ',
            },
        },
    };
    return <MUTextField autoComplete="off" sx={styles.inputs} {...props} />;
}

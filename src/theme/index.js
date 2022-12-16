import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#1E1E1ED9',
        },
        primary: {
            main: '#1DB1B7',
        },
        secondary: {
            main: '#8A9A9D',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
    status: {
        danger: 'red',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' &&
                        ownerState.color === 'primary' && {
                            color: '#fff',
                        }),
                }),
            },
        },
    },
});

export default theme;

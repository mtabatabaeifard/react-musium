import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#1E1E1ED9',
        },
        primary: {
            main: '#1DB1B7',
            medium: '#41C3D6',
            light: '#44D7DD',
            lighter: '#A6F3FF',
            gray: '#446266',
        },
        secondary: {
            main: '#00C2CB',
        },
        text: {
            white: 'rgba(255, 255, 255, 0.87)',
            gray: '#8A9A9D',
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

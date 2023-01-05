import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#1E1E1ED9',
            button: '#06A0B5',
            gray: '#1E1E1E',
        },
        primary: {
            main: '#1DB1B7',
            medium: '#41C3D6',
            light: '#44D7DD',
            lighter: '#A6F3FF',
            gray: '#446266',
            dark: '#000',
        },
        secondary: {
            main: '#8A9A9D',
            sec: '#00C2CB',
        },
        text: {
            primary: '#FFFFFF',
            white: 'rgba(255, 255, 255, 0.87)',
            gray: '#8A9A9D',
        },
    },
    status: {
        danger: 'red',
    },
    typography: {
        fontFamily: ['Lexend', 'sans serif'].join(','),
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
    breakpoints: {
        values: {
            smallMobile: 430,
            smallerMobile: 395,
            smallestMobile: 360,
        },
    },
});

export default theme;

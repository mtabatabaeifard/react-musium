import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

export function MusicPlayerSlider() {
    const theme = useTheme();
    const duration = 200; // seconds
    const [position, setPosition] = React.useState(32);
    const [paused, setPaused] = React.useState(false);

    const TinyText = styled(Typography)({
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
        color: theme.palette.secondary.main,
        fontSize: '1.2rem',
    });

    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    return (
        <Box sx={{ overflow: 'hidden', px: 45 / 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ ml: 1.5, minWidth: 0 }}>
                    <Typography noWrap>
                        <b
                            style={{
                                fontSize: '2.4rem',
                                color: '#fff',
                                fontWeight: '500',
                            }}>
                            grainy days
                        </b>
                    </Typography>
                    <Typography
                        noWrap
                        letterSpacing="0.055em"
                        sx={{
                            fontSize: '1.6rem',
                            color: theme.palette.secondary.main,
                            fontWeight: '600',
                        }}>
                        moody.
                    </Typography>
                </Box>
            </Box>
            <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value)}
                sx={{
                    height: 4,
                    '& .MuiSlider-thumb': {
                        width: 8,
                        height: 8,
                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                        '&:before': {
                            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                        },
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: `0px 0px 0px 8px ${
                                theme.palette.mode === 'dark'
                                    ? 'rgb(255 255 255 / 16%)'
                                    : 'rgb(0 0 0 / 16%)'
                            }`,
                        },
                        '&.Mui-active': {
                            width: 20,
                            height: 20,
                        },
                    },
                    '& .MuiSlider-rail': {
                        opacity: 0.28,
                    },
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: -2,
                }}>
                <TinyText>{formatDuration(position)}</TinyText>
                <TinyText>-{formatDuration(duration - position)}</TinyText>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: -1,
                }}>
                <IconButton aria-label="Shuffle" />
                <IconButton aria-label="previous song">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="20"
                        viewBox="0 0 17 20"
                        fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.00027 8.80392V0L0.000268936 0L0.000268936 20L2.00027 20L2.00027 11.1437L14.974 18.634C15.6407 19.0189 16.474 18.5378 16.474 17.768L16.474 2.17956C16.474 1.40976 15.6407 0.928635 14.974 1.31354L2.00027 8.80392Z"
                            fill="white"
                        />
                    </svg>
                </IconButton>
                <IconButton
                    sx={{
                        background:
                            'linear-gradient(180deg, #A6F3FF -15.18%, #00C2CB 84.82%)',
                        boxShadow: '0px 0px 2px #00C2CB',
                        height: '56px',
                        padding: `${paused ? '16px' : '18px'}`,
                        paddingLeft: `${paused ? '20px' : '18px'}`,
                    }}
                    aria-label={paused ? 'play' : 'pause'}
                    onClick={() => setPaused(!paused)}>
                    {paused ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none">
                            <path
                                d="M0.000297546 0.999978L0.000297546 19C0.000218088 19.1705 0.0437218 19.3381 0.126677 19.4871C0.209631 19.636 0.329282 19.7612 0.474266 19.8509C0.61925 19.9406 0.784752 19.9917 0.955053 19.9994C1.12535 20.0071 1.2948 19.9712 1.4473 19.895L19.4473 10.895C19.6023 10.8026 19.7306 10.6715 19.8197 10.5146C19.9088 10.3577 19.9557 10.1804 19.9557 9.99998C19.9557 9.81955 19.9088 9.64221 19.8197 9.48532C19.7306 9.32843 19.6023 9.19738 19.4473 9.10498L1.4473 0.104978C1.2948 0.0287753 1.12535 -0.00717704 0.955053 0.000535877C0.784752 0.00824879 0.61925 0.0593708 0.474266 0.149046C0.329282 0.238722 0.209631 0.363974 0.126677 0.512905C0.0437218 0.661836 0.000218088 0.829502 0.000297546 0.999978V0.999978ZM16.7643 9.99998L2.0003 17.382L2.0003 2.61798L16.7643 9.99998Z"
                                fill="white"
                            />
                        </svg>
                    ) : (
                        '||'
                    )}
                </IconButton>
                <IconButton aria-label="next song">
                    <svg
                        width="17"
                        height="20"
                        viewBox="0 0 17 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.474 11.1961V20H16.474V0H14.474V8.85634L1.50024 1.36595C0.833578 0.981054 0.00024414 1.46218 0.000244141 2.23198L0.00024415 17.8204C0.00024415 18.5902 0.833577 19.0714 1.50024 18.6865L14.474 11.1961Z"
                            fill="white"
                        />
                    </svg>
                </IconButton>
                <IconButton aria-label="Equailizer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none">
                        <path
                            d="M5.99996 9.66658C5.84525 9.66658 5.69688 9.59635 5.58748 9.47132C5.47808 9.3463 5.41663 9.17673 5.41663 8.99992V0.999919C5.41663 0.823108 5.47808 0.653538 5.58748 0.528514C5.69688 0.40349 5.84525 0.333252 5.99996 0.333252C6.15467 0.333252 6.30304 0.40349 6.41244 0.528514C6.52183 0.653538 6.58329 0.823108 6.58329 0.999919V8.99992C6.58329 9.17673 6.52183 9.3463 6.41244 9.47132C6.30304 9.59635 6.15467 9.66658 5.99996 9.66658ZM1.91663 8.99992V4.33325C1.91663 4.15644 1.85517 3.98687 1.74577 3.86185C1.63638 3.73682 1.488 3.66658 1.33329 3.66658C1.17858 3.66658 1.03021 3.73682 0.920814 3.86185C0.811417 3.98687 0.749959 4.15644 0.749959 4.33325V8.99992C0.749959 9.17673 0.811417 9.3463 0.920814 9.47132C1.03021 9.59635 1.17858 9.66658 1.33329 9.66658C1.488 9.66658 1.63638 9.59635 1.74577 9.47132C1.85517 9.3463 1.91663 9.17673 1.91663 8.99992ZM3.66663 6.33325C3.51192 6.33325 3.36354 6.40349 3.25415 6.52851C3.14475 6.65354 3.08329 6.82311 3.08329 6.99992V8.99992C3.08329 9.17673 3.14475 9.3463 3.25415 9.47132C3.36354 9.59635 3.51192 9.66658 3.66663 9.66658C3.82134 9.66658 3.96971 9.59635 4.0791 9.47132C4.1885 9.3463 4.24996 9.17673 4.24996 8.99992V6.99992C4.24996 6.82311 4.1885 6.65354 4.0791 6.52851C3.96971 6.40349 3.82134 6.33325 3.66663 6.33325ZM8.33329 2.33325C8.17858 2.33325 8.03021 2.40349 7.92081 2.52851C7.81142 2.65354 7.74996 2.82311 7.74996 2.99992V8.99992C7.74996 9.17673 7.81142 9.3463 7.92081 9.47132C8.03021 9.59635 8.17858 9.66658 8.33329 9.66658C8.488 9.66658 8.63638 9.59635 8.74577 9.47132C8.85517 9.3463 8.91663 9.17673 8.91663 8.99992V2.99992C8.91663 2.82311 8.85517 2.65354 8.74577 2.52851C8.63638 2.40349 8.488 2.33325 8.33329 2.33325ZM11.25 8.99992V5.66658C11.25 5.48977 11.1885 5.3202 11.0791 5.19518C10.9697 5.07016 10.8213 4.99992 10.6666 4.99992C10.5119 4.99992 10.3635 5.07016 10.2541 5.19518C10.1447 5.3202 10.0833 5.48977 10.0833 5.66658V8.99992C10.0833 9.17673 10.1447 9.3463 10.2541 9.47132C10.3635 9.59635 10.5119 9.66658 10.6666 9.66658C10.8213 9.66658 10.9697 9.59635 11.0791 9.47132C11.1885 9.3463 11.25 9.17673 11.25 8.99992ZM0.166626 12.3333V13.6666H2.49996V12.3333L1.33329 10.9999L0.166626 12.3333ZM4.83329 12.3333V13.6666H7.16663V12.3333L5.99996 10.9999L4.83329 12.3333ZM9.49996 12.3333V13.6666H11.8333V12.3333L10.6666 10.9999L9.49996 12.3333Z"
                            fill="#979797"
                        />
                    </svg>
                </IconButton>
                <IconButton aria-label="Add">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none">
                        <path
                            d="M1.00028 5.875H6.33362V0.875C6.33362 0.70924 6.40386 0.550268 6.52888 0.433058C6.6539 0.315848 6.82347 0.25 7.00029 0.25C7.1771 0.25 7.34667 0.315848 7.47169 0.433058C7.59671 0.550268 7.66695 0.70924 7.66695 0.875V5.875H13.0003C13.1771 5.875 13.3467 5.94085 13.4717 6.05806C13.5967 6.17527 13.667 6.33424 13.667 6.5C13.667 6.66576 13.5967 6.82473 13.4717 6.94194C13.3467 7.05915 13.1771 7.125 13.0003 7.125H7.66695V12.125C7.66695 12.2908 7.59671 12.4497 7.47169 12.5669C7.34667 12.6842 7.1771 12.75 7.00029 12.75C6.82347 12.75 6.6539 12.6842 6.52888 12.5669C6.40386 12.4497 6.33362 12.2908 6.33362 12.125V7.125H1.00028C0.823474 7.125 0.653905 7.05915 0.52888 6.94194C0.403856 6.82473 0.333618 6.66576 0.333618 6.5C0.333618 6.33424 0.403856 6.17527 0.52888 6.05806C0.653905 5.94085 0.823474 5.875 1.00028 5.875Z"
                            fill="white"
                        />
                    </svg>
                </IconButton>
            </Box>
            <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1, px: 1 }}
                alignItems="center">
                VolumeDownRounded
                <Slider
                    aria-label="Volume"
                    defaultValue={30}
                    sx={{
                        color:
                            theme.palette.mode === 'dark'
                                ? '#fff'
                                : 'rgba(0,0,0,0.87)',
                        '& .MuiSlider-track': {
                            border: 'none',
                        },
                        '& .MuiSlider-thumb': {
                            width: 24,
                            height: 24,
                            backgroundColor: '#fff',
                            '&:before': {
                                boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                boxShadow: 'none',
                            },
                        },
                    }}
                />
                VolumeUpRounded
            </Stack>
        </Box>
    );
}

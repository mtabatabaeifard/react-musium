/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export function MusicPlayerSlider({
    idValue,
    setIdValue,
    source,
    name,
    artist,
    isPlaying,
    setIsPlaying,
}) {
    const theme = useTheme();
    const [position, setPosition] = React.useState(
        localStorage.getItem('percent') || 0,
    );
    const [duration, setDuration] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(
        localStorage.getItem('currentTime') || 0,
    );
    const [like, setLike] = React.useState(false);
    const [shuffle, setShuffle] = React.useState(false);

    const audioRef = React.useRef();
    const audio = audioRef.current;

    React.useEffect(() => {
        if (localStorage.getItem('notResetCurrTime') === 'false') {
            localStorage.setItem('songID', idValue);
            localStorage.setItem('currentTime', 0);
            localStorage.setItem('percent', 0);
            setCurrentTime(localStorage.getItem('currentTime'));
            setPosition(localStorage.getItem('percent'));
        }
        localStorage.setItem('notResetCurrTime', true);
        setLike(false);
    }, [idValue]);

    const onChange = (e) => {
        audio.currentTime = (audio.duration / 100) * e.target.value;
        setPosition(e.target.value);
    };

    const randomIdValue = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

    const randomIdGenerator = () => {
        if (randomIdValue !== idValue) {
            setIdValue(randomIdValue);
        } else if (
            randomIdValue === idValue &&
            randomIdValue !== 10 &&
            randomIdValue !== 0
        ) {
            setIdValue(randomIdValue + 1);
        } else if (randomIdValue === idValue && randomIdValue === 10) {
            setIdValue(randomIdValue - 1);
        } else if (randomIdValue === idValue && randomIdValue === 0) {
            setIdValue(randomIdValue + 1);
        }
    };

    const play = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            audio.currentTime = currentTime;
            audio.play();
        }
        if (isPlaying) {
            setIsPlaying(false);
            audio.pause();
        }
    };

    const getCurrDuration = (e) => {
        localStorage.setItem('currentTime', currentTime);
        if (currentTime === duration) {
            let pauseState = false;
            if (audio.paused) {
                pauseState = true;
            } else {
                pauseState = false;
            }
            audio.pause();
            setTimeout(() => {
                audio.currentTime = 0;
                if (!pauseState) {
                    audio.play();
                    setIsPlaying(true);
                }
            }, 1);
            if (!shuffle) {
                if (idValue !== 10) {
                    setIdValue(idValue + 1);
                } else {
                    setIdValue(0);
                }
            } else if (shuffle) {
                randomIdGenerator();
            }
        }
        const percent = (
            (e.currentTarget.currentTime / e.currentTarget.duration) *
            100
        ).toFixed(0);
        const time = e.currentTarget.currentTime;

        setPosition(+percent);
        localStorage.setItem('percent', +percent);
        setCurrentTime(time.toFixed(0));
    };

    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    const songNextPrevState = () => {
        let pauseState = false;
        if (audio.paused) {
            pauseState = true;
        } else {
            pauseState = false;
        }
        audio.pause();
        setTimeout(() => {
            audio.currentTime = 0;
            if (!pauseState) {
                audio.play();
                setIsPlaying(true);
            }
        }, 1);
        setIsPlaying(false);
    };

    const nextSong = () => {
        songNextPrevState();
        if (!shuffle) {
            if (idValue !== 10) {
                setIdValue(idValue + 1);
            } else {
                setIdValue(0);
            }
        } else if (shuffle) {
            randomIdGenerator();
        }
    };

    const prevSong = () => {
        songNextPrevState();
        if (!shuffle) {
            if (idValue !== 0) {
                setIdValue(idValue - 1);
            } else {
                setIdValue(10);
            }
        } else if (shuffle) {
            randomIdGenerator();
        }
    };

    const sliderS = {
        mx: 1.8,
        height: 4,
        borderRadius: 2 / 8,
        color: '#7CEEFF',
        maxWidth: '93%',
        '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
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
    };

    const TinyText = styled(Typography)({
        opacity: 0.38,
        fontWeight: 600,
        letterSpacing: 0.2,
        color: '#8A9A9D',
        fontSize: '1.2rem',
        marginTop: '.1rem',
    });

    const iconContainerS = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        mt: 1 / 8,
        mr: 0.4,
        [theme.breakpoints.up('smallMobile')]: {
            gap: 20 / 8,
        },
        [theme.breakpoints.down('smallMobile')]: {
            gap: 16 / 8,
        },
        [theme.breakpoints.down('smallerMobile')]: {
            gap: 12 / 8,
        },
        [theme.breakpoints.down('smallestMobile')]: {
            gap: 5 / 8,
        },
    };

    return (
        <Box sx={{ overflow: 'hidden', px: 34 / 8, marginTop: '2.7rem' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <Box sx={{ ml: 1.5, minWidth: 0 }}>
                    <Typography noWrap>
                        <b
                            style={{
                                fontSize: '2.4rem',
                                color: '#fff',
                                fontWeight: '500',
                            }}>
                            {name}
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
                        {artist}
                    </Typography>
                </Box>
                <Box>
                    <IconButton aria-label="Share">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="17"
                            viewBox="0 0 18 17"
                            fill="none">
                            <path
                                d="M14.2503 6.37492C14.8436 6.37492 15.4236 6.20875 15.917 5.89742C16.4103 5.58609 16.7949 5.14358 17.0219 4.62586C17.249 4.10813 17.3084 3.53844 17.1926 2.98883C17.0769 2.43922 16.7912 1.93437 16.3716 1.53812C15.952 1.14187 15.4175 0.87202 14.8355 0.762695C14.2536 0.65337 13.6504 0.70948 13.1022 0.923928C12.554 1.13838 12.0855 1.50153 11.7559 1.96747C11.4262 2.43341 11.2503 2.98121 11.2503 3.54159C11.2543 3.8088 11.299 4.07407 11.383 4.32925L6.04602 6.69792C5.65303 6.24757 5.12237 5.92282 4.52658 5.76805C3.93079 5.61327 3.29893 5.63603 2.71735 5.83321C2.13577 6.03038 1.63284 6.39236 1.2773 6.86967C0.921765 7.34698 0.730957 7.91633 0.730957 8.49992C0.730957 9.08351 0.921765 9.65286 1.2773 10.1302C1.63284 10.6075 2.13577 10.9695 2.71735 11.1666C3.29893 11.3638 3.93079 11.3866 4.52658 11.2318C5.12237 11.077 5.65303 10.7523 6.04602 10.3019L11.383 12.6706C11.299 12.9258 11.2543 13.191 11.2503 13.4583C11.2486 14.1149 11.4878 14.7517 11.9272 15.2606C12.3666 15.7694 12.9791 16.1187 13.6605 16.2491C14.3419 16.3795 15.0501 16.2829 15.6646 15.9758C16.2791 15.6686 16.7619 15.1699 17.0309 14.5644C17.3 13.959 17.3386 13.2842 17.1403 12.6549C16.9419 12.0256 16.5188 11.4806 15.943 11.1127C15.3672 10.7447 14.6742 10.5766 13.9819 10.6368C13.2896 10.697 12.6407 10.9819 12.1458 11.443L6.69402 9.02409C6.76903 8.67847 6.76903 8.32208 6.69402 7.97646L12.1458 5.55679C12.7058 6.08068 13.4621 6.37469 14.2503 6.37492ZM14.2503 2.12492C14.5469 2.12492 14.837 2.20801 15.0836 2.36367C15.3303 2.51934 15.5226 2.74059 15.6361 2.99945C15.7496 3.25831 15.7793 3.54316 15.7215 3.81796C15.6636 4.09277 15.5207 4.3452 15.3109 4.54332C15.1012 4.74145 14.8339 4.87637 14.5429 4.93103C14.2519 4.98569 13.9503 4.95764 13.6762 4.85042C13.4022 4.74319 13.1679 4.56161 13.0031 4.32864C12.8382 4.09567 12.7503 3.82178 12.7503 3.54159C12.7503 3.16586 12.9083 2.80553 13.1896 2.53985C13.4709 2.27418 13.8525 2.12492 14.2503 2.12492ZM3.75027 9.91659C3.4536 9.91659 3.16359 9.8335 2.91692 9.67783C2.67025 9.52217 2.47799 9.30092 2.36445 9.04205C2.25092 8.78319 2.22122 8.49835 2.2791 8.22354C2.33697 7.94874 2.47984 7.69631 2.68961 7.49819C2.89939 7.30006 3.16667 7.16514 3.45764 7.11047C3.74861 7.05581 4.05021 7.08387 4.3243 7.19109C4.59839 7.29831 4.83266 7.47989 4.99748 7.71286C5.1623 7.94583 5.25027 8.21973 5.25027 8.49992C5.25027 8.87564 5.09224 9.23598 4.81093 9.50165C4.52963 9.76733 4.1481 9.91659 3.75027 9.91659ZM14.2503 12.0416C14.5469 12.0416 14.837 12.1247 15.0836 12.2803C15.3303 12.436 15.5226 12.6573 15.6361 12.9161C15.7496 13.175 15.7793 13.4598 15.7215 13.7346C15.6636 14.0094 15.5207 14.2619 15.3109 14.46C15.1012 14.6581 14.8339 14.793 14.5429 14.8477C14.2519 14.9024 13.9503 14.8743 13.6762 14.7671C13.4022 14.6599 13.1679 14.4783 13.0031 14.2453C12.8382 14.0123 12.7503 13.7384 12.7503 13.4583C12.7503 13.0825 12.9083 12.7222 13.1896 12.4565C13.4709 12.1908 13.8525 12.0416 14.2503 12.0416Z"
                                fill="white"
                            />
                        </svg>
                    </IconButton>
                    <IconButton aria-label="Like" sx={{ marginRight: 1 }}>
                        <svg
                            onClick={() => {
                                setLike(!like);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 16 16"
                            fill="none">
                            <path
                                d="M13.521 2.26479C13.1332 1.79558 12.6462 1.41823 12.095 1.15991C11.5439 0.901587 10.9422 0.768731 10.3335 0.770911C9.29203 0.739375 8.27804 1.10821 7.5002 1.80154C6.72236 1.10821 5.70838 0.739375 4.66687 0.770911C4.05816 0.768731 3.45654 0.901587 2.90536 1.15991C2.35418 1.41823 1.86715 1.79558 1.47937 2.26479C0.804326 3.08362 0.0981175 4.56616 0.566326 6.98229C1.31362 10.8406 6.91724 14.0068 7.15383 14.1365C7.25929 14.1953 7.37804 14.2261 7.49879 14.2261C7.61953 14.2261 7.73828 14.1953 7.84374 14.1365C8.08174 14.004 13.6854 10.8377 14.4312 6.98229C14.9023 4.56616 14.1961 3.08362 13.521 2.26479ZM13.0436 6.71312C12.5152 9.44091 8.67462 11.9782 7.5002 12.6992C5.84553 11.7005 2.44128 9.19299 1.96033 6.71312C1.59695 4.83887 2.0942 3.75016 2.57587 3.16649C2.83059 2.85916 3.15017 2.612 3.51169 2.44275C3.8732 2.27351 4.2677 2.18636 4.66687 2.18758C5.09321 2.1556 5.52056 2.23465 5.90725 2.41701C6.29395 2.59937 6.62679 2.87882 6.87333 3.22812C6.93412 3.33999 7.02381 3.43351 7.13304 3.49893C7.24226 3.56435 7.36704 3.59928 7.49436 3.60007C7.62168 3.60087 7.74688 3.5675 7.85692 3.50345C7.96696 3.4394 8.05781 3.34701 8.11999 3.23591C8.36605 2.88389 8.6996 2.60208 9.08776 2.41825C9.47592 2.23441 9.90529 2.15491 10.3335 2.18758C10.7335 2.18563 11.129 2.27242 11.4914 2.44169C11.8539 2.61096 12.1742 2.85851 12.4295 3.16649C12.9097 3.75016 13.407 4.83887 13.0436 6.71312Z"
                                fill={`${like ? '#ED2939' : '#39C0D4'}`}
                            />
                        </svg>
                    </IconButton>
                </Box>
            </Box>
            <Slider
                aria-label="time-indicator"
                size="medium"
                min={0}
                step={1}
                sx={sliderS}
                onChange={onChange}
                value={position}
            />
            <audio
                src={source}
                ref={audioRef}
                onLoadedData={(e) => {
                    setDuration(e.currentTarget.duration.toFixed(0));
                }}
                onTimeUpdate={getCurrDuration}
            />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    ml: 1.8,
                    mt: -1.75,
                    maxWidth: '93%',
                }}>
                <TinyText>{formatDuration(currentTime)}</TinyText>
                <TinyText>{formatDuration(duration)}</TinyText>
            </Box>
            <Box sx={iconContainerS}>
                <IconButton
                    aria-label="Shuffle"
                    onClick={() => {
                        setShuffle(!shuffle);
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="#fff">
                        <path
                            d="M16.4697 5.46967C16.1768 5.76256 16.1768 6.23744 16.4697 6.53033L17.1893 7.25H13.3768C12.706 7.25 12.0942 7.63343 11.8018 8.23713L11.5914 8.67144C11.5381 8.78157 11.5381 8.91006 11.5914 9.02018L12.1603 10.1947C12.2332 10.3451 12.4474 10.3451 12.5203 10.1947L13.1518 8.89102C13.1935 8.80478 13.2809 8.75 13.3768 8.75H17.1893L16.4697 9.46967C16.1768 9.76256 16.1768 10.2374 16.4697 10.5303C16.7626 10.8232 17.2374 10.8232 17.5303 10.5303L19.5303 8.53033C19.8232 8.23744 19.8232 7.76256 19.5303 7.46967L17.5303 5.46967C17.2374 5.17678 16.7626 5.17678 16.4697 5.46967Z"
                            fill={
                                shuffle ? '#fff' : theme.palette.secondary.main
                            }
                        />
                        <path
                            d="M10.0336 15.3286C10.0869 15.2184 10.0869 15.0899 10.0336 14.9798L9.46469 13.8053C9.39183 13.6549 9.17755 13.6549 9.10469 13.8053L8.47324 15.109C8.43146 15.1952 8.34407 15.25 8.24824 15.25H5C4.58579 15.25 4.25 15.5858 4.25 16C4.25 16.4142 4.58579 16.75 5 16.75H8.24824C8.91903 16.75 9.53079 16.3666 9.82321 15.7629L10.0336 15.3286Z"
                            fill={
                                shuffle ? '#fff' : theme.palette.secondary.main
                            }
                        />
                        <path
                            d="M16.4697 18.5303C16.1768 18.2374 16.1768 17.7626 16.4697 17.4697L17.1893 16.75H13.3768C12.706 16.75 12.0942 16.3666 11.8018 15.7629L8.47324 8.89102C8.43146 8.80478 8.34407 8.75 8.24824 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H8.24824C8.91903 7.25 9.53079 7.63343 9.82321 8.23713L13.1518 15.109C13.1935 15.1952 13.2809 15.25 13.3768 15.25H17.1893L16.4697 14.5303C16.1768 14.2374 16.1768 13.7626 16.4697 13.4697C16.7626 13.1768 17.2374 13.1768 17.5303 13.4697L19.5303 15.4697C19.8232 15.7626 19.8232 16.2374 19.5303 16.5303L17.5303 18.5303C17.2374 18.8232 16.7626 18.8232 16.4697 18.5303Z"
                            fill={
                                shuffle ? '#fff' : theme.palette.secondary.main
                            }
                        />
                    </svg>
                </IconButton>
                <IconButton aria-label="previous song" onClick={prevSong}>
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
                    onClick={play}
                    sx={{
                        background:
                            'linear-gradient(180deg, #A6F3FF -15.18%, #00C2CB 84.82%)',
                        boxShadow: '0px 0px 2px #00C2CB',
                        height: '56px',
                        padding: `${!isPlaying ? '16px' : '18px'}`,
                        paddingLeft: `${!isPlaying ? '20px' : '18px'}`,
                    }}
                    aria-label={!isPlaying ? 'play' : 'pause'}>
                    {!isPlaying ? (
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="i-pause"
                            viewBox="0 0 32 32"
                            fill="#fff"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            width="20px"
                            height="20px">
                            <path d="M23 2 L23 30 M9 2 L9 30" />
                        </svg>
                    )}
                </IconButton>
                <IconButton aria-label="next song" onClick={nextSong}>
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
                <Link to="/equalizer" style={{ textDecoration: 'none' }}>
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
                </Link>
                <Link to="/addToPlaylist" style={{ textDecoration: 'none' }}>
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
                </Link>
            </Box>
        </Box>
    );
}

import { Box, Typography } from '@mui/material';
import { Button } from 'components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import theme from 'theme';

export default function Header() {
    const navigate = useNavigate();
    const handelGoToSetting = () => {
        const path = '/setting';
        navigate(path);
    };
    const stylebtn = {
        button: {
            color: 'common.white',
            width: '2rem',
            padding: '0',
            minWidth: '0',
            height: '1.7rem',
            marginTop: '4.5rem',
            '&:hover': {
                svg: {
                    path: {
                        fill: '#00C2CB',
                    },
                },
                color: '#00C2CB;',
            },
        },
    };
    const strokebtn = {
        button: {
            minWidth: '0',
            color: 'common.white',
            width: '2rem',
            padding: '0',
            height: '1.7rem',
            marginTop: '4.5rem',
            '&:hover': {
                svg: {
                    path: {
                        stroke: '#00C2CB',
                    },
                },
                color: '#00C2CB;',
            },
        },
    };

    const [headerUsername, setHeaderUsername] = useState('');
    const [headerPicture, setHeaderPicture] = useState('');

    useEffect(() => {
        setHeaderUsername(localStorage.getItem('headerName'));
        setHeaderPicture(localStorage.getItem('headerPicture'));
    }, []);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box sx={{ display: 'flex', gap: '1.2rem' }}>
                <Button
                    href="#profilepage"
                    sx={{
                        width: '3.4rem',
                        margin: '3rem 0 2rem 0rem',
                        padding: '.2rem',
                        border: '0.1rem solid #158085',
                        borderRadius: '50%',
                        height: '6.4rem',
                    }}>
                    <img
                        src={headerPicture || null}
                        alt=""
                        style={{ overflow: 'hidden', borderRadius: '50%' }}
                    />
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    <Typography
                        sx={{
                            color: 'common.white',
                            weight: '700',
                            fontSize: '1.5rem',
                            marginTop: '35%',
                        }}>
                        Welcome Back !
                    </Typography>
                    <Typography
                        sx={{
                            color: 'gray',
                            weight: '700',
                            fontSize: '1.1rem',
                        }}>
                        {headerUsername || 'User'}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    [theme.breakpoints.down('smallMobile')]: {
                        gap: '3.4rem',
                    },
                    [theme.breakpoints.down('smallerMobile')]: {
                        gap: '2.4rem',
                    },
                    [theme.breakpoints.down('smallestMobile')]: {
                        gap: '1.4rem',
                    },
                    [theme.breakpoints.up('smallMobile')]: {
                        gap: '3.4rem',
                    },
                }}>
                <Button sx={stylebtn.button}>
                    <svg
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.5 7.45835C1.74312 7.45835 1.97628 7.5681 2.14818 7.76345C2.32009 7.9588 2.41667 8.22375 2.41667 8.50002V15.7917C2.41667 16.068 2.32009 16.3329 2.14818 16.5283C1.97628 16.7236 1.74312 16.8334 1.5 16.8334C1.25689 16.8334 1.02373 16.7236 0.851821 16.5283C0.679913 16.3329 0.583336 16.068 0.583336 15.7917V8.50002C0.583336 8.22375 0.679913 7.9588 0.851821 7.76345C1.02373 7.5681 1.25689 7.45835 1.5 7.45835ZM6.08334 1.20835V15.7917C6.08334 16.068 6.17991 16.3329 6.35182 16.5283C6.52373 16.7236 6.75689 16.8334 7 16.8334C7.24312 16.8334 7.47627 16.7236 7.64818 16.5283C7.82009 16.3329 7.91667 16.068 7.91667 15.7917V1.20835C7.91667 0.932087 7.82009 0.667135 7.64818 0.471784C7.47627 0.276434 7.24312 0.166687 7 0.166687C6.75689 0.166687 6.52373 0.276434 6.35182 0.471784C6.17991 0.667135 6.08334 0.932087 6.08334 1.20835ZM11.5833 4.85419V15.7917C11.5833 16.068 11.6799 16.3329 11.8518 16.5283C12.0237 16.7236 12.2569 16.8334 12.5 16.8334C12.7431 16.8334 12.9763 16.7236 13.1482 16.5283C13.3201 16.3329 13.4167 16.068 13.4167 15.7917V4.85419C13.4167 4.57792 13.3201 4.31297 13.1482 4.11762C12.9763 3.92227 12.7431 3.81252 12.5 3.81252C12.2569 3.81252 12.0237 3.92227 11.8518 4.11762C11.6799 4.31297 11.5833 4.57792 11.5833 4.85419Z"
                            fill="white"
                        />
                    </svg>
                </Button>
                <Button sx={strokebtn.button}>
                    <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.6933 13.7697C13.001 15.6156 12.125 18.75 9 18.75C5.875 18.75 5.00017 15.6156 5.30782 13.7697M9 1.25C7.125 1.25 5.58531 1.82937 4.625 3.75C3.375 6.25 5.25 10 1.5 13.75H16.5C12.75 10 14.625 6.25 13.375 3.75C12.4147 1.82937 10.875 1.25 9 1.25Z"
                            stroke="#FFF7F7"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Button>
                <Button sx={strokebtn.button} onClick={handelGoToSetting}>
                    <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.5 10C11.5 11.3807 10.3807 12.5 9 12.5C7.61929 12.5 6.5 11.3807 6.5 10C6.5 8.61929 7.61929 7.5 9 7.5C10.3807 7.5 11.5 8.61929 11.5 10Z"
                            stroke="#FFF7F7"
                            strokeWidth="2"
                        />
                        <path
                            d="M6.86943 2.91065C7.51249 0.696452 10.4875 0.696452 11.1306 2.91065C11.4729 4.08922 12.6219 4.78821 13.7618 4.51125C15.9033 3.99093 17.3908 6.70552 15.8924 8.39939C15.0948 9.30101 15.0948 10.699 15.8924 11.6006C17.3908 13.2945 15.9033 16.0091 13.7618 15.4887C12.6219 15.2118 11.4729 15.9108 11.1306 17.0894C10.4875 19.3035 7.51249 19.3035 6.86943 17.0894C6.52713 15.9108 5.37806 15.2118 4.23818 15.4887C2.09669 16.0091 0.609177 13.2945 2.1076 11.6006C2.90519 10.699 2.90519 9.30101 2.1076 8.39939C0.609178 6.70552 2.09669 3.99093 4.23818 4.51125C5.37806 4.78821 6.52713 4.08922 6.86943 2.91065Z"
                            stroke="#FFF7F7"
                            strokeWidth="2"
                        />
                    </svg>
                </Button>
            </Box>
        </Box>
    );
}

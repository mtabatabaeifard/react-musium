import { Alert, CircularProgress, Typography } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { Button, Link, TextField } from 'components';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function FirstFormSection() {
    const [loder, setLoder] = useState(false);
    const [cookies] = useCookies();
    const theme = useTheme();
    const [resendCode, setResendCode] = useState(false);
    const [varify, setVarify] = useState('');
    const [varifyState, setVarifyState] = useState(false);
    const emptyEntry = (e) => {
        e.preventDefault();
        if (!varify) setVarifyState(true);
        else setVarifyState(false);
    };
    const navigate = useNavigate();
    const handelLinkTOReset = (e) => {
        e.preventDefault();
        if (cookies?.forgotPasswordToken) {
            setLoder(true);
            setTimeout(() => {
                setLoder(false);
                const path = `/reset-Password`;
                navigate(path);
            }, 1500);
        }
        if (cookies?.singupToken) {
            setLoder(true);
            setTimeout(() => {
                setLoder(false);
                toast.success('Welcome to Musium');
                const path = `/home`;
                navigate(path);
            }, 3000);
        }
        // else toast.error('varify code is wrong')
    };
    const email = JSON.parse(localStorage.getItem('email'));

    useEffect(() => {}, [resendCode]);

    return (
        <Box height="100%">
            <Box
                fontSize={18}
                color="#fff"
                p={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="700"
                textAlign="center">
                <p> Enter the OTP sent to {email}</p>
            </Box>
            {loder ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    paddingBottom="5rem">
                    <CircularProgress />{' '}
                </Box>
            ) : (
                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    gap={4}>
                    <TextField
                        placeholder=" Enter varify code"
                        InputProps={{
                            style: {
                                fontSize: '1.6rem',
                                height: '100%',
                            },
                        }}
                        id="varify"
                        maxRows={6}
                        onChange={(e) => {
                            setVarifyState(false);
                            setVarify(e.target.value);
                        }}
                    />
                    {varifyState && (
                        <Alert
                            severity="error"
                            sx={{ width: '80%', fontSize: '1.2rem' }}>
                            {' '}
                            Enter varify code
                        </Alert>
                    )}
                    <Box display="flex" alignItems="start">
                        <Typography
                            sx={{
                                fontSize: '1.4rem',
                                color: theme.palette.primary.main,
                            }}>
                            Didnt get the varify code?
                        </Typography>
                        <Button
                            sx={{
                                color: theme.palette.primary.main,
                                backgroundColor: 'trasnsparent',
                                textDecoration: 'underline',
                                '&:hover': {
                                    backgroundColor: 'trasnsparent !important',
                                    textDecoration: 'underline',
                                },
                            }}
                            onClick={() => setResendCode(true)}>
                            resend
                        </Button>
                    </Box>
                </Box>
            )}
            <Box display="flex" justifyContent="center" pt={5}>
                <Link style={{ color: 'transparent' }} to="/Reset-password">
                    <Button onClick={varify ? handelLinkTOReset : emptyEntry}>
                        Submit
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}

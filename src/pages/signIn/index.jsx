import React from 'react';
import { Box, Typography } from '@mui/material';
import { Button, SignInButton } from 'components';
import { Link } from 'react-router-dom';
import { GoBackButton } from 'components/shared/GoBackButton';
import musiumLogo from '../../assets/images/LaunchScreen/musium logo.png';
import googleLogo from '../../assets/images/SignInLogos/google-icon.svg';
import facebookLogo from '../../assets/images/SignInLogos/facebook-icon.svg';
import appleLogo from '../../assets/images/SignInLogos/apple-icon.svg';

export function SignIn() {
    const beforeAfterLineStyle = {
        color: '#fff',
        fontSize: '1.6rem',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'end',
        marginY: '2.5rem',
        width: '100%',
        justifyContent: 'center',
        '&::before': {
            content: '""',
            display: 'inline-block',
            borderTop: '1.5px solid #FFFFFF',
            width: '15rem',
            margin: '0 2rem',
            transform: 'translateY(-1rem)',
        },
        '&::after': {
            content: '""',
            display: 'inline-block',
            borderTop: '1.5px solid #FFFFFF',
            width: '15rem',
            margin: '0 2rem',
            transform: 'translateY(-1rem)',
        },
    };

    const mainBoxStyle = {
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        maxWidth: '43rem',
        margin: '0 auto',
        minHeight: '900px',
    };

    return (
        <Box sx={mainBoxStyle}>
            <GoBackButton paddingTop="6rem" paddingLeft="1.5rem" />
            <img
                src={musiumLogo}
                alt="Logo"
                style={{ width: '100%', maxWidth: '40rem' }}
            />
            <Typography
                sx={{
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: '4.4rem',
                    letterSpacing: '.2rem',
                    marginTop: '4rem',
                    paddingX: '1.5rem',
                    textAlign: 'center',
                }}>
                Let’s get you in
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    marginTop: '3.5rem',
                }}>
                <SignInButton>
                    Continue with Google
                    <img src={googleLogo} alt="Google" />
                </SignInButton>
                <SignInButton>
                    Continue with Facebook
                    <img src={facebookLogo} alt="Facebook" />
                </SignInButton>
                <SignInButton>
                    Continue with Apple
                    <img src={appleLogo} alt="Apple" />
                </SignInButton>
            </Box>
            <Typography sx={beforeAfterLineStyle}>or</Typography>
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button>Log in with a password</Button>
            </Link>
            <Typography
                sx={{
                    color: '#fff',
                    fontSize: '1.6rem',
                    fontWeight: '400',
                    textShadow: '0px 2px 20px #06A0B5',
                    paddingY: '2.2rem',
                }}>
                Don’t have an account?
                <Link
                    to="/signup"
                    style={{
                        color: '#7CEEFF',
                        textDecoration: 'none',
                        marginLeft: '1rem',
                    }}>
                    Sign Up
                </Link>
            </Typography>
        </Box>
    );
}

/* eslint-disable no-console */
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Button, Link } from 'components';
import googleLogo from 'assets/images/SignInLogos/google-icon.svg';
import facebookLogo from 'assets/images/SignInLogos/facebook-icon.svg';
import appleLogo from 'assets/images/SignInLogos/apple-icon.svg';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

export default function Social({ divName, buttonName, linkTo }) {
    Social.propTypes = {
        divName: PropTypes.string.isRequired,
        buttonName: PropTypes.string.isRequired,
        linkTo: PropTypes.string.isRequired,
    };

    const styles = {
        icons: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'white',
            border: '1px solid #DBE7E8',
            borderRadius: '50%',
            height: '5rem',
            minWidth: '5rem',
            backgroundColor: '#1E1E1E',
        },
        button: {
            height: '3.6875rem',
            width: '90%',
            background: '#06A0B5',
            color: '#FFFFFF',
            borderRadius: ' 50px',
            '&:hover': {
                color: '#fff',
            },
        },
    };
    const successNotify = () => toast.success('Login was successful !');
    const errorNotify = () => toast.error('Login failed');

    const navigate = useNavigate();

    const [cookies, setCookie] = useCookies(['accessToken']);
    useEffect(() => {
        if (cookies.accessToken) {
            navigate('/home');
        }
    }, []);
    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            setCookie(
                'accessToken',
                tokenResponse.access_token,
                { maxAge: 14 * 24 * 3600 }, // 2 weeks
            );
            successNotify();
            setTimeout(() => {
                navigate('/home');
            }, 3000);
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                },
            );
            localStorage.setItem('headerName', userInfo.data.given_name);
            localStorage.setItem('headerPicture', userInfo.data.picture);
        },
        onError: () => {
            errorNotify();
            // console.log(errorResponse);
        },
    });

    return (
        <Box pt={4.5}>
            <p className="title">or continue with</p>
            <Box
                paddingTop={4.5}
                display="flex"
                justifyContent="center"
                gap={7.5}>
                <Button onClick={googleLogin} sx={styles.icons}>
                    <img src={googleLogo} alt="Google" />
                </Button>
                <Button sx={styles.icons}>
                    <img src={facebookLogo} alt="Facebook" />
                </Button>
                <Button sx={styles.icons}>
                    {' '}
                    <img src={appleLogo} alt="Apple" />
                </Button>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                gap={0.5}
                paddingTop={4}
                color="#fff"
                fontSize={16}>
                <p>{divName}</p>
                <Link to={linkTo}>{buttonName}</Link>{' '}
            </Box>
        </Box>
    );
}

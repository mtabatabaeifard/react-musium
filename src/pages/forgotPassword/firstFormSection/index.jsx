/* eslint-disable no-console */
import { Alert } from '@mui/material';
import { Box } from '@mui/system';
import { Button, TextField } from 'components';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export function FormSection() {
    const [cookies, setCookies] = useCookies(['forgotPasswordToken']);
    const [email, setEmail] = useState('');
    const [emailState, setEmailState] = useState(false);
    const [emailError, setemailError] = useState(false);
    const emptyEntry = (e) => {
        e.preventDefault();
        if (!email) setEmailState(true);
        else setEmailState(false);
    };
    function isValidEmail(mail) {
        return /\S+@\S+\.\S+/.test(mail);
    }
    const navigate = useNavigate();
    const handelForgotPasssword = () => {
        if (!isValidEmail(email)) setemailError(true);
        else {
            console.log(cookies);
            localStorage.setItem('email', JSON.stringify(email));
            setCookies('forgotPasswordToken', 'just for forgotPassword', {
                maxAge: 24,
            });
            const path = '/varify';
            navigate(path);
        }
    };

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
                <p>
                    {' '}
                    Don’t worry ! It happens. Please enter your email, we will
                    send the OTP in this email.
                </p>
            </Box>
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                gap={4}>
                <TextField
                    onChange={(e) => {
                        setemailError(false);
                        setEmailState(false);
                        setEmail(e.target.value);
                    }}
                    placeholder=" Enter your email"
                    InputProps={{
                        style: {
                            fontSize: '1.6rem',
                            height: '100%',
                        },
                    }}
                    id="email-input"
                    maxRows={6}
                />
                {emailState && (
                    <Alert
                        severity="error"
                        sx={{ width: '80%', fontSize: '1.2rem' }}>
                        {' '}
                        Enter your email
                    </Alert>
                )}
                {emailError && (
                    <Alert
                        severity="error"
                        sx={{ width: '80%', fontSize: '1.2rem' }}>
                        {' '}
                        Email is invalid
                    </Alert>
                )}
            </Box>
            <Box display="flex" justifyContent="center" pt={5}>
                <Button onClick={email ? handelForgotPasssword : emptyEntry}>
                    Continue
                </Button>
            </Box>
        </Box>
    );
}

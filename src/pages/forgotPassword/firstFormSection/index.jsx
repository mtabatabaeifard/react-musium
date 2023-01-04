import { Alert } from '@mui/material';
import { Box } from '@mui/system';
import { Button, Link, TextField } from 'components';
import { useState } from 'react';

export function FormSection() {
    const [email, setEmail] = useState('');
    const [emailState, setEmailState] = useState(false);
    const emptyEntry = (e) => {
        e.preventDefault();
        if (!email) setEmailState(true);
        else setEmailState(false);
    };
    const handelForgotPasssword = () => {
        localStorage.setItem('email', JSON.stringify(email));
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
            </Box>
            <Box display="flex" justifyContent="center" pt={5}>
                <Link to="/Reset-password" style={{ color: 'transparent' }}>
                    <Button
                        onClick={email ? handelForgotPasssword : emptyEntry}>
                        Continue
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}

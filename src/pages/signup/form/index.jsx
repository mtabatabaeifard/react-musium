import IconButton from '@mui/material/IconButton';
import { Alert, Box, FormControl, InputAdornment } from '@mui/material';
import { TextField } from 'components/shared/TextField';
import { Button } from 'components/shared/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import '../styles/style.css';

export function FormSection() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showconfirmPassword, setShowconfirmPassword] = React.useState(false);
    const handleClickShowconfirmPassword = () =>
        setShowconfirmPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [emailState, setEmailState] = useState(false);
    const [passwordState, setPasswordState] = useState(false);
    const [confirmPasswordState, setconfirmPasswordState] = useState(false);
    const [passwordComparison, setPasswordComparison] = useState(false);
    const inputField = (e) => {
        e.preventDefault();
        if (!form.password) setPasswordState(true);
        else setPasswordState(false);
        if (!form.email) setEmailState(true);
        else setEmailState(false);
        if (!form.confirmPassword) setconfirmPasswordState(true);
        else setconfirmPasswordState(false);
    };
    const handelSignUp = () => {
        if (form.password !== form.confirmPassword) setPasswordComparison(true);
    };
    return (
        <Box paddingTop={4}>
            <Box pb={5}>
                <FormControl
                    variant="outlined"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2.3rem',
                    }}>
                    <TextField
                        placeholder="Email"
                        InputProps={{
                            style: {
                                height: '100%',
                                fontSize: '1.6rem',
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon
                                        fontSize="large"
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.27)',
                                        }}
                                    />
                                </InputAdornment>
                            ),
                        }}
                        id="email-sign-up"
                        maxRows={6}
                        onChange={(e) => {
                            setEmailState(false);
                            setForm({
                                ...form,
                                email: e.target.value,
                            });
                        }}
                    />
                    {emailState && (
                        <Alert
                            severity="error"
                            sx={{ width: '80%', fontSize: '1.2rem' }}>
                            Enter your email
                        </Alert>
                    )}

                    <TextField
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            style: {
                                height: '100%',
                                fontSize: '1.6rem',
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.27)',
                                        }}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {showPassword ? (
                                            <VisibilityOff
                                                fontSize="large"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.27)',
                                                }}
                                            />
                                        ) : (
                                            <Visibility
                                                fontSize="large"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.27)',
                                                }}
                                            />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon
                                        fontSize="large"
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.27)',
                                        }}>
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </LockOutlinedIcon>
                                </InputAdornment>
                            ),
                        }}
                        id="password-sign-up"
                        maxRows={6}
                        onChange={(e) => {
                            setPasswordState(false);
                            setPasswordComparison(false);
                            setForm({
                                ...form,
                                password: e.target.value,
                            });
                        }}
                    />
                    {passwordState && (
                        <Alert
                            severity="error"
                            sx={{ width: '80%', fontSize: '1.2rem' }}>
                            Enter your pssword
                        </Alert>
                    )}
                    {passwordComparison && (
                        <Alert
                            severity="error"
                            sx={{ width: '80%', fontSize: '1.2rem' }}>
                            Enterd values are not equal
                        </Alert>
                    )}
                    <TextField
                        placeholder="Password"
                        type={showconfirmPassword ? 'text' : 'password'}
                        InputProps={{
                            style: {
                                height: '100%',
                                fontSize: '1.6rem',
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.27)',
                                        }}
                                        onClick={handleClickShowconfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {showconfirmPassword ? (
                                            <VisibilityOff
                                                fontSize="large"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.27)',
                                                }}
                                            />
                                        ) : (
                                            <Visibility
                                                fontSize="large"
                                                sx={{
                                                    color: 'rgba(255, 255, 255, 0.27)',
                                                }}
                                            />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon
                                        fontSize="large"
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.27)',
                                        }}>
                                        {showconfirmPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </LockOutlinedIcon>
                                </InputAdornment>
                            ),
                        }}
                        id="confirm-password-sign-up"
                        maxRows={6}
                        onChange={(e) => {
                            setconfirmPasswordState(false);
                            setPasswordComparison(false);
                            setForm({
                                ...form,
                                confirmPassword: e.target.value,
                            });
                        }}
                    />
                    {confirmPasswordState && (
                        <Alert
                            severity="error"
                            sx={{ width: '80%', fontSize: '1.2rem' }}>
                            Enter your pssword
                        </Alert>
                    )}
                    {passwordComparison && (
                        <Alert
                            severity="error"
                            sx={{ width: '80%', fontSize: '1.2rem' }}>
                            Enterd values are not equal
                        </Alert>
                    )}
                </FormControl>
            </Box>
            <Box display="flex" justifyContent="center">
                <Button
                    onClick={
                        form.email && form.password && form.confirmPassword
                            ? handelSignUp
                            : inputField
                    }>
                    Sign up
                </Button>
            </Box>
        </Box>
    );
}

/* eslint-disable no-console */
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import {
    Alert,
    Box,
    CircularProgress,
    FormControl,
    InputAdornment,
} from '@mui/material';
import { TextField } from 'components/shared/TextField';
import { Button } from 'components/shared/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [firstNemeState, setFirstNemeState] = useState(false);
    const [lastNameState, setLastNameState] = useState(false);
    const [emailState, setEmailState] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [passwordState, setPasswordState] = useState(false);
    const [confirmPasswordState, setConfirmPasswordState] = useState(false);
    const [passwordComparison, setPasswordComparison] = useState(false);
    const [loder, setLoder] = useState(false);
    const [passwordHave8Character, setpasswordHave8Character] = useState(false);
    const [cookies, setCookies] = useCookies(['singupToken']);
    const inputField = (e) => {
        e.preventDefault();
        if (!form.password) setPasswordState(true);
        else setPasswordState(false);
        if (!form.email) setEmailState(true);
        else setEmailState(false);
        if (!form.confirmPassword) setConfirmPasswordState(true);
        else setConfirmPasswordState(false);
        if (!form.lastName) setLastNameState(true);
        else setLastNameState(false);
        if (!form.firstName) setFirstNemeState(true);
        else setFirstNemeState(false);
    };
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const navigate = useNavigate();
    const handelSignUp = (e) => {
        e.preventDefault();
        if (!isValidEmail(form.email)) setemailError(true);
        else if (Number(form.password.length) < 8)
            setpasswordHave8Character(true);
        else if (form.password !== form.confirmPassword)
            setPasswordComparison(true);
        else {
            localStorage.setItem('email', JSON.stringify(form?.email));
            console.log(cookies);
            setCookies('singupToken', 'just for signUP', {
                maxAge: 24,
            });
            setLoder(true);
            setTimeout(() => {
                setLoder(false);
                const path = `/varify`;
                navigate(path);
            }, 3000);
        }
    };
    const name = [form.firstName, form.lastName].join(' ');
    localStorage.setItem('headerName', name);
    return (
        <Box paddingTop={4}>
            {loder ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    paddingBottom="5rem">
                    <CircularProgress />{' '}
                </Box>
            ) : (
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
                            placeholder="First name"
                            InputProps={{
                                style: {
                                    height: '100%',
                                    fontSize: '1.6rem',
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon
                                            fontSize="large"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.27)',
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) => {
                                setFirstNemeState(false);
                                setForm({
                                    ...form,
                                    firstName: e.target.value,
                                });
                            }}
                        />
                        {firstNemeState && (
                            <Alert
                                severity="error"
                                sx={{ width: '80%', fontSize: '1.2rem' }}>
                                Enter your first name
                            </Alert>
                        )}
                        <TextField
                            placeholder="Last name"
                            InputProps={{
                                style: {
                                    height: '100%',
                                    fontSize: '1.6rem',
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon
                                            fontSize="large"
                                            sx={{
                                                color: 'rgba(255, 255, 255, 0.27)',
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            onChange={(e) => {
                                setLastNameState(false);
                                setForm({
                                    ...form,
                                    lastName: e.target.value,
                                });
                            }}
                        />
                        {lastNameState && (
                            <Alert
                                severity="error"
                                sx={{ width: '80%', fontSize: '1.2rem' }}>
                                Enter your last name
                            </Alert>
                        )}
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
                                setemailError(false);
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
                        {emailError && (
                            <Alert
                                severity="error"
                                sx={{ width: '80%', fontSize: '1.2rem' }}>
                                Email is invalid
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
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
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
                                setpasswordHave8Character(false);
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
                        {passwordHave8Character && (
                            <Alert
                                severity="error"
                                sx={{ width: '80%', fontSize: '1.2rem' }}>
                                Password must be at least 8 characters
                            </Alert>
                        )}
                        <TextField
                            placeholder="Confirm password"
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
                                            onClick={
                                                handleClickShowconfirmPassword
                                            }
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
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
                                setConfirmPasswordState(false);
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
            )}

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

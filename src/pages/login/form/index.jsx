import IconButton from '@mui/material/IconButton';
import { Alert, Box, FormControl, InputAdornment } from '@mui/material';
import { TextField } from 'components/shared/TextField';
import { Button } from 'components/shared/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import '../styles/style.css';
import { CheckBoxButton } from 'components/shared/CheckBoxButton';
import { Link } from 'components';
import { useNavigate } from 'react-router-dom';

export function FormSection() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const handelLogin = (e) => {
        e.preventDefault();
        const path = `/home`;
        navigate(path);
    };

    const [emailState, setEmailState] = useState(false);
    const [passwordState, setPasswordState] = useState(false);
    const inputField = (e) => {
        e.preventDefault();
        if (!form.password) setPasswordState(true);
        else setPasswordState(false);
        if (!form.email) setEmailState(true);
        else setEmailState(false);
    };
    return (
        <Box paddingTop={4}>
            <Box>
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
                                fontSize: '1.6rem',
                                height: '100%',
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
                        id="email-input-login"
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
                        autoComplete="off"
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            style: {
                                fontSize: '1.6rem',
                                height: '100%',
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.27)',
                                        }}
                                        fontSize="large"
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
                        id="password-input-login"
                        maxRows={6}
                        onChange={(e) => {
                            setPasswordState(false);
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
                </FormControl>
                <CheckBoxButton label="Remember me" />
            </Box>
            <Box display="flex" justifyContent="center">
                <Button
                    type="submit"
                    onClick={
                        form.email && form.password ? handelLogin : inputField
                    }>
                    Log in
                </Button>
            </Box>
            <Link className="forget-pasword" to="/forgot-password">
                Forgot the password?
            </Link>
        </Box>
    );
}

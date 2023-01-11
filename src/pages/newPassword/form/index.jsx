/* eslint-disable no-console */
import IconButton from '@mui/material/IconButton';
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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function FormSection() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPassword2, setShowPassword2] = React.useState(false);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [consfirnpasswordState, setConfirmPassword] = useState(false);
    const [passwordState, setPasswordState] = useState(false);
    const [passwordComparison, setPasswordComparison] = useState(false);
    const [passwordHave8Character, setpasswordHave8Character] = useState(false);
    const [form, setForm] = useState({
        confirmPassword: '',
        password: '',
    });
    const emptyEntry = (e) => {
        e.preventDefault();
        console.log(form);
        if (!form.password) setPasswordState(true);
        else setPasswordState(false);
        if (!form.confirmPassword) setConfirmPassword(true);
        else setConfirmPassword(false);
    };

    const [loder, setLoder] = useState(false);
    const navigate = useNavigate();
    const handelResetPassword = (e) => {
        e.preventDefault();
        if (Number(form.password.length) < 8) setpasswordHave8Character(true);
        else if (form.password !== form.confirmPassword)
            setPasswordComparison(true);
        else {
            setLoder(true);
            setTimeout(() => {
                toast.success('Your password has been successfully changed');
                setLoder(true);
                const path = `/login`;
                navigate(path);
            }, 2000);
        }
    };

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
                            placeholder="Enter your new password"
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
                            id="password-New-password"
                            maxRows={6}
                            onChange={(e) => {
                                setPasswordComparison(false);
                                setPasswordState(false);
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
                                Enter your new pssword
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
                            placeholder="Confirm your new password"
                            type={showPassword2 ? 'text' : 'password'}
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
                                            onClick={handleClickShowPassword2}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end">
                                            {showPassword2 ? (
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
                                            {showPassword2 ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </LockOutlinedIcon>
                                    </InputAdornment>
                                ),
                            }}
                            id="confirm-password-New-password"
                            maxRows={6}
                            onChange={(e) => {
                                setPasswordComparison(false);
                                setConfirmPassword(false);
                                setForm({
                                    ...form,
                                    confirmPassword: e.target.value,
                                });
                            }}
                        />
                        {consfirnpasswordState && (
                            <Alert
                                severity="error"
                                sx={{ width: '80%', fontSize: '1.2rem' }}>
                                Confirm your new pssword
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
                        form.confirmPassword && form.password
                            ? handelResetPassword
                            : emptyEntry
                    }>
                    Reset password
                </Button>
            </Box>
        </Box>
    );
}

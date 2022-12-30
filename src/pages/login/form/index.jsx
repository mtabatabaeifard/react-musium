import IconButton from '@mui/material/IconButton';
import { Box, FormControl, InputAdornment,  } from '@mui/material';
import { TextField } from 'components/shared/TextField';
import { Button } from 'components/shared/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import '../styles/style.css';
import { CheckBoxButton } from 'components/shared/CheckBoxButton';
import { Link } from 'components';

export function FormSection() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box  paddingTop={4}>
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
                        id="outlined-multiline-flexible"
                        maxRows={6}
                    />
                    <TextField
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
                        id="outlined-multiline-flexible"
                        maxRows={6}
                    />
                </FormControl>
                <CheckBoxButton label="Remember me" />
            </Box>
            <Box display='flex' justifyContent='center'>
                <Button>Log in</Button>
            </Box>
            <Link className='forget-pasword'  to ="/forgot-password" >Forgot the password?</Link>
        </Box>
    );
}

import IconButton from '@mui/material/IconButton';
import { Box, FormControl, InputAdornment, Link,  } from '@mui/material';
import { TextField } from 'components/shared/TextField';
import { Button } from 'components/shared/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import '../index.css'
import { CheckBoxButton } from 'components/shared/CheckBoxButton';

export function FormSection() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const styles = {
        button: {
            height: '5.9rem',
            width: '90%'
            , background: '#06A0B5',
            color: '#FFFFFF',
            borderRadius: ' 50px',
            fontSize: '1.6rem'
            , '&:hover': {
                color: '#fff'
            }
        }
    }

    return (
        <Box paddingTop={4}>

            <Box >
                <FormControl variant="outlined" sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: '2.3rem',
                }}>
                    <TextField
                        placeholder='Email'
                        InputProps={{
                            style: {
                                height: "100%",
                              },
                            startAdornment: <InputAdornment position="start"><MailOutlineIcon sx={{ color: 'rgba(255, 255, 255, 0.27)' }} /></InputAdornment>,
                        }}
                        id="outlined-multiline-flexible"
                        maxRows={6}
                    />
                    <TextField 
                        placeholder='Password'
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            style: {
                                height: "100%",
                              },
                            endAdornment: <InputAdornment position="end">
                                <IconButton sx={{ color: 'rgba(255, 255, 255, 0.27)' }}
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff sx={{ color: 'rgba(255, 255, 255, 0.27)' }} /> : <Visibility sx={{ color: 'rgba(255, 255, 255, 0.27)' }} />}
                                </IconButton>
                            </InputAdornment>,
                            startAdornment:  <InputAdornment position="start">
                            <LockOutlinedIcon sx={{ color: 'rgba(255, 255, 255, 0.27)' }} >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </LockOutlinedIcon>
                        </InputAdornment>
                        }}
                        id="outlined-multiline-flexible"
                        maxRows={6}
                    />
                </FormControl>
                <CheckBoxButton label="Remember me" />
            </Box>
            <Box display='flex' justifyContent='center'>
                <Button
                    sx={styles.button}
                    variant="outlined" size='medium'>Log in</Button>
            </Box>
            <Link marginTop={3} marginBottom={5.5} sx={{ color: '#00C2CB', textDecoration: 'none', display: 'flex', justifyContent: 'center',fontSize:'1.4rem' ,cursor: 'pointer',}} to ="/forgetpassword" >Forgot the password?</Link>
        </Box>
    )
}
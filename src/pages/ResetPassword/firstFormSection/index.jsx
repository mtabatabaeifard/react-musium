import { Alert } from '@mui/material';
import { Box } from '@mui/system';
import { Button, Link, TextField } from 'components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { MuiOtpInput } from 'mui-one-time-password-input'

export function FirstFormSection() {
    const [varify, setVarify] = useState('')
    const [varifyState, setVarifyState] = useState(false)
    const emptyEntry = (e) => {
        e.preventDefault();
        if (!varify) setVarifyState(true)
        else setVarifyState(false)
    }
    const navigate = useNavigate();
    const handelLinkTOReset = (e) => {
        e.preventDefault();
        const path = `/new-password`;
        navigate(path);
    }
    const email = JSON.parse(localStorage.getItem('email'));

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
                <p> Enter the OTP sent to {email}</p>
            </Box>
            <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                gap={4}>
                <TextField
                    placeholder=" Enter varify code"
                    InputProps={{
                        style: {
                            fontSize: '1.6rem',
                            height: '100%',
                        },
                    }}
                    id="outlined-multiline-flexible"
                    maxRows={6}
                    onChange={(e) => {
                        setVarifyState(false)
                        setVarify(e.target.value)
                    }}
                />
                {varifyState && <Alert severity="error" sx={{ width: '80%',fontSize:'1.2rem' }} > Enter varify code</Alert>}

                {/* <MuiOtpInput length={6} value={value} onChange={handleChange} /> */}
            </Box>
            <Box display="flex" justifyContent="center" pt={5}>
                <Link style={{ color: 'transparent' }} to="/Reset-password">
                    <Button onClick={varify ? handelLinkTOReset : emptyEntry}>Submit</Button>
                </Link>
            </Box>
        </Box>
    );
}

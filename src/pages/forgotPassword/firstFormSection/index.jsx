import { Box } from "@mui/system";
import {  Button, Link, TextField } from "components";
import { useState } from "react";

export function FormSection() {
    const [Email, setEmail] = useState([]);
    

    return (
        <Box  height='100%' >

            <Box fontSize={18} color='#fff' p={3} display='flex' justifyContent='center' alignItems='center' fontWeight='700' textAlign='center'>
                <p > Don’t worry ! It happens. Please enter your email, we will send the OTP in this email.</p>
            </Box>
            <Box display='flex' alignItems='center' flexDirection='column' gap={4}>

                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=' Enter your email'
                    InputProps={{
                        style: {
                            fontSize: '1.6rem',
                            height: "100%",
                        },

                    }}
                    id="outlined-multiline-flexible"
                    maxRows={6}
                />
             
            </Box>
            <Box display='flex' justifyContent='center' pt={5}>
                <Link to='/Reset-password' style={{color:'transparent'}}>

                    <Button onClick={localStorage.setItem("email", JSON.stringify(Email))} >
                        Continue
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}
import { Box } from "@mui/system";
import { Button, Link, TextField } from "components";
import React from 'react'
// import { MuiOtpInput } from 'mui-one-time-password-input'


export function FirstFormSection() {
//     const [value, setValue] = React.useState('')

//   const handleChange = (newValue) => {
//     setValue(newValue)
//   }
    
    const email =JSON.parse(localStorage.getItem("email"))


    return (
        <Box  height='100%' >

            <Box fontSize={18} color='#fff' p={3} display='flex' justifyContent='center' alignItems='center' fontWeight='700' textAlign='center'>
                <p > Enter the OTP sent to {email}</p>
            </Box>
            <Box display='flex' alignItems='center' flexDirection='column' gap={4}>
            <TextField
                    placeholder=' Enter varify code'
                    InputProps={{
                        style: {
                            fontSize: '1.6rem',
                            height: "100%",
                        },

                    }}
                    id="outlined-multiline-flexible"
                    maxRows={6}
                />
                


   {/* <MuiOtpInput length={6} value={value} onChange={handleChange} /> */}

            </Box>
            <Box display='flex' justifyContent='center' pt={5}>
                <Link style={{color:'transparent'}} to='/Reset-password'>

                    <Button>

                        Submit
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}
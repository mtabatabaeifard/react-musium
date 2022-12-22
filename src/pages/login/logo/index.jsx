import { Box } from '@mui/system'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Logo from 'assets/images/musium-logo.jpg';

export function LogoSection() {
    return (
        <Box>
            <Box display='flex' gap={2} >
                <KeyboardBackspaceIcon fontSize="large" sx={{ color: 'white', cursor: 'pointer' }} />
                <Box width='80%' justifyContent='center'>
                    <img width='100%' alt='sd' src={Logo} />
                </Box>
            </Box>
            <Box fontSize={32} color='#fff' p={4} display='flex' justifyContent='center'>
                <p >Login to your account</p>
            </Box>
        </Box>
    )
}
import { Box } from '@mui/system';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Logo from 'assets/images/musium-logo.jpg';

export function LogoSection() {
    return (
        <Box>
            <Box display="flex" justifyContent="center" gap={2}>
                <KeyboardBackspaceIcon
                    fontSize="100%"
                    sx={{
                        color: 'white',
                        cursor: 'pointer',
                        height: '3.5rem',
                        width: '5rem',
                    }}
                />
                <Box width="80%" justifyContent="center">
                    <img width="275px" height="215px" alt="sd" src={Logo} />
                </Box>
            </Box>
            <Box
                fontSize={32}
                color="#fff"
                p={1.5}
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontWeight="700">
                <p>Login to your account</p>
            </Box>
        </Box>
    );
}

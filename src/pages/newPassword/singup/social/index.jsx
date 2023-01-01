import { Box } from '@mui/system';
import { Button, Link } from "components";
import googleLogo from 'assets/images/SignInLogos/google-icon.svg';
import facebookLogo from 'assets/images/SignInLogos/facebook-icon.svg';
import appleLogo from 'assets/images/SignInLogos/apple-icon.svg';


export function Social() {
    const styles = {
        icons: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'white',
            border: '1px solid #DBE7E8',
            borderRadius: '50%',
            height: '5rem',
            minWidth: '5rem',
            backgroundColor: '#1E1E1E',
        },
        button: {
            height: '3.6875rem',
            width: '90%',
            background: '#06A0B5',
            color: '#FFFFFF',
            borderRadius: ' 50px',
            '&:hover': {
                color: '#fff',
            },
        },
    };
    return (
        <Box pt={4.5}>
            <p className='title'>or continue with</p>
            <Box paddingTop={4.5} display='flex' justifyContent='center' gap={7.5}>
                <Button sx={styles.icons} ><img src={googleLogo} alt="Google" />
                </Button>
                <Button sx={styles.icons} ><img src={facebookLogo} alt="Facebook" />
                </Button>
                <Button sx={styles.icons}>  <img src={appleLogo} alt="Apple" />
                </Button>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                gap={0.5}
                paddingTop={4}
                color="#fff"
                fontSize={16}>
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>{' '}
            </Box>
        </Box>
    );
}

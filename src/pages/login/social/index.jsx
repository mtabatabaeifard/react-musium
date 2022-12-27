import { Box } from '@mui/system';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import AppleIcon from '@mui/icons-material/Apple';
import googleIcon from 'assets/images/google-Icon.png';
import { Button, Link } from 'components';

export function social() {
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
        link: {
            display: 'flex',
            alignItems: 'center',
            color: '#7CEEFF !important',
        },
    };
    return (
        <Box>
            <p className="title">or continue with</p>
            <Box
                paddingTop={4.5}
                display="flex"
                justifyContent="center"
                gap={7.5}>
                <Button sx={styles.icons}>
                    <img src={googleIcon} alt="" />
                </Button>
                <Button sx={styles.icons}>
                    <FacebookSharpIcon
                        fontSize="large"
                        sx={{ color: '#0165E1' }}
                    />
                </Button>
                <Button sx={styles.icons}>
                    {' '}
                    <AppleIcon fontSize="large" sx={{ color: '#fff' }} />{' '}
                </Button>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                gap={0.5}
                paddingTop={4}
                color="#fff"
                fontSize={16}>
                <p>Don’t have an account?</p>
                <Link underline="hover" to="/signup">
                    Sign Up
                </Link>{' '}
            </Box>
        </Box>
    );
}

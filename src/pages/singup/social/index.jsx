import { Box } from "@mui/system";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import AppleIcon from '@mui/icons-material/Apple';
import googleIcon from 'assets/images/google-Icon.png';
import { Link } from "@mui/material";
import { Button } from "components";


export function socialSingUp() {
  const styles = {
    icons: {
      display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer',
      color: 'white', border: '1px solid #DBE7E8', borderRadius: '50%', height: '5rem', minWidth: '5rem',
      backgroundColor: '#1E1E1E'
    },
    button: {
      height: '3.6875rem',
      width: '90%'
      , background: '#06A0B5',
      color: '#FFFFFF',
      borderRadius: ' 50px'
      , '&:hover': {
        color: '#fff'
      }
    }
  }
  return (
    <Box pt={8.5}>
      <p className='title'>or continue with</p>
      <Box paddingTop={4.5} display='flex' justifyContent='center' gap={7.5}>
        <Button sx={styles.icons} ><img src={googleIcon} alt="" /></Button>
        <Button sx={styles.icons} ><FacebookSharpIcon fontSize="large" sx={{ color: '#0165E1' }} /></Button>
        <Button sx={styles.icons}>  <AppleIcon fontSize="large" sx={{ color: '#fff' }} /> </Button>
      </Box>
      <Box display='flex' justifyContent='center' gap={.5} paddingTop={4} color='#fff' fontSize={16}> <p>Already have an account?</p>  <Link sx={{ display: 'flex', alignItems: 'center' , color:'#7CEEFF'}} underline="hover" href ='/login'>Login</Link> </Box>
    </Box>
  )
}
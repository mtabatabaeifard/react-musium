import React from 'react';
import Logo from 'components/Logo';
import { Box } from '@mui/system';
import { FormSectionSingUP } from './form';
import { socialSignUp } from './social';
import './styles/style.css'

export default function SignUp() {

  return (
    <Box sx={{
      maxWidth: 428,
      mx: 'auto',
      background: '#000',
      pt: 35 / 8,
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Century Gothic'
    }}>
      <Logo title='Singup an account ' />
      {FormSectionSingUP()}
      {socialSignUp()}
    </Box>

  )
}

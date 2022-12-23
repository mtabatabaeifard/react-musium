import React from 'react';
import { Box } from '@mui/system';
import { LogoSectionSingUp } from './logo';
import { FormSectionSingUP } from './form';
import {socialSingUp } from './social';
import './styles/style.css'


export default function SingUp() {

  return (
      <Box  sx={{
        maxWidth: 428,
        mx: 'auto',
        background: '#000',
        pt: 35 / 8,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Century Gothic'}}>
        {LogoSectionSingUp()}
        {FormSectionSingUP()}
        {socialSingUp()}
      </Box>
    
  )
}
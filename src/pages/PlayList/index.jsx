import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import PlayListHeader from 'layout/header/PlayListHeader'
import PlayListImage1 from 'assets/images/PlayListImage1.png';
import PlayListItems from 'components/PlayListItems';
import PlayListFooter from 'layout/footer/PlayListFooter';

function PlayList () {
    const theme = useTheme()

  return (
    <div style={{position:"relative"}}>
        <PlayListHeader />

        <Box sx={{ 
            maxWidth: theme.breakpoints.values.smallMobile,
            mx: 'auto',
            background: '#1E1E1E',
            textAlign: 'center',
            pt: '3.6rem',
            
        }}>
            <img src={PlayListImage1} alt="song" />
            <Typography sx={{
                fontWeight: '700',
                fontSize: '3.4rem',
                color: theme.palette.text.primary ,
                fontFamily: 'Century Gothic',
                letterSpacing: '0.095em',
                pt:'2.1rem'
            }}>Lofi Loft</Typography>
            <Typography sx={{
                fontWeight: '700',
                fontSize: '1.3rem',
                color: theme.palette.secondary.main ,
                fontFamily: 'Century Gothic',
                letterSpacing: '0.06em',
                
            }}>soft, chill, dreamy, lo-fi beats</Typography>
            
        </Box>
 

        <PlayListItems />

        <PlayListFooter />
         
    </div>
)}

export default PlayList
import React from 'react';
import { Box, Typography } from '@mui/material';
import circle from '../../assets/images/Welcome/Ellipse.svg';
import mainImage from '../../assets/images/Welcome/img_girl.png';
import './style.css';

export function Welcome() {
    return (
        <Box
            sx={{
                bgcolor: 'primary.medium',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundImage: `url(${mainImage})`,
                backgroundPositionY: '15rem',
                backgroundRepeat: 'no-repeat',
            }}>
            <Box display="flex" flexDirection="column">
                <Box display="flex" justifyContent="space-between">
                    <img src={circle} alt="" className="circle big-circle" />
                    <img src={circle} alt="" className="circle small-circle" />
                </Box>
                <img src={circle} alt="" className="circle medium-circle" />
            </Box>
            <Box
                sx={{
                    bgcolor: 'common.black',
                    borderRadius: '54px 54px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40rem',
                }}>
                <Typography
                    sx={{
                        color: 'common.white',
                        fontSize: '2.8rem',
                        fontWeight: '600',
                        width: '88%',
                        letterSpacing: '.2rem',
                        textAlign: 'center',
                        lineHeight: '3.7rem',
                    }}>
                    From the latest to the greatest hits, play your favorite
                    onmusium now!
                </Typography>
            </Box>
        </Box>
    );
}

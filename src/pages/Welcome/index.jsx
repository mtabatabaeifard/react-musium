import React from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from 'components';
import { Link } from 'react-router-dom';
import { SwiperSlider } from '../../components/shared/Slider';
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
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40rem',
                }}>
                <Typography
                    sx={{
                        color: 'common.white',
                        fontSize: '2.6rem',
                        fontWeight: '600',
                        width: '83%',
                        letterSpacing: '.2rem',
                        textAlign: 'center',
                        lineHeight: '3.7rem',
                    }}>
                    <SwiperSlider style={{ color: 'white' }}>
                        From the{' '}
                        <Box component="span" sx={{ color: '#76D7E6' }}>
                            latest{' '}
                        </Box>{' '}
                        to the{' '}
                        <Box component="span" sx={{ color: '#7CEEFF' }}>
                            greatest{' '}
                        </Box>
                        hits, play your favorite on
                        <Box
                            component="span"
                            sx={{
                                color: 'primary.main',
                                textShadow: '0px 0px 12px #39c0d4',
                            }}>
                            {' '}
                            musium{' '}
                        </Box>{' '}
                        now!
                    </SwiperSlider>
                </Typography>
                <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                    <Button>Get Started</Button>
                </Link>
            </Box>
        </Box>
    );
}

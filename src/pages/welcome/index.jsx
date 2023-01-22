import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Button } from 'components';
import { Link } from 'react-router-dom';
import { SwiperSlider } from './Slider';
import circle from '../../assets/images/Welcome/Ellipse.svg';
import mainImage from '../../assets/images/Welcome/img_girl.png';
import './style.css';

export function Welcome() {
    const mainBoxStyles = {
        bgcolor: 'primary.medium',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: `url(${mainImage})`,
        backgroundPositionY: '30%',
        backgroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
        maxWidth: '43rem',
        margin: '0 auto',
    };

    return (
        <Box sx={mainBoxStyles}>
            <Box display="flex" flexDirection="column">
                <Box display="flex" justifyContent="space-between">
                    <img src={circle} alt="" className="circle big-circle" />
                    <img src={circle} alt="" className="circle small-circle" />
                </Box>
                <img src={circle} alt="" className="circle medium-circle" />
            </Box>
            <Box
                sx={{
                    bgcolor: 'primary.dark',
                    borderRadius: '54px 54px 0 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '40rem',
                    padding: '2rem',
                }}>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                        justifyContent: 'space-evenly',
                        padding: '0',
                    }}>
                    <Typography
                        sx={{
                            color: 'text.primary',
                            fontSize: '2.6rem',
                            fontWeight: '600',
                            width: '93%',
                            letterSpacing: '.2rem',
                            textAlign: 'center',
                            lineHeight: '3.7rem',
                        }}>
                        <SwiperSlider style={{ color: 'white' }}>
                            From the{' '}
                            <Box
                                component="span"
                                sx={{ color: 'primary.light' }}>
                                latest{' '}
                            </Box>{' '}
                            to the{' '}
                            <Box
                                component="span"
                                sx={{ color: 'primary.light' }}>
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
                    <Link to="/signin" style={{ textDecoration: 'none' }}>
                        <Button>Get Started</Button>
                    </Link>
                </Container>
            </Box>
        </Box>
    );
}

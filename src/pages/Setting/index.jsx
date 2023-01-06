import { Box, Container, Switch, Typography } from '@mui/material';
import { Button } from 'components';
import { GoBackButton } from 'components/shared/GoBackButton';
import Footer from 'layout/Footer';
import React from 'react';

function Setting() {
    const profile = localStorage.getItem('viewProfile');
    const headerPicture = localStorage.getItem('headerPicture');
    const user = localStorage.getItem('userName');
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <Box
            sx={{
                backgroundColor: '#000000',
                maxWidth: '422px',
                margin: '0 auto',
            }}>
            <Box sx={{ display: 'flex', marginBottom: '1.3rem' }}>
                <GoBackButton />
                <Typography
                    sx={{
                        color: 'common.white',
                        weight: '700',
                        fontSize: '2rem',
                        marginLeft: '27%',
                    }}>
                    Settings
                </Typography>
            </Box>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1.2rem',
                        marginBottom: '1.2rem',
                    }}>
                    <Button
                        href="#profilepage"
                        sx={{
                            width: '3.4rem',
                            height: '3.4rem',
                            padding: '3rem 0.8rem',
                            border: '0.1rem solid #158085',
                            borderRadius: '50%',
                        }}>
                        <img
                            src={headerPicture || null}
                            alt=""
                            style={{ overflow: 'hidden', borderRadius: '50%' }}
                        />
                    </Button>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        <Typography
                            sx={{
                                color: 'common.white',
                                weight: '700',
                                fontSize: '1.5rem',
                                marginTop: '1rem',
                            }}>
                            {user || 'Userinfo'}
                        </Typography>
                        <Typography
                            sx={{
                                color: 'gray',
                                weight: '700',
                                fontSize: '1.1rem',
                            }}>
                            {profile || 'view profile'}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            color: 'common.white',
                            weight: '700',
                            fontSize: '1.5rem',
                            marginBottom: '0.5rem',
                        }}>
                        Data Saver
                    </Typography>
                    <Typography
                        sx={{
                            color: 'gray',
                            weight: '700',
                            fontSize: '1.1rem',
                            display: 'flex',
                            gap: '1rem',
                            marginBottom: '0.8rem',
                        }}>
                        Sets your audio quality to low (equivalent to 24kbit/s)
                        and disables artist canvases.
                        <Switch {...label} />
                    </Typography>
                    <Box>
                        <Typography
                            sx={{
                                color: 'common.white',
                                weight: '700',
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                            }}>
                            Video podcasts
                        </Typography>
                        <Typography
                            sx={{
                                color: 'common.white',
                                weight: '700',
                                fontSize: '1.3rem',
                            }}>
                            Download audio only
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                height: '3rem',
                            }}>
                            <Typography
                                sx={{
                                    color: 'gray',
                                    weight: '700',
                                    fontSize: '1.1rem',
                                }}>
                                Save video podcasts as audio only.
                            </Typography>
                            <Switch {...label} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                sx={{
                                    color: 'common.white',
                                    weight: '700',
                                    fontSize: '1.3rem',
                                }}>
                                Stream audio only
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                <Typography
                                    sx={{
                                        color: 'gray',
                                        weight: '700',
                                        fontSize: '1.1rem',
                                    }}>
                                    Play video podcasts as audio only when not
                                    on WiFi.
                                </Typography>
                                <Switch {...label} />
                            </Box>
                        </Box>
                        <Typography
                            sx={{
                                color: 'common.white',
                                weight: '700',
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                            }}>
                            About
                        </Typography>
                        <Box>
                            <Typography
                                sx={{
                                    color: 'common.white',
                                    weight: '700',
                                    fontSize: '1.3rem',
                                }}>
                                Version
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'gray',
                                    weight: '700',
                                    fontSize: '1.1rem',
                                    marginBottom: '1.3rem',
                                }}>
                                2023.2023
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'common.white',
                                    weight: '700',
                                    fontSize: '1.3rem',
                                }}>
                                Third-party software
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'gray',
                                    weight: '700',
                                    fontSize: '1.1rem',
                                    marginBottom: '1.3rem',
                                }}>
                                sweet webaplication that helped us.
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'common.white',
                                    weight: '700',
                                    fontSize: '1.3rem',
                                }}>
                                Terms and Conditions
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'gray',
                                    weight: '700',
                                    fontSize: '1.1rem',
                                    marginBottom: '1.3rem',
                                }}>
                                All of the stuff you need to know.
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'common.white',
                                    weight: '700',
                                    fontSize: '1.3rem',
                                }}>
                                Privacy Policy
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'gray',
                                    weight: '700',
                                    fontSize: '1.1rem',
                                    marginBottom: '1.3rem',
                                }}>
                                important for both of us.
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'common.white',
                                    weight: '700',
                                    fontSize: '1.3rem',
                                }}>
                                Support
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'gray',
                                    weight: '700',
                                    fontSize: '1.1rem',
                                    marginBottom: '1.3rem',
                                }}>
                                Get help from us and the community.
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                color: 'common.white',
                                weight: '700',
                                fontSize: '1.5rem',
                                marginBottom: '1.3rem',
                            }}>
                            Other
                        </Typography>
                        <Typography
                            sx={{
                                color: 'common.white',
                                weight: '700',
                                fontSize: '1.3rem',
                            }}>
                            Log out
                        </Typography>
                        <Typography
                            sx={{
                                color: 'gray',
                                weight: '700',
                                fontSize: '1.1rem',
                            }}>
                            You are logged in as User
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Box>
    );
}
export default Setting;

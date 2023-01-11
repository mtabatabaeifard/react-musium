import Grid from '@mui/material/Grid';
import React from 'react';
import kpop from '../../assets/images/kpop.png';
import indie from '../../assets/images/indie.png';
import RandB from '../../assets/images/RandB.png';
import pop from '../../assets/images/pop.png';

export function CardImgExplor() {
    return (
        <Grid container>
            <Grid
                item
                xs={2}
                sx={{
                    width: '16.7rem',
                    height: '9.8rem',
                    borderRadius: '0.7rem',
                    background: '#7efc00d7',
                    ml: '3.9rem',
                    marginTop: '1.7rem',
                    fontWeight: '700',
                    fontSize: '1.6rem',
                    fontFamily: 'Century Gothic',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'rgba(255, 255, 255, 1)',
                }}>
                <span
                    style={{
                        paddingTop: '1.4rem',
                        marginLeft: '1.7rem',
                    }}>
                    Kpop
                </span>
                <img
                    style={{
                        position: 'absolute',
                        marginLeft: '8.5rem',
                        marginTop: '1.2rem',
                    }}
                    src={kpop}
                    alt="jk"
                />
            </Grid>
            <Grid
                item
                sx={{
                    width: '16.7rem',
                    height: '9.8rem',
                    borderRadius: '0.7rem',
                    background: '#9932cc',
                    ml: '2.5rem',
                    marginTop: '1.7rem',
                    fontWeight: '700',
                    fontSize: '1.6rem',
                    fontFamily: 'Century Gothic',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'rgba(255, 255, 255, 1)',
                }}>
                <span
                    style={{
                        paddingTop: '1.4rem',
                        marginLeft: '1.7rem',
                    }}>
                    Indie
                </span>
                <img
                    style={{
                        position: 'absolute',
                        marginLeft: '8.5rem',
                        marginTop: '1.2rem',
                    }}
                    src={indie}
                    alt="jk"
                />
            </Grid>
            <Grid
                item
                xs={2}
                sx={{
                    width: '16.7rem',
                    height: '9.8rem',
                    borderRadius: '0.7rem',
                    background: '#7b68ee',
                    ml: '3.9rem',
                    marginTop: '1.7rem',
                    fontWeight: '700',
                    fontSize: '1.6rem',
                    fontFamily: 'Century Gothic',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'rgba(255, 255, 255, 1)',
                }}>
                <span
                    style={{
                        paddingTop: '1.4rem',
                        marginLeft: '1.7rem',
                    }}>
                    R&B
                </span>
                <img
                    style={{
                        position: 'absolute',
                        marginLeft: '8.3rem',
                        marginTop: '1.1rem',
                    }}
                    src={RandB}
                    alt="jk"
                />
            </Grid>
            <Grid
                item
                xs={2}
                sx={{
                    width: '16.7rem',
                    height: '9.8rem',
                    borderRadius: '0.7rem',
                    background: 'rgba(210, 105, 30, 0.651)',
                    ml: '2.5rem',
                    marginTop: '1.7rem',
                    fontWeight: '700',
                    fontSize: '1.6rem',
                    fontFamily: 'Century Gothic',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'rgba(255, 255, 255, 1)',
                }}>
                <span
                    style={{
                        paddingTop: '1.4rem',
                        marginLeft: '1.7rem',
                    }}>
                    Pop
                </span>
                <img
                    style={{
                        position: 'absolute',
                        marginLeft: '8.8rem',
                        marginTop: '1.4rem',
                    }}
                    src={pop}
                    alt="jk"
                />
            </Grid>
        </Grid>
    );
}

import React from 'react';
import Grid from '@mui/material/Grid';
import madeforyou from '../../assets/images/madeforyou.png';
import released from '../../assets/images/released.png';
import musiccharts from '../../assets/images/musiccharts.png';
import podcast from '../../assets/images/podcast.png';
import ballywood from '../../assets/images/ballywood.png';
import popfusion from '../../assets/images/popfusion.png';

export function CardImageExplortwo() {
    return (
        <Grid container>
            <Grid
                item
                xs={2}
                sx={{
                    width: '16.7rem',
                    height: '9.8rem',
                    borderRadius: '0.7rem',
                    background: '#5f9ea0',
                    ml: '3.9rem',
                    marginTop: '1.7rem',
                    fontWeight: '700',
                    fontSize: '1.6rem',
                    fontFamily: 'Century Gothic',
                    display: 'flex',
                    flexDirection: 'column',
                    lineHeight: '1.9rem',
                    color: 'rgba(255, 255, 255, 1)',
                }}>
                <span
                    style={{
                        paddingTop: '1.4rem',
                        marginLeft: '1.7rem',
                        fontFamily: 'Century Gothic',
                    }}>
                    Made
                    <br /> for You
                </span>
                <img
                    style={{
                        position: 'absolute',
                        marginLeft: '9.2rem',
                        marginTop: '1.5rem',
                    }}
                    src={madeforyou}
                    alt="jk"
                />
            </Grid>
            <Grid
                item
                sx={{
                    width: '16.7rem',
                    height: '9.8rem',
                    borderRadius: '0.7rem',
                    background: 'rgba(111, 37, 156, 1)',
                    ml: '2.5rem',
                    marginTop: '1.7rem',
                    fontWeight: '700',
                    fontSize: '1.6rem',
                    fontFamily: 'Century Gothic',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'rgba(255, 255, 255, 1)',
                    lineHeight: '1.9rem',
                }}>
                <span
                    style={{
                        paddingTop: '1.4rem',
                        marginLeft: '1.7rem',
                    }}>
                    RELEASED
                </span>
                <img
                    style={{
                        position: 'absolute',
                        marginLeft: '8.5rem',
                        marginTop: '1.2rem',
                    }}
                    src={released}
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
                    background: '#4169e1',
                    ml: '3.9rem',
                    marginTop: '1.7rem',
                    fontWeight: '700',
                    fontSize: '1.6rem',
                    fontFamily: 'Century Gothic',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'rgba(255, 255, 255, 1)',
                    lineHeight: '1.9rem',
                }}>
                <span
                    style={{
                        paddingTop: '1.4rem',
                        marginLeft: '1.7rem',
                    }}>
                    Music
                    <br /> Charts
                </span>
                <img
                    style={{
                        position: 'absolute',
                        marginLeft: '8.9rem',
                        marginTop: '1.5rem',
                    }}
                    src={musiccharts}
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
                    background: '#a52a2ad5',
                    ml: '2.5rem',
                    marginTop: '1.7rem',
                    fontWeight: '700',
                    fontSize: '1.6rem',
                    fontFamily: 'Century Gothic',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'rgba(255, 255, 255, 1)',
                    lineHeight: '1.9rem',
                }}>
                <span
                    style={{
                        paddingTop: '1.4rem',
                        marginLeft: '1.7rem',
                    }}>
                    Podcasts
                </span>
                <img
                    style={{
                        position: 'absolute',
                        marginLeft: '8.3rem',
                        marginTop: '1.5rem',
                    }}
                    src={podcast}
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
                    background: 'rgba(184, 135, 11, 0.925)',
                    ml: '3.9rem',
                    marginTop: '1.7rem',
                    fontWeight: '700',
                    fontSize: '1.6rem',
                    fontFamily: 'Century Gothic',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'rgba(255, 255, 255, 1)',
                    lineHeight: '1.9rem',
                }}>
                <span
                    style={{
                        paddingTop: '1.4rem',
                        marginLeft: '1.7rem',
                    }}>
                    Bollywood
                </span>
                <img
                    style={{
                        position: 'absolute',
                        marginLeft: '7.7rem',
                        marginTop: '1.7rem',
                    }}
                    src={ballywood}
                    alt="jk"
                />
            </Grid>
            <Grid
                item
                sx={{
                    width: '16.7rem',
                    height: '9.8rem',
                    borderRadius: '0.7rem',
                    background: '#3cb372c0',
                    ml: '2.5rem',
                    marginTop: '1.7rem',
                    fontWeight: '700',
                    fontSize: '1.6rem',
                    fontFamily: 'Century Gothic',
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'rgba(255, 255, 255, 1)',
                    lineHeight: '1.9rem',
                }}>
                <span
                    style={{
                        paddingTop: '1.4rem',
                        marginLeft: '1.7rem',
                    }}>
                    Pop
                    <br /> Fusion
                </span>
                <img
                    style={{
                        position: 'absolute',
                        marginLeft: '8.5rem',
                        marginTop: '1.2rem',
                    }}
                    src={popfusion}
                    alt="jk"
                />
            </Grid>
        </Grid>
    );
}

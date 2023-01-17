/* eslint-disable react/prop-types */
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { LyricsDrawer, MusicPlayerSlider } from 'components';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import data from 'db/tracks.json';
import { useCookies } from 'react-cookie';

function SongPage() {
    const theme = useTheme();
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [idValue, setIdValue] = React.useState(
        JSON.parse(localStorage.getItem('songID')) || 0,
    );

    const navigate = useNavigate();
    const [cookies] = useCookies();

    useEffect(() => {
        if (!cookies?.accessToken) {
            navigate('/Welcome');
        }
    }, []);

    const music = data.songs;
    const choseMusic = music.filter((track) => track.id === idValue)[0];
    const { source, img, name, artist, isliked } = choseMusic;
    // const { playlist } = choseMusic;

    const mainBoxS = {
        maxWidth: 433,
        mx: 'auto',
        background: '#000',
        pt: 35 / 8,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Century Gothic',
    };
    const innerBoxS = {
        display: 'flex',
        justifyContent: 'space-between',
        px: 50 / 8,
    };
    const lyricsTypo = {
        color: theme.palette.secondary.main,
        fontSize: '1.4rem',
        fontWeight: 600,
        letterSpacing: '0.055em',
        marginTop: '3rem',
        marginBottom: '15.8rem',
        marginLeft: '9.66%',
    };
    return (
        <Box sx={mainBoxS}>
            <Box sx={innerBoxS}>
                <Box>
                    <Typography
                        sx={{
                            fontSize: '.9rem',
                            opacity: '.7',
                            fontWeight: 400,
                            letterSpacing: '0.13em',
                            color: theme.palette.secondary.main,
                        }}>
                        PLAYING FROM PLAYLIST:
                    </Typography>
                    <Link to="/PlayList" style={{ textDecoration: 'none' }}>
                        {' '}
                        <Box
                            sx={{
                                color: '#7CEEFF',
                                fontWeight: 500,
                                fontSize: '1.2rem',
                            }}>
                            {/* {`${playlist[0] ? playlist[0] : 'None'}`} */}
                            Lofi Loft
                            <IconButton aria-label="Playlist">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="9"
                                    height="6"
                                    viewBox="0 0 9 6"
                                    fill="none">
                                    <path
                                        d="M7.77757 0.185303H1.05268C0.924777 0.185246 0.799507 0.220346 0.69157 0.286486C0.583633 0.352625 0.497504 0.44706 0.443287 0.558712C0.389071 0.670365 0.369015 0.794603 0.385474 0.916854C0.401933 1.0391 0.454223 1.1543 0.536209 1.24891L3.89866 5.1378C3.96177 5.21075 4.04074 5.26943 4.12999 5.3097C4.21924 5.34997 4.31658 5.37084 4.41513 5.37084C4.51367 5.37084 4.61101 5.34997 4.70026 5.3097C4.78951 5.26943 4.86848 5.21075 4.9316 5.1378L8.29404 1.24891C8.37603 1.1543 8.42832 1.0391 8.44478 0.916854C8.46124 0.794603 8.44118 0.670365 8.38697 0.558712C8.33275 0.44706 8.24662 0.352625 8.13868 0.286486C8.03075 0.220346 7.90548 0.185246 7.77757 0.185303ZM4.41513 3.70993L2.48845 1.4816H6.34181L4.41513 3.70993Z"
                                        fill="#979797"
                                    />
                                </svg>
                            </IconButton>
                        </Box>
                    </Link>
                </Box>
                <Link to="/options" style={{ textDecoration: 'none' }}>
                    <IconButton aria-label="options" sx={{ paddingRight: 0 }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="4"
                            height="20"
                            viewBox="0 0 4 20"
                            fill="none">
                            <path
                                d="M1.07779e-06 10C1.07779e-06 9.60444 0.117299 9.21776 0.337062 8.88886C0.556825 8.55996 0.869182 8.30362 1.23463 8.15224C1.60009 8.00087 2.00222 7.96126 2.39018 8.03843C2.77814 8.1156 3.13451 8.30608 3.41421 8.58579C3.69392 8.86549 3.8844 9.22186 3.96157 9.60982C4.03874 9.99778 3.99914 10.3999 3.84776 10.7654C3.69639 11.1308 3.44004 11.4432 3.11114 11.6629C2.78224 11.8827 2.39556 12 2 12C1.46957 12 0.960861 11.7893 0.585788 11.4142C0.210715 11.0391 1.07779e-06 10.5304 1.07779e-06 10ZM4 18C4 17.6044 3.8827 17.2178 3.66294 16.8889C3.44318 16.56 3.13082 16.3036 2.76537 16.1522C2.39992 16.0009 1.99778 15.9613 1.60982 16.0384C1.22186 16.1156 0.865493 16.3061 0.585788 16.5858C0.306083 16.8655 0.115601 17.2219 0.0384303 17.6098C-0.0387401 17.9978 0.000866562 18.3999 0.152242 18.7654C0.303617 19.1308 0.559963 19.4432 0.888861 19.6629C1.21776 19.8827 1.60444 20 2 20C2.53043 20 3.03914 19.7893 3.41421 19.4142C3.78929 19.0391 4 18.5304 4 18ZM1.07779e-06 2C1.07779e-06 2.39556 0.117299 2.78224 0.337062 3.11114C0.556825 3.44004 0.869182 3.69638 1.23463 3.84776C1.60009 3.99913 2.00222 4.03874 2.39018 3.96157C2.77814 3.8844 3.13451 3.69392 3.41421 3.41421C3.69392 3.13451 3.8844 2.77814 3.96157 2.39018C4.03874 2.00222 3.99914 1.60008 3.84776 1.23463C3.69639 0.869181 3.44004 0.556824 3.11114 0.337061C2.78224 0.117298 2.39556 0 2 0C1.46957 0 0.960861 0.210714 0.585788 0.585787C0.210715 0.960859 1.07779e-06 1.46957 1.07779e-06 2Z"
                                fill="white"
                            />
                        </svg>
                    </IconButton>
                </Link>
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    width: '34.5rem',
                    height: '33rem',
                    marginLeft: '4rem',
                    overflow: 'hidden',
                }}>
                <img
                    style={{ width: '345px', height: '330px' }}
                    src={img}
                    alt="song"
                />
            </Box>
            <MusicPlayerSlider
                idValue={idValue}
                setIdValue={setIdValue}
                name={name}
                artist={artist}
                source={source}
                isliked={isliked}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
            <a href={source}>
                <IconButton
                    aria-label="Download"
                    sx={{ marginTop: '2.8rem', marginLeft: '72.58%' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none">
                        <path
                            d="M1.33358 13.1667H14.6669C14.8879 13.1667 15.0999 13.2414 15.2562 13.3742C15.4124 13.5071 15.5002 13.6872 15.5002 13.8751C15.5002 14.0629 15.4124 14.2431 15.2562 14.3759C15.0999 14.5088 14.8879 14.5834 14.6669 14.5834H1.33358C1.11256 14.5834 0.900602 14.5088 0.744322 14.3759C0.588041 14.2431 0.500244 14.0629 0.500244 13.8751C0.500244 13.6872 0.588041 13.5071 0.744322 13.3742C0.900602 13.2414 1.11256 13.1667 1.33358 13.1667ZM8.00024 0.416748C7.77923 0.416748 7.56727 0.491376 7.41099 0.624214C7.25471 0.757052 7.16691 0.93722 7.16691 1.12508V9.33183L5.25608 7.70762C5.1792 7.63997 5.08725 7.58601 4.98558 7.54888C4.88391 7.51176 4.77456 7.49222 4.66391 7.4914C4.55326 7.49059 4.44353 7.50851 4.34112 7.54412C4.2387 7.57974 4.14566 7.63234 4.06741 7.69884C3.98917 7.76535 3.92729 7.84444 3.88539 7.93149C3.84349 8.01854 3.82241 8.11181 3.82337 8.20586C3.82433 8.29992 3.84732 8.39286 3.89099 8.47928C3.93467 8.5657 3.99815 8.64386 4.07774 8.70921L7.41108 11.5425C7.48866 11.6082 7.58069 11.6602 7.68191 11.6955C7.7827 11.7315 7.89092 11.7501 8.00024 11.7501C8.10957 11.7501 8.21779 11.7315 8.31858 11.6955C8.4198 11.6602 8.51183 11.6082 8.58941 11.5425L11.9227 8.70921C12.0745 8.57561 12.1585 8.39669 12.1566 8.21096C12.1547 8.02524 12.0671 7.84758 11.9126 7.71625C11.7581 7.58492 11.5491 7.51043 11.3306 7.50881C11.1121 7.5072 10.9016 7.57859 10.7444 7.70762L8.83358 9.33183V1.12508C8.83358 0.93722 8.74578 0.757052 8.5895 0.624214C8.43322 0.491376 8.22126 0.416748 8.00024 0.416748Z"
                            fill="white"
                        />
                    </svg>
                </IconButton>
            </a>

            <Typography sx={lyricsTypo}>LYRICS</Typography>
            <LyricsDrawer />
        </Box>
    );
}

export default SongPage;

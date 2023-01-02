/* eslint-disable no-console */
import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import SingerCard from 'components/shared/SingerCard';
import AlbumLibraryCard from 'components/shared/AlbumLibraryCard';
import { GoBackButton } from 'components/shared/GoBackButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Swiper, SwiperSlide } from 'swiper/react';
import singerImg from '../../assets/images/conan-gary.png';
import album1 from '../../assets/images/3amvibes.png';
import album2 from '../../assets/images/wiped-out.png';

function Search() {
    return (
        <Box
            sx={{
                backgroundColor: '#000000',
                maxWidth: '43.3rem',
                margin: '0 auto',
                pt: '4rem',
            }}>
            <GoBackButton style={{ paddingLeft: '.4rem' }} />
            <TextField
                variant="outlined"
                sx={{
                    border: '2px solid #ffffff',
                    '& input::placeholder': {
                        color: '#8A9A9D;',
                        fontSize: '1.3rem',
                        fontFamily: 'Century Gothic',
                    },
                    '& fieldset': { border: 'none' },
                    borderRadius: '2.3rem',
                    width: '90%',
                    padding: '0px',
                    color: '#8A9A9D;',
                    fontSize: '1.3rem',
                    fontFamily: 'Century Gothic',
                    margin: '2rem 0 4rem 2rem',
                    '& .MuiInputLabel-root': {
                        color: '#8A9A9D;',
                        fontSize: '1.3rem',
                        fontFamily: 'Century Gothic',
                    },
                    '& div': {
                        '& input.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':
                            {
                                padding: '1rem 2rem 1.5rem',
                            },
                    },
                }}
                placeholder="browse library"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: '#ffffff' }} />
                        </InputAdornment>
                    ),
                }}
            />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '2.7rem',
                }}>
                <ImportExportSharpIcon
                    sx={{ fontSize: '1.7rem' }}
                    style={{ color: '#979797', margin: '0 .5rem 0 2.6rem' }}
                />
                <Typography
                    sx={{
                        fontFamily: 'Century Gothic',
                        fontSize: '1.6rem',
                        color: '#39C0D4',
                        fontWeight: 700,
                    }}>
                    Add New Playlist
                </Typography>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView="auto"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                direction="vertical"
                pagination
                style={{ maxHeight: '400px' }}>
                <SwiperSlide>
                    <SingerCard image={singerImg} name="conan gary" to="/" />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumLibraryCard
                        image={album1}
                        title="3:00am vibes"
                        desc="18 songs"
                        to="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumLibraryCard
                        image={album2}
                        title="Wiped Out!"
                        desc="The Neighbourhood"
                        to="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumLibraryCard
                        image={album2}
                        title="Wiped Out!"
                        desc="The Neighbourhood"
                        to="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SingerCard image={singerImg} name="conan gary" to="/" />
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}

export default Search;

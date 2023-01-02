/* eslint-disable no-console */
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import YourLikedSongsBtn from 'components/shared/YourLikedSongsBtn';
import AlbumLibraryCard from 'components/shared/AlbumLibraryCard';
import ButtonsSlider from 'components/shared/buttonsSlider';
import Footer from 'layout/Footer';
import LibraryPagesHeader from 'layout/libraryPagesHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import songPic1 from '../../assets/images/superache.png';
import songPic2 from '../../assets/images/dawn-fm.png';
import songPic3 from '../../assets/images/planet-her.png';
import songPic4 from '../../assets/images/wiped-out.png';
import songPic5 from '../../assets/images/bloom.png';

function PlayLists() {
    return (
        <Container>
            <Box
                sx={{
                    backgroundColor: '#000000',
                    maxWidth: '43.3rem',
                    margin: '0 auto',
                }}>
                <LibraryPagesHeader />
                <ButtonsSlider ActiveBtnIs="Playlists" />
                <YourLikedSongsBtn />
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
                        <AlbumLibraryCard
                            image={songPic1}
                            title="Superache"
                            desc="onan Gray"
                            to="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AlbumLibraryCard
                            image={songPic2}
                            title="DAWN FM"
                            desc="The Weekend"
                            to="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AlbumLibraryCard
                            image={songPic3}
                            title="Planet Her"
                            desc="Doja Cat"
                            to="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AlbumLibraryCard
                            image={songPic4}
                            title="Wiped Out!"
                            desc="The Neighbourhood"
                            to="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AlbumLibraryCard
                            image={songPic5}
                            title="Bloom"
                            desc="Troye Sivan"
                            to="/"
                        />
                    </SwiperSlide>
                </Swiper>
                <Footer />
            </Box>
        </Container>
    );
}

export default PlayLists;

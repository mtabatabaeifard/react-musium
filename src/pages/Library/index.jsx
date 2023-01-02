/* eslint-disable no-console */
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import AddNewPlaylistBtn from 'components/shared/AddNewPlaylistBtn';
import YourLikedSongsBtn from 'components/shared/YourLikedSongsBtn';
import SingerCard from 'components/shared/SingerCard';
import AlbumLibraryCard from 'components/shared/AlbumLibraryCard';
import ButtonsSlider from 'components/shared/buttonsSlider';
import Footer from 'layout/Footer';
import LibraryPagesHeader from 'layout/libraryPagesHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import singerImg from '../../assets/images/conan-gary.png';
import album1 from '../../assets/images/3amvibes.png';
import album2 from '../../assets/images/wiped-out.png';
import album3 from '../../assets/images/extra-dynamic.png';

function Library() {
    return (
        <Container>
            <Box
                sx={{
                    backgroundColor: '#000000',
                    maxWidth: '43.3rem',
                    margin: '0 auto',
                }}>
                <LibraryPagesHeader />
                <ButtonsSlider ActiveBtnIs="" />
                <AddNewPlaylistBtn />
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
                        <SingerCard
                            image={singerImg}
                            name="conan gary"
                            to="/"
                        />
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
                            image={album3}
                            title="Extra Dynamic"
                            desc="Updated Aug 10 • ur mom ashley"
                            to="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingerCard
                            image={singerImg}
                            name="conan gary"
                            to="/"
                        />
                    </SwiperSlide>
                </Swiper>
                <Footer />
            </Box>
        </Container>
    );
}

export default Library;

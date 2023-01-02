/* eslint-disable no-console */
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import AddNewPlaylistBtn from 'components/shared/AddNewPlaylistBtn';
import YourLikedSongsBtn from 'components/shared/YourLikedSongsBtn';
import AlbumLibraryCard from 'components/shared/AlbumLibraryCard';
import ButtonsSlider from 'components/shared/buttonsSlider';
import Footer from 'layout/Footer';
import LibraryPagesHeader from 'layout/libraryPagesHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import folder from '../../assets/images/folder-picture.png';

function Folders() {
    return (
        <Container>
            <Box
                sx={{
                    backgroundColor: '#000000',
                    maxWidth: '43.3rem',
                    margin: '0 auto',
                }}>
                <LibraryPagesHeader />
                <ButtonsSlider ActiveBtnIs="Folders" />
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
                        <AlbumLibraryCard
                            image={folder}
                            title="moods"
                            desc="11 playlists"
                            to="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AlbumLibraryCard
                            image={folder}
                            title="blends"
                            desc="8 playlists"
                            to="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AlbumLibraryCard
                            image={folder}
                            title="favs"
                            desc="14 playlists"
                            to="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AlbumLibraryCard
                            image={folder}
                            title="random?"
                            desc="10 playlists"
                            to="/"
                        />
                    </SwiperSlide>
                </Swiper>
                <Footer />
            </Box>
        </Container>
    );
}

export default Folders;

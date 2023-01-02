/* eslint-disable no-console */
import React from 'react';
import { Box, Typography } from '@mui/material';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import AlbumLibraryCard from 'components/shared/AlbumLibraryCard';
import { GoBackButton } from 'components/shared/GoBackButton';
import AddNewPlaylistBtn from 'components/shared/AddNewPlaylistBtn';
import Footer from 'layout/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import songPic1 from '../../assets/images/homePic2-sectionOne.png';
import songPic2 from '../../assets/images/ask-me-another.png';
import songPic3 from '../../assets/images/baking-a-mystery.png';
import songPic4 from '../../assets/images/extra-dynamic.png';
import songPic5 from '../../assets/images/teenager-therapy.png';

function Podcasts() {
    return (
        <Box
            sx={{
                backgroundColor: '#000000',
                maxWidth: '43.3rem',
                margin: '0 auto',
            }}>
            <Box sx={{ display: 'flex', mb: '5rem', pt: '4rem' }}>
                <GoBackButton style={{ paddingLeft: '.4rem' }} />
                <Typography
                    sx={{
                        color: '#ffffff',
                        fontSize: '2.4rem',
                        fontFamily: 'Century Gothic',
                        ml: '2.6rem',
                        fontWeight: '700',
                    }}>
                    Moods
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: '5rem',
                    mt: '.9rem',
                }}>
                <Typography
                    sx={{
                        fontFamily: 'Century Gothic',
                        fontSize: '1.6rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        flexGrow: 1,
                        marginLeft: '2.4rem',
                    }}>
                    Sort By{' '}
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                        sx={{
                            fontFamily: 'Century Gothic',
                            fontSize: '1.6rem',
                            color: '#39C0D4',
                            fontWeight: 700,
                        }}>
                        Add New Playlist
                    </Typography>
                    <ImportExportSharpIcon
                        sx={{ fontSize: '1.7rem' }}
                        style={{
                            color: '#979797',
                            marginRight: '1.7rem',
                            marginLeft: '.3rem',
                        }}
                    />
                </div>
            </Box>
            <AddNewPlaylistBtn />
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
                        title="Anything Goes"
                        desc="Updated Aug 31 • Emma Chamberlain"
                        to="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumLibraryCard
                        image={songPic2}
                        title="Ask Me Another"
                        desc="Updated Aug 18 • NPR Studios"
                        to="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumLibraryCard
                        image={songPic3}
                        title="Baking a Mystery"
                        desc="Updated Aug 21• Stephanie Soo"
                        to="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumLibraryCard
                        image={songPic4}
                        title="Extra Dynamic"
                        desc="Updated Aug 10 • ur mom ashley"
                        to="/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <AlbumLibraryCard
                        image={songPic5}
                        title="Teenager Therapy"
                        desc="Updated Aug 21• iHeart Studios"
                        to="/"
                    />
                </SwiperSlide>
            </Swiper>
            <Footer />
        </Box>
    );
}

export default Podcasts;

/* eslint-disable no-console */
import React from 'react';
import { Box, Typography } from '@mui/material';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import YourLikedSongsBtn from 'components/shared/YourLikedSongsBtn';
import AlbumLibraryCard from 'components/shared/AlbumLibraryCard';
import ButtonsSlider from 'components/shared/buttonsSlider';
import Footer from 'layout/Footer';
import LibraryPagesHeader from 'layout/libraryPagesHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import songPic1 from '../../assets/images/homePic2-sectionOne.png';
import songPic2 from '../../assets/images/ask-me-another.png';
import songPic3 from '../../assets/images/baking-a-mystery.png';
import songPic4 from '../../assets/images/extra-dynamic.png';
import songPic5 from '../../assets/images/teenager-therapy.png';

function Folder() {
    return (
        <Box
            sx={{
                backgroundColor: '#000000',
                maxWidth: '43.3rem',
                margin: '0 auto',
            }}>
            <LibraryPagesHeader />
            <ButtonsSlider ActiveBtnIs="Podcasts & Shows" />
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
                    A - Z
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

export default Folder;

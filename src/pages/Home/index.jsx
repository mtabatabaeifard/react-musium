import { Box } from '@mui/material';
import Footer from 'layout/Footer';
import Header from 'pages/Home/Header';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { ContinueListening } from './ContinueListening';
import { FirstSlider } from './FirstSlider';
import { SecondSlider } from './SecondSlider';

function Home() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#000000',
                    maxWidth: '422px',
                    margin: '0 auto',
                }}>
                <Header />
                <ContinueListening />
                <Swiper
                    style={{ maxHeight: '700px' }}
                    modules={[Pagination]}
                    spaceBetween={12}
                    pagination
                    direction="vertical"
                    breakpoints={{
                        433: {
                            slidesPerView: '2.8',
                        },
                        380: {
                            slidesPerView: '2.5',
                        },
                        150: {
                            slidesPerView: '2',
                        },
                    }}>
                    <SwiperSlide>
                        <FirstSlider />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SecondSlider />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FirstSlider />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SecondSlider />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FirstSlider />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SecondSlider />
                    </SwiperSlide>
                </Swiper>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#000000',
                    maxWidth: '422px',
                    margin: '0 auto',
                }}>
                <Footer />
            </Box>
        </>
    );
}

export default Home;

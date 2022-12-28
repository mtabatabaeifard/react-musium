/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
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
        <Box
            component="div"
            sx={{
                backgroundColor: '#000000',
                maxWidth: '422px',
                margin: '0 auto',
            }}>
            <Swiper
                style={{ maxHeight: '700px' }}
                modules={[Pagination]}
                spaceBetween={12}
                slidesPerView={3}
                pagination
                direction="vertical">
                <SwiperSlide>
                    <ContinueListening />
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
                <SwiperSlide>
                    <FirstSlider />
                </SwiperSlide>
                <SwiperSlide>
                    <SecondSlider />
                </SwiperSlide>
            </Swiper>
        </Box>
    );
}

export default Home;

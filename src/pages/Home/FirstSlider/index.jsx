import { Box } from '@mui/material';

import { SliderPictureCreator, TitleCreator } from 'components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import homePicOneSliderOne from 'assets/images/homePic1_sliderOne.png';
import homePicTwoSliderOne from 'assets/images/homePic2_sliderOne.png';
import homePicThreeSliderOne from 'assets/images/homePic3_sliderOne.png';

export function FirstSlider() {
    return (
        <Box sx={{ margin: '0 1.6rem' }}>
            <TitleCreator title="Your Top Mixes" />
            <Box
                sx={{
                    display: 'flex',
                    gap: '3.4rem',
                    padding: '1.2rem 0rem 3.5rem',
                }}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={12}
                    slidesPerView={2.2}
                    navigation>
                    <SwiperSlide>
                        {' '}
                        <SliderPictureCreator
                            iconWidth="15rem"
                            iconHeight="15rem"
                            icon={homePicOneSliderOne}
                            title="Pop Mix"
                            borderColor="#FF7777"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {' '}
                        <SliderPictureCreator
                            iconWidth="15rem"
                            iconHeight="15rem"
                            icon={homePicTwoSliderOne}
                            title="Pop Mix"
                            borderColor="#FFFA77"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {' '}
                        <SliderPictureCreator
                            iconWidth="15rem"
                            iconHeight="15rem"
                            icon={homePicThreeSliderOne}
                            title="Pop Mix"
                            borderColor="#1DB83F"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {' '}
                        <SliderPictureCreator
                            iconWidth="15rem"
                            iconHeight="15rem"
                            icon={homePicOneSliderOne}
                            title="Pop Mix"
                            borderColor="#FF7777"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderPictureCreator
                            iconWidth="15rem"
                            iconHeight="15rem"
                            icon={homePicTwoSliderOne}
                            title="Pop Mix"
                            borderColor="#FFFA77"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderPictureCreator
                            iconWidth="15rem"
                            iconHeight="15rem"
                            icon={homePicThreeSliderOne}
                            title="Pop Mix"
                            borderColor="#1DB83F"
                        />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
}

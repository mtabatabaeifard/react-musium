import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import homePicTwoSliderTwo from 'assets/images/homePic2_sliderTwo.png';
import homePicOneSliderTwo from 'assets/images/homePic1_sliderTwo.png';
import { SliderPictureCreator, TitleCreator } from 'components';

export function SecondSlider() {
    const centerizeSwiperSlides = {
        display: 'flex',
        justifyContent: 'center',
    };
    return (
        <Box sx={{ margin: '0 1.6rem' }}>
            <TitleCreator title="Based on your recent listening" />
            <Box
                component="div"
                sx={{
                    display: 'flex',
                    gap: '3.4rem',
                    padding: '1.2rem 0rem 3.5rem',
                }}>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    breakpoints={{
                        380: {
                            slidesPerView: '1.8',
                        },
                        150: {
                            slidesPerView: '1',
                        },
                    }}>
                    <SwiperSlide style={centerizeSwiperSlides}>
                        <SliderPictureCreator
                            iconWidth="18.2rem"
                            iconHeight="18.2rem"
                            icon={homePicOneSliderTwo}
                        />
                    </SwiperSlide>
                    <SwiperSlide style={centerizeSwiperSlides}>
                        <SliderPictureCreator
                            iconWidth="18.2rem"
                            iconHeight="18.2rem"
                            icon={homePicTwoSliderTwo}
                        />
                    </SwiperSlide>
                    <SwiperSlide style={centerizeSwiperSlides}>
                        <SliderPictureCreator
                            iconWidth="18.2rem"
                            iconHeight="18.2rem"
                            icon={homePicOneSliderTwo}
                        />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
}

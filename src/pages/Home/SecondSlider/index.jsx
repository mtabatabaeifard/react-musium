import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import homePicOneSliderTwo from 'assets/images/homePic1_sliderTwo.png';
import homePicTwoSliderTwo from 'assets/images/homePic2_sliderTwo.png';
import { SliderPictureCreator, TitleCreator } from 'components';

export function SecondSlider() {
    return (
        <Box sx={{ margin: '0 1.6rem' }}>
            <TitleCreator title="Based on your recent listening" />
            <Box
                sx={{
                    display: 'flex',
                    gap: '3.4rem',
                    padding: '1.2rem 0rem 3.5rem',
                }}>
                <Swiper modules={[Navigation]} slidesPerView={1.8} navigation>
                    <SwiperSlide>
                        {' '}
                        <SliderPictureCreator
                            iconWidth="18.2rem"
                            iconHeight="18.2rem"
                            icon={homePicOneSliderTwo}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {' '}
                        <SliderPictureCreator
                            iconWidth="18.2rem"
                            iconHeight="18.2rem"
                            icon={homePicTwoSliderTwo}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        {' '}
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

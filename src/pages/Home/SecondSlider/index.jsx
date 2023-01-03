import { Box } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import homePicTwoSliderTwo from 'assets/images/homePic2_sliderTwo.png';
import homePicOneSliderTwo from 'assets/images/homePic1_sliderTwo.png';
import { SliderPictureCreator, TitleCreator } from 'components';
import { CustomSliderHome } from '../CustomSliderHome';

export function SecondSlider() {
    const slidersArray = [
        <SliderPictureCreator
            iconWidth="18.2rem"
            iconHeight="18.2rem"
            icon={homePicOneSliderTwo}
        />,
        <SliderPictureCreator
            iconWidth="18.2rem"
            iconHeight="18.2rem"
            icon={homePicTwoSliderTwo}
        />,
        <SliderPictureCreator
            iconWidth="18.2rem"
            iconHeight="18.2rem"
            icon={homePicOneSliderTwo}
        />,
    ];
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
                <CustomSliderHome
                    modules={[Navigation]}
                    navigation
                    breakpoints={{
                        380: {
                            slidesPerView: '1.8',
                        },
                        150: {
                            slidesPerView: '1',
                        },
                    }}
                    slides={slidersArray}
                />
            </Box>
        </Box>
    );
}

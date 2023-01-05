import PropTypes from 'prop-types';
import { SwiperSlide, Swiper as RSwiper } from 'swiper/react';
import 'swiper/css';

export function CustomSliderHome({ slides, ...props }) {
    const centerizeSwiperSlides = {
        display: 'flex',
        justifyContent: 'center',
    };
    return (
        <RSwiper {...props}>
            {slides.map((item) => {
                return (
                    <SwiperSlide style={centerizeSwiperSlides}>
                        {item}
                    </SwiperSlide>
                );
            })}
        </RSwiper>
    );
}
CustomSliderHome.propTypes = {
    slides: PropTypes.string.isRequired,
};

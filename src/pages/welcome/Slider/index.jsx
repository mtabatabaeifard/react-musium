import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function SwiperSlider(props) {
    return (
        <Swiper
            style={{ height: '100%' }}
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true, noSwiping: false }}>
            <SwiperSlide {...props} />
            <SwiperSlide>Start your musical journey now!</SwiperSlide>
        </Swiper>
    );
}

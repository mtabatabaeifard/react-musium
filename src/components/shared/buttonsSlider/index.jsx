/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

function ButtonsSlider({ ActiveBtnIs }) {
    return (
        <Swiper
            spaceBetween={11}
            slidesPerView="auto"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{ paddingBottom: '3rem', paddingLeft: '2rem' }}>
            <SwiperSlide style={{ display: 'flex', width: '7.8rem' }}>
                <Link
                    to="/folders"
                    style={{
                        width: '4rem',
                        background:
                            ActiveBtnIs === 'Folders' &&
                            'linear-gradient(180deg, #15686B 0%, #06A0B5 100%)',
                        color: '#FFFFFF',
                        border:
                            ActiveBtnIs === 'Folders'
                                ? '.1rem solid trnsparent'
                                : '.1rem solid #ffffff',
                        borderRadius: '2.3rem',
                        padding: '.4rem 1.7rem ',
                        fontSize: '1.2rem',
                        fontFamily: 'Century Gothic',
                        textDecoration: 'none',
                    }}>
                    Folders
                </Link>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', width: '7.8rem' }}>
                <Link
                    to="/playlists"
                    style={{
                        width: '4rem',
                        background:
                            ActiveBtnIs === 'Playlists' &&
                            'linear-gradient(180deg, #15686B 0%, #06A0B5 100%)',
                        color: '#FFFFFF',
                        border:
                            ActiveBtnIs === 'Playlists'
                                ? '.1rem solid trnsparent'
                                : '.1rem solid #ffffff',
                        borderRadius: '2.3rem',
                        padding: '.4rem 1.7rem ',
                        fontSize: '1.2rem',
                        fontFamily: 'Century Gothic',
                        textDecoration: 'none',
                    }}>
                    Playlists
                </Link>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', width: '7.8rem' }}>
                <Link
                    to="/artists"
                    style={{
                        width: '4rem',
                        background:
                            ActiveBtnIs === 'Artists' &&
                            'linear-gradient(180deg, #15686B 0%, #06A0B5 100%)',
                        color: '#FFFFFF',
                        border:
                            ActiveBtnIs === 'Artists'
                                ? '.1rem solid trnsparent'
                                : '.1rem solid #ffffff',
                        borderRadius: '2.3rem',
                        padding: '.4rem 1.7rem ',
                        fontSize: '1.2rem',
                        fontFamily: 'Century Gothic',
                        textDecoration: 'none',
                    }}>
                    Artists
                </Link>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', width: '7.8rem' }}>
                <Link
                    to="/albums"
                    style={{
                        width: '4rem',
                        background:
                            ActiveBtnIs === 'Albums' &&
                            'linear-gradient(180deg, #15686B 0%, #06A0B5 100%)',
                        color: '#FFFFFF',
                        border:
                            ActiveBtnIs === 'Albums'
                                ? '.1rem solid trnsparent'
                                : '.1rem solid #ffffff',
                        borderRadius: '2.3rem',
                        padding: '.4rem 1.7rem ',
                        fontSize: '1.2rem',
                        fontFamily: 'Century Gothic',
                        textDecoration: 'none',
                    }}>
                    Albums
                </Link>
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', width: '14.5rem' }}>
                <Link
                    to="/podcasts"
                    style={{
                        width: '10.5rem',
                        background:
                            ActiveBtnIs === 'Podcasts & Shows' &&
                            'linear-gradient(180deg, #15686B 0%, #06A0B5 100%)',
                        color: '#FFFFFF',
                        border:
                            ActiveBtnIs === 'Podcasts & Shows'
                                ? '.1rem solid trnsparent'
                                : '1px solid #ffffff',
                        borderRadius: '2.3rem',
                        padding: '.4rem 1.7rem ',
                        fontSize: '1.2rem',
                        fontFamily: 'Century Gothic',
                        textDecoration: 'none',
                    }}>
                    Podcasts & Shows
                </Link>
            </SwiperSlide>
        </Swiper>
    );
}
ButtonsSlider.propTypes = {
    ActiveBtnIs: PropTypes.string.isRequired,
};
export default ButtonsSlider;

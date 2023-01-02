/* eslint-disable no-console */
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import ButtonsSlider from 'components/shared/buttonsSlider';
import SingerCard from 'components/shared/SingerCard';
import Footer from 'layout/Footer';
import LibraryPagesHeader from 'layout/libraryPagesHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import singer1 from '../../assets/images/conan-gary.png';
import singer2 from '../../assets/images/chase-atlantic.png';
import singer3 from '../../assets/images/beabadoobee.png';
import singer4 from '../../assets/images/new-jeans.png';
import singer5 from '../../assets/images/keshi.png';

function Artists() {
    return (
        <Container>
            <Box
                sx={{
                    backgroundColor: '#000000',
                    maxWidth: '43.3rem',
                    margin: '0 auto',
                }}>
                <LibraryPagesHeader />
                <ButtonsSlider ActiveBtnIs="Artists" />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: '2.7rem',
                        mt: '.9rem',
                    }}>
                    <Typography
                        sx={{
                            fontFamily: 'Century Gothic',
                            fontSize: '1.6rem',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            flexGrow: 1,
                            marginLeft: '2.4rem',
                        }}>
                        Sort By{' '}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                fontFamily: 'Century Gothic',
                                fontSize: '1.6rem',
                                color: '#39C0D4',
                                fontWeight: 700,
                            }}>
                            Add New Playlist
                        </Typography>
                        <ImportExportSharpIcon
                            sx={{ fontSize: '1.7rem' }}
                            style={{
                                color: '#979797',
                                marginRight: '1.7rem',
                                marginLeft: '.3rem',
                            }}
                        />
                    </div>
                </Box>
                <Swiper
                    spaceBetween={0}
                    slidesPerView="auto"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    direction="vertical"
                    pagination
                    style={{ maxHeight: '500px' }}>
                    <SwiperSlide>
                        <SingerCard image={singer1} name="Conan Gray" to="/" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingerCard
                            image={singer2}
                            name="Chase Atlantic"
                            to="/"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingerCard image={singer3} name="beabadoobee" to="/" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingerCard image={singer4} name="New Jeans" to="/" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingerCard image={singer5} name="keshi" to="/" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingerCard image={singer1} name="Conan Gray" to="/" />
                    </SwiperSlide>
                </Swiper>
                <Footer />
            </Box>
        </Container>
    );
}

export default Artists;

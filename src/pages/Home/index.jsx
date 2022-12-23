import { Box } from '@mui/material';
import { MusicCardHome, SliderPictureCreator, TitleCreator } from 'components';
import React from 'react';
import homePicOneSectionOne from 'assets/images/homePic1-sectionOne.png';
import homePicTwoSectionOne from 'assets/images/homePic2-sectionOne.png';
import homePicThreeSectionOne from 'assets/images/homePic3-sectionOne.png';
import homePicFourSectionOne from 'assets/images/homePic4-sectionOne.png';
import homePicFiveSectionOne from 'assets/images/homePic5-sectionOne.png';
import homePicSixSectionOne from 'assets/images/homePic6-sectionOne.png';
import homePicOneSliderOne from 'assets/images/homePic1_sliderOne.png';
import homePicTwoSliderOne from 'assets/images/homePic2_sliderOne.png';
import homePicThreeSliderOne from 'assets/images/homePic3_sliderOne.png';
import homePicOneSliderTwo from 'assets/images/homePic1_sliderTwo.png';
import homePicTwoSliderTwo from 'assets/images/homePic2_sliderTwo.png';

function Home() {
    return (
        <Box
            sx={{
                backgroundColor: '#000000',
                width: '422px',
                margin: '0 auto',
            }}>
            <TitleCreator title="Continue Listening" />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '.9rem',
                    margin: '1.2rem 1.2rem 3.5rem',
                }}>
                <MusicCardHome
                    icon={homePicOneSectionOne}
                    title="Coffee & Jazz"
                />
                <MusicCardHome icon={homePicTwoSectionOne} title="RELEASED" />
                <MusicCardHome
                    icon={homePicThreeSectionOne}
                    title="Anything Goes"
                />
                <MusicCardHome
                    icon={homePicFourSectionOne}
                    title="Anime OSTs"
                />
                <MusicCardHome
                    icon={homePicFiveSectionOne}
                    title="Harry’s House"
                />
                <MusicCardHome
                    icon={homePicSixSectionOne}
                    title="Lo-Fi Beats"
                />
            </Box>

            <TitleCreator title="Your Top Mixes" />
            <Box
                sx={{
                    display: 'flex',
                    overflow: 'scroll',
                    gap: '3.4rem',
                    margin: '1.2rem 1.2rem 3.5rem',
                }}>
                <SliderPictureCreator
                    iconWidth="15rem"
                    iconHeight="15rem"
                    icon={homePicOneSliderOne}
                    title="Pop Mix"
                    borderColor="#FF7777"
                />
                <SliderPictureCreator
                    iconWidth="15rem"
                    iconHeight="15rem"
                    icon={homePicTwoSliderOne}
                    title="Pop Mix"
                    borderColor="#FFFA77"
                />
                <SliderPictureCreator
                    iconWidth="15rem"
                    iconHeight="15rem"
                    icon={homePicThreeSliderOne}
                    title="Pop Mix"
                    borderColor="#1DB83F"
                />
                <SliderPictureCreator
                    iconWidth="15rem"
                    iconHeight="15rem"
                    icon={homePicOneSliderOne}
                    title="Pop Mix"
                    borderColor="#FF7777"
                />
                <SliderPictureCreator
                    iconWidth="15rem"
                    iconHeight="15rem"
                    icon={homePicTwoSliderOne}
                    title="Pop Mix"
                    borderColor="#FFFA77"
                />
                <SliderPictureCreator
                    iconWidth="15rem"
                    iconHeight="15rem"
                    icon={homePicThreeSliderOne}
                    title="Pop Mix"
                    borderColor="#1DB83F"
                />
            </Box>
            <TitleCreator title="Based on your recent listening" />
            <Box
                sx={{
                    display: 'flex',
                    overflow: 'scroll',
                    gap: '3.4rem',
                    padding: '1.2rem 1.2rem 3.5rem',
                }}>
                <SliderPictureCreator
                    iconWidth="18.2rem"
                    iconHeight="18.2rem"
                    icon={homePicOneSliderTwo}
                />
                <SliderPictureCreator
                    iconWidth="18.2rem"
                    iconHeight="18.2rem"
                    icon={homePicTwoSliderTwo}
                />
                <SliderPictureCreator
                    iconWidth="18.2rem"
                    iconHeight="18.2rem"
                    icon={homePicOneSliderTwo}
                />
            </Box>
        </Box>
    );
}

export default Home;

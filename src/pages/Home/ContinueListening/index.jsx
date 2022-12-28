import { Box } from '@mui/material';
import { MusicCardHome, TitleCreator } from 'components';
import homePicOneSectionOne from 'assets/images/homePic1-sectionOne.png';
import homePicTwoSectionOne from 'assets/images/homePic2-sectionOne.png';
import homePicThreeSectionOne from 'assets/images/homePic3-sectionOne.png';
import homePicFourSectionOne from 'assets/images/homePic4-sectionOne.png';
import homePicFiveSectionOne from 'assets/images/homePic5-sectionOne.png';
import homePicSixSectionOne from 'assets/images/homePic6-sectionOne.png';

export function ContinueListening() {
    return (
        <Box component="div" sx={{ margin: '0 1.6rem' }}>
            <TitleCreator title="Continue Listening" />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '.9rem',
                    margin: '1.2rem 0rem 3.5rem',
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
        </Box>
    );
}

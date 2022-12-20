import { Box, Button } from '@mui/material';
import { LyricsDrawer, MusicPlayerSlider } from 'components';
// import { LyricsDrawer, MusicPlayerSlider } from '';
import React from 'react';

function SongPage() {
    return (
        <Box
            sx={{
                maxWidth: 433,
                mx: 'auto',
                background: '#1e1e1e',
                pt: 35 / 8,
                position: 'relative',
                height: 500,
                borderRadius: 5,
                overflow: 'hidden',
                fontFamily: 'Century Gothic',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 50 / 8,
                }}>
                <Box>
                    <div>PLAYING FROM PLAYLIST:</div>
                    <Button>Lofi Loft !icon!</Button>
                </Box>
                <Box>!icon!</Box>
            </Box>
            <MusicPlayerSlider />
            <LyricsDrawer />
        </Box>
    );
}

export default SongPage;

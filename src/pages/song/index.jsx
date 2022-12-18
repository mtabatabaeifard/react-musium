import { useTheme } from '@emotion/react';
import { Box, Button } from '@mui/material';
import { LyricsDrawer } from 'components';
import React from 'react';

function SongPage() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                maxWidth: 433,
                mx: 'auto',
                background: theme.palette.background.default,
                pt: 35 / 8,
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
            <LyricsDrawer />
        </Box>
    );
}

export default SongPage;

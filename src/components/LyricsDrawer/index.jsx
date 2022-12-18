/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';

export function LyricsDrawer() {
    const theme = useTheme();
    return (
        <Box
            p={25 / 8}
            sx={{
                background: theme.palette.primary.main,
                mx: 25 / 8,
                fontSize: '2rem',
                color: '#fff',
                borderRadius: '2.5rem',
            }}>
            You never look at the sky Cause you think it's too high You never
            look at the stars Cause you think they're too far But they're
            showing the lights to the way back home When you don't know where to
            go
        </Box>
    );
}

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
                mx: 23 / 8,
                fontSize: '2rem',
                fontWeight: '600',
                color: '#fff',
                borderRadius: '2.5rem',
                position: 'absolute',
                maxWidth: '381px',
                bottom: -88,
                boxShadow: 'inset 0rem .4rem .4rem rgba(0, 0, 0, 0.25)',
            }}>
            You never look at the sky <br />
            Cause you think it's too high <br />
            You never look at the stars <br />
            Cause you think they're too far <br />
            But they're showing the lights <br />
            to the way back home <br />
            When you don't know where to go
        </Box>
    );
}

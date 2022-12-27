/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

export function LyricsDrawer() {
    const theme = useTheme();
    const [drawerState, setDrawerState] = useState(false);

    window.onwheel = (e) => {
        const scrollPosition = window.pageYOffset;
        const windowSize = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;

        const bottomDistance = Math.max(
            bodyHeight - (scrollPosition + windowSize),
            0,
        );

        if (bottomDistance === 0) {
            if (e.deltaY >= 0) {
                setDrawerState(true);
            }
        } else if (scrollPosition === 0) {
            if (e.deltaY < 0) {
                setDrawerState(false);
            }
        }
    };

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
                paddingBottom: `${drawerState ? '25rem' : '1.5rem'}`,
                bottom: `${drawerState ? '16.5rem' : '-8.8rem'}`,
                lineHeight: `${drawerState ? '5rem' : '2.6rem'}`,
                transition: 'all 1s ease-out .2s',
                boxShadow: 'inset 0rem .4rem .4rem rgba(0, 0, 0, 0.25)',
                // overflow: `${drawerState ? 'scroll' : 'none'}`,
                [theme.breakpoints.down('smallMobile')]: {
                    bottom: -154,
                },
                [theme.breakpoints.down('smallerMobile')]: {
                    bottom: -208,
                },
                [theme.breakpoints.down('smallestMobile')]: {
                    bottom: -238,
                },
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

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import PlayListHeader from 'pages/PlayList/playListHeader';
import PlayListImage1 from 'assets/images/PlayListImage1.png';
import PlayListItems from 'components/PlayListItems';
import PlayListFooter from 'layout/core/PlayListFooter';

function PlayList() {
    const theme = useTheme();

    const style = {
        Box: {
            maxWidth: theme.breakpoints.values.smallMobile,
            mx: 'auto',
            background: theme.palette.primary.dark,
            textAlign: 'center',
            pt: '3.6rem',
        },
        typography1: {
            fontWeight: '700',
            fontSize: '3.4rem',
            color: theme.palette.text.primary,
            fontFamily: 'Century Gothic',
            letterSpacing: '0.095em',
            pt: '2.1rem',
        },
        typography2: {
            fontWeight: '700',
            fontSize: '1.3rem',
            color: theme.palette.secondary.main,
            fontFamily: 'Century Gothic',
            letterSpacing: '0.06em',
            paddingBottom: '4rem',
        },
    };
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <PlayListHeader />

            <Box sx={style.Box}>
                <img src={PlayListImage1} alt="song" />
                <Typography sx={style.typography1}>Lofi Loft</Typography>
                <Typography sx={style.typography2}>
                    soft, chill, dreamy, lo-fi beats
                </Typography>
            </Box>

            <PlayListItems />

            <PlayListFooter />
        </div>
    );
}

export default PlayList;

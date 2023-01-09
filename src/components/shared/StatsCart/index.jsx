import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// eslint-disable-next-line react/prop-types
export function StatsCart({ number, artistName, trackName, img }) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: '100%',
                height: '79px',
                background: 'rgba(30, 30, 30, 0.81)',
                borderRadius: '10px',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                gap: '10%',
                padding: '5%',
            }}>
            <Box
                sx={{
                    fontFamily: 'Century Gothic',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '25px',
                    textAlign: 'center',
                    letterSpacing: '0.06em',
                    color: theme.palette.text.primary,
                }}>
                {number}
            </Box>

            <img
                style={{ width: '53px', height: '52px' }}
                src={img}
                alt="icon"
            />

            <Box>
                <Box
                    sx={{
                        fontWeight: 700,
                        fontSize: '17px',
                        lineHeight: '21px',
                        letterSpacing: ' 0.06em',
                        color: theme.palette.text.primary,
                    }}>
                    {trackName}
                </Box>
                <Box
                    sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        letterSpacing: ' 0.055em',
                        color: theme.palette.secondary.main,
                    }}>
                    {artistName}
                </Box>
            </Box>
        </Box>
    );
}

import { Box, useTheme, ButtonBase } from '@mui/material';
import React from 'react';

function StatsPage() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                maxWidth: 433,
                height: '922px',
                background: ' #000000',
                mx: 'auto',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'Century Gothic',
                pt: 35 / 8,
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                <Box>
                    <svg
                        width="22"
                        height="17"
                        viewBox="0 0 22 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.293 9.52223C0.105529 9.30791 0.000213623 9.01727 0.000213623 8.71423C0.000213623 8.41118 0.105529 8.12055 0.293 7.90623L6.293 1.04909C6.4816 0.840905 6.7342 0.725711 6.9964 0.728315C7.2586 0.730919 7.50941 0.851112 7.69482 1.06301C7.88023 1.2749 7.9854 1.56154 7.98767 1.8612C7.98995 2.16085 7.88916 2.44954 7.707 2.66509L3.414 7.57137H21C21.2652 7.57137 21.5196 7.69178 21.7071 7.90611C21.8946 8.12043 22 8.41112 22 8.71423C22 9.01733 21.8946 9.30802 21.7071 9.52235C21.5196 9.73668 21.2652 9.85709 21 9.85709H3.414L7.707 14.7634C7.88916 14.9789 7.98995 15.2676 7.98767 15.5673C7.9854 15.8669 7.88023 16.1536 7.69482 16.3655C7.50941 16.5773 7.2586 16.6975 6.9964 16.7001C6.7342 16.7027 6.4816 16.5876 6.293 16.3794L0.293 9.52223Z"
                            fill="white"
                        />
                    </svg>
                </Box>
                <Box>
                    <Box
                        sx={{
                            marginLeft: '23px',
                        }}>
                        <Box
                            sx={{
                                fontSize: '20px',
                                lineHeight: '25px',
                                textAlign: 'center',
                                letterSpacing: '0.1rem',
                                color: theme.palette.text.primary,
                            }}>
                            TOP
                        </Box>
                        <Box
                            sx={{
                                fontSize: '10px',
                                lineHeight: '12px',
                                textAlign: 'center',
                                letterSpacing: '0.06rem',
                                color: theme.palette.text.primary,
                            }}>
                            past 30Days
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '10px',
                    }}>
                    <Box>
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.37499 7.70837H6.91666C7.12662 7.70837 7.32799 7.62497 7.47645 7.4765C7.62492 7.32803 7.70833 7.12667 7.70833 6.91671V1.37504C7.70833 1.16508 7.62492 0.963714 7.47645 0.815248C7.32799 0.666781 7.12662 0.583374 6.91666 0.583374H1.37499C1.16503 0.583374 0.963668 0.666781 0.815202 0.815248C0.666736 0.963714 0.583328 1.16508 0.583328 1.37504V6.91671C0.583328 7.12667 0.666736 7.32803 0.815202 7.4765C0.963668 7.62497 1.16503 7.70837 1.37499 7.70837ZM2.16666 2.16671H6.12499V6.12504H2.16666V2.16671ZM16.4167 1.37504C16.4167 1.16508 16.3333 0.963714 16.1848 0.815248C16.0363 0.666781 15.835 0.583374 15.625 0.583374H10.0833C9.87336 0.583374 9.672 0.666781 9.52353 0.815248C9.37507 0.963714 9.29166 1.16508 9.29166 1.37504V6.91671C9.29166 7.12667 9.37507 7.32803 9.52353 7.4765C9.672 7.62497 9.87336 7.70837 10.0833 7.70837H15.625C15.835 7.70837 16.0363 7.62497 16.1848 7.4765C16.3333 7.32803 16.4167 7.12667 16.4167 6.91671V1.37504ZM14.8333 6.12504H10.875V2.16671H14.8333V6.12504ZM0.583328 15.625C0.583328 15.835 0.666736 16.0364 0.815202 16.1848C0.963668 16.3333 1.16503 16.4167 1.37499 16.4167H6.91666C7.12662 16.4167 7.32799 16.3333 7.47645 16.1848C7.62492 16.0364 7.70833 15.835 7.70833 15.625V10.0834C7.70833 9.87341 7.62492 9.67205 7.47645 9.52358C7.32799 9.37511 7.12662 9.29171 6.91666 9.29171H1.37499C1.16503 9.29171 0.963668 9.37511 0.815202 9.52358C0.666736 9.67205 0.583328 9.87341 0.583328 10.0834V15.625ZM2.16666 10.875H6.12499V14.8334H2.16666V10.875ZM16.4167 15.625V10.0834C16.4167 9.87341 16.3333 9.67205 16.1848 9.52358C16.0363 9.37511 15.835 9.29171 15.625 9.29171H10.0833C9.87336 9.29171 9.672 9.37511 9.52353 9.52358C9.37507 9.67205 9.29166 9.87341 9.29166 10.0834V15.625C9.29166 15.835 9.37507 16.0364 9.52353 16.1848C9.672 16.3333 9.87336 16.4167 10.0833 16.4167H15.625C15.835 16.4167 16.0363 16.3333 16.1848 16.1848C16.3333 16.0364 16.4167 15.835 16.4167 15.625ZM14.8333 14.8334H10.875V10.875H14.8333V14.8334Z"
                                fill="white"
                            />
                        </svg>
                    </Box>
                    <Box>
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.37499 7.70837H7.70833V1.37504C7.70833 1.16508 7.79174 0.963714 7.9402 0.815248C8.08867 0.666781 8.29003 0.583374 8.49999 0.583374C8.70996 0.583374 8.91132 0.666781 9.05979 0.815248C9.20825 0.963714 9.29166 1.16508 9.29166 1.37504V7.70837H15.625C15.835 7.70837 16.0363 7.79178 16.1848 7.94025C16.3333 8.08871 16.4167 8.29008 16.4167 8.50004C16.4167 8.71 16.3333 8.91137 16.1848 9.05983C16.0363 9.2083 15.835 9.29171 15.625 9.29171H9.29166V15.625C9.29166 15.835 9.20825 16.0364 9.05979 16.1848C8.91132 16.3333 8.70996 16.4167 8.49999 16.4167C8.29003 16.4167 8.08867 16.3333 7.9402 16.1848C7.79174 16.0364 7.70833 15.835 7.70833 15.625V9.29171H1.37499C1.16503 9.29171 0.963668 9.2083 0.815202 9.05983C0.666736 8.91137 0.583328 8.71 0.583328 8.50004C0.583328 8.29008 0.666736 8.08871 0.815202 7.94025C0.963668 7.79178 1.16503 7.70837 1.37499 7.70837Z"
                                fill="white"
                            />
                        </svg>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    pt: '25px',
                    px: '20px',
                }}>
                <ButtonBase
                    sx={{
                        fontSize: '16px',
                        lineHeight: '20px',
                        textAlign: 'center',
                        letterSpacing: '0.06em',
                        color: '#39C0D4',
                        textShadow: '0px 0px 4px #39C0D4',
                    }}>
                    Treaks
                </ButtonBase>
                <ButtonBase
                    sx={{
                        color: theme.palette.text.primary,
                        fontSize: '16px',
                        lineHeight: '20px',
                        textAlign: 'center',
                        letterSpacing: '0.06rem',
                    }}>
                    Artist
                </ButtonBase>
                <ButtonBase
                    sx={{
                        color: theme.palette.text.primary,
                        fontSize: '16px',
                        lineHeight: '20px',
                        textAlign: 'center',
                        letterSpacing: '0.06rem',
                    }}>
                    Albume
                </ButtonBase>
            </Box>
        </Box>
    );
}

export default StatsPage;

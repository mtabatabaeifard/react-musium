import React from 'react';
import { Box, ButtonBase, Typography, useTheme } from '@mui/material';
import { GoBackButton } from 'components/shared/GoBackButton';

function PlayListHeader() {
    const theme = useTheme();
    return (
        <div>
            <Box
                sx={{
                    maxWidth: theme.breakpoints.values.smallMobile,
                    mx: 'auto',
                    background: theme.palette.primary.dark,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxSizing: ' border-box',
                    px: ' 2.17rem',
                    pt: '3.4rem',
                }}>
                <ButtonBase>
                    <GoBackButton />
                </ButtonBase>
                <Typography
                    sx={{
                        color: theme.palette.text.primary,
                        fontFamily: 'Century Gothic',
                        fontWeight: ' 400',
                        fontSize: '1.2rem',
                        letterSpacing: '0.06em',
                    }}>
                    FROM “PLAYLISTS”
                </Typography>
                <ButtonBase>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 12C10 11.6044 10.1173 11.2178 10.3371 10.8889C10.5568 10.56 10.8692 10.3036 11.2346 10.1522C11.6001 10.0009 12.0022 9.96126 12.3902 10.0384C12.7781 10.1156 13.1345 10.3061 13.4142 10.5858C13.6939 10.8655 13.8844 11.2219 13.9616 11.6098C14.0387 11.9978 13.9991 12.3999 13.8478 12.7654C13.6964 13.1308 13.44 13.4432 13.1111 13.6629C12.7822 13.8827 12.3956 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12V12ZM14 20C14 19.6044 13.8827 19.2178 13.6629 18.8889C13.4432 18.56 13.1308 18.3036 12.7654 18.1522C12.3999 18.0009 11.9978 17.9613 11.6098 18.0384C11.2219 18.1156 10.8655 18.3061 10.5858 18.5858C10.3061 18.8655 10.1156 19.2219 10.0384 19.6098C9.96126 19.9978 10.0009 20.3999 10.1522 20.7654C10.3036 21.1308 10.56 21.4432 10.8889 21.6629C11.2178 21.8827 11.6044 22 12 22C12.5304 22 13.0391 21.7893 13.4142 21.4142C13.7893 21.0391 14 20.5304 14 20ZM10 4C10 4.39556 10.1173 4.78224 10.3371 5.11114C10.5568 5.44004 10.8692 5.69638 11.2346 5.84776C11.6001 5.99913 12.0022 6.03874 12.3902 5.96157C12.7781 5.8844 13.1345 5.69392 13.4142 5.41421C13.6939 5.13451 13.8844 4.77814 13.9616 4.39018C14.0387 4.00222 13.9991 3.60008 13.8478 3.23463C13.6964 2.86918 13.44 2.55682 13.1111 2.33706C12.7822 2.1173 12.3956 2 12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2107 2.96086 10 3.46957 10 4Z"
                            fill="white"
                        />
                    </svg>
                </ButtonBase>
            </Box>
        </div>
    );
}

export default PlayListHeader;

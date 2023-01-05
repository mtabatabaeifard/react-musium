import {
    Avatar,
    ButtonBase,
    ListItem,
    ListItemAvatar,
    Typography,
    useTheme,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function PlayListItem({ src, textPrimary, textSecondary, style }) {
    const theme = useTheme();

    return (
        <div>
            <ListItem
                style={style}
                sx={{
                    maxWidth: theme.breakpoints.values.smallMobile,
                    mx: 'auto',
                    background: theme.palette.primary.dark,
                    boxSizing: 'border-box',
                    px: '3.3rem',
                }}>
                <ListItemAvatar>
                    <Avatar src={src} variant="square" />
                </ListItemAvatar>

                <div style={{ flexGrow: '1' }}>
                    <Typography
                        sx={{
                            fontFamily: 'Century Gothic',
                            fontWeight: '700',
                            fontSize: '1.6rem',
                            lineHeight: '2rem',
                            letterSpacing: '0.06em',
                            color: theme.palette.text.primary,
                        }}>
                        {textPrimary}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Century Gothic',
                            fontWeight: '700',
                            fontSize: '1.2rem',
                            letterSpacing: '0.055em',
                            color: theme.palette.secondary.main,
                        }}>
                        {textSecondary}
                    </Typography>
                </div>
                <ButtonBase
                    sx={{
                        display: 'flex',
                        justifyContent: 'start',
                    }}>
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.25 7.5C6.25 7.25277 6.32331 7.0111 6.46066 6.80554C6.59802 6.59998 6.79324 6.43976 7.02165 6.34515C7.25005 6.25054 7.50139 6.22579 7.74386 6.27402C7.98634 6.32225 8.20907 6.4413 8.38388 6.61612C8.5587 6.79093 8.67775 7.01366 8.72598 7.25614C8.77421 7.49861 8.74946 7.74995 8.65485 7.97835C8.56024 8.20676 8.40002 8.40199 8.19446 8.53934C7.9889 8.67669 7.74723 8.75 7.5 8.75C7.16848 8.75 6.85054 8.6183 6.61612 8.38388C6.3817 8.14946 6.25 7.83152 6.25 7.5ZM8.75 12.5C8.75 12.2528 8.67669 12.0111 8.53934 11.8055C8.40199 11.6 8.20676 11.4398 7.97835 11.3452C7.74995 11.2505 7.49861 11.2258 7.25614 11.274C7.01366 11.3222 6.79093 11.4413 6.61612 11.6161C6.4413 11.7909 6.32225 12.0137 6.27402 12.2561C6.22579 12.4986 6.25054 12.7499 6.34515 12.9784C6.43976 13.2068 6.59998 13.402 6.80554 13.5393C7.0111 13.6767 7.25277 13.75 7.5 13.75C7.83152 13.75 8.14946 13.6183 8.38388 13.3839C8.6183 13.1495 8.75 12.8315 8.75 12.5ZM6.25 2.5C6.25 2.74723 6.32331 2.9889 6.46066 3.19446C6.59802 3.40002 6.79324 3.56024 7.02165 3.65485C7.25005 3.74946 7.50139 3.77421 7.74386 3.72598C7.98634 3.67775 8.20907 3.5587 8.38388 3.38388C8.5587 3.20907 8.67775 2.98634 8.72598 2.74386C8.77421 2.50139 8.74946 2.25005 8.65485 2.02165C8.56024 1.79324 8.40002 1.59801 8.19446 1.46066C7.9889 1.32331 7.74723 1.25 7.5 1.25C7.16848 1.25 6.85054 1.3817 6.61612 1.61612C6.3817 1.85054 6.25 2.16848 6.25 2.5Z"
                            fill="white"
                        />
                    </svg>
                </ButtonBase>
            </ListItem>
        </div>
    );
}

PlayListItem.propTypes = {
    src: PropTypes.string.isRequired,
    textPrimary: PropTypes.string.isRequired,
    textSecondary: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
};

export default PlayListItem;

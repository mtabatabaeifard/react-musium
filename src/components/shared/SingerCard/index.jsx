import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function SingerCard({ image, name, to }) {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 0 2.7rem 2.8rem',
                }}>
                <img src={image} alt={name} />
                <Typography
                    sx={{
                        fontFamily: 'Century Gothic',
                        fontSize: '2rem',
                        color: '#ffffff',
                        fontWeight: 700,
                        ml: '2.4rem',
                    }}>
                    {name}
                </Typography>
            </Box>
        </Link>
    );
}
SingerCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
export default SingerCard;

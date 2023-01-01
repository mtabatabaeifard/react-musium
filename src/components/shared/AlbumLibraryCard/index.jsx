import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function AlbumLibraryCard({ title, desc, image, to }) {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0 0 2.7rem 2.8rem',
                }}>
                <img src={image} width="84px" height="82px" alt="conan gary" />
                <div>
                    <Typography
                        sx={{
                            fontFamily: 'Century Gothic',
                            fontSize: '2rem',
                            color: '#ffffff',
                            fontWeight: 700,
                            ml: '2.1rem',
                        }}>
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Century Gothic',
                            fontSize: '1.5rem',
                            color: '#8A9A9D',
                            fontWeight: 700,
                            ml: '2.1rem',
                        }}>
                        {desc}
                    </Typography>
                </div>
            </div>
        </Link>
    );
}
AlbumLibraryCard.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
export default AlbumLibraryCard;

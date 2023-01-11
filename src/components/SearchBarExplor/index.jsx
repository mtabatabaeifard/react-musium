import { Box } from '@mui/system';
import React from 'react';
import SearchIcon from '../../assets/images/imagesExplor/Vector.png';

export function SearchBarExplor() {
    return (
        <Box>
            <img
                style={{
                    position: 'absolute',
                    marginLeft: '6rem',
                    marginTop: '4.2rem',
                    zIndex: '1',
                }}
                src={SearchIcon}
                alt="IconSearch"
            />
            <input
                style={{
                    width: '36.4rem',
                    height: '4.4rem',
                    borderRadius: '1.8rem',
                    marginTop: '2.9rem',
                    marginLeft: '4.1rem',
                    paddingLeft: '4.9rem',
                    background: 'rgba(217, 217, 217, 1)',
                    color: 'rgba(138, 154, 157, 1)',
                    fontFamily: 'Century Gothic',
                }}
                placeholder="Songs, Artists, Podcasts & More"
                type="search"
            />
        </Box>
    );
}

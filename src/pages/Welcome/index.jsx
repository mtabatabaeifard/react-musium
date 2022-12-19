import React from 'react';
import { Box } from '@mui/material';
import circle from '../../assets/images/Welcome/Ellipse.svg';
import './style.css';

function Welcome() {
    return (
        <Box
            bgcolor="primary.medium"
            height="100vh"
            display="flex"
            flexDirection="column"
            className="main-image">
            <Box display="flex" justifyContent="space-between">
                <img src={circle} alt="" className="circle big-circle" />
                <img src={circle} alt="" className="circle small-circle" />
            </Box>
            <img src={circle} alt="" className="circle medium-circle" />
            <Box
                bgcolor="common.black"
                borderRadius="54px 54px 0 0"
                display="flex">
                <p style={{ color: 'white' }}>
                    From the latest to the greatest hits, play your favorite
                    onmusium now!
                </p>
            </Box>
        </Box>
    );
}

export default Welcome;

import { Box } from '@mui/material';

import React from 'react';
import { ContinueListening } from './ContinueListening';
import { FirstSlider } from './FirstSlider';
import { SecondSlider } from './SecondSlider';

function Home() {
    return (
        <Box
            sx={{
                backgroundColor: '#000000',
                width: '422px',
                margin: '0 auto',
            }}>
            <ContinueListening />
            <FirstSlider />
            <SecondSlider />
        </Box>
    );
}

export default Home;

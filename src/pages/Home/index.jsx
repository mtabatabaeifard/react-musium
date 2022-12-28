import { Box } from '@mui/material';
import React from 'react';
import { ContinueListening } from './ContinueListening';
import { FirstSlider } from './FirstSlider';
import { SecondSlider } from './SecondSlider';

function Home() {
    return (
        <Box
            component="div"
            sx={{
                backgroundColor: '#000000',
                maxWidth: '422px',
                margin: '0 auto',
            }}>
            <ContinueListening />
            <FirstSlider />
            <SecondSlider />
        </Box>
    );
}

export default Home;

import { Box } from '@mui/material';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import React from 'react';
import { ContinueListening } from './ContinueListening';
import { FirstSlider } from './FirstSlider';
import { SecondSlider } from './SecondSlider';

function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#000000',
          width: '422px',
          margin: '0 auto'
        }}>
        <Header />
        <ContinueListening />
        <FirstSlider />
        <SecondSlider />
      </Box>
      <Box
        sx={{
          backgroundColor: '#000000',
          width: '422px',
          margin: '0 auto'
        }}>
        <Footer />
      </Box>
    </>
  );
}

export default Home;

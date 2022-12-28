import { Box } from '@mui/material';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import React from 'react';
import { ContinueListening } from './ContinueListening';
import { FirstSlider } from './FirstSlider';
import { SecondSlider } from './SecondSlider';

function Home() {
<<<<<<< HEAD
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
=======
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
>>>>>>> e5ca0a6675ada1ba7784156ed158402ad202c2c5
}

export default Home;

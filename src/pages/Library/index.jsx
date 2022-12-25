import React from 'react'
import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/library-musium-logo.png';


function Library() {
  return (
    <Box sx={{backgroundColor:"#000000", maxWidth:433}}>
      <Box sx={{display:"flex",alignItems:'center',pt:"28px",pb:"24px",mx:"20px"}}>
      <img src={image1} alt="logo"/>
      <Box sx={{color:"#00C2CB",fontFamily:'Century Gothic',fontSize:"27px",flexGrow:"1",my:0}} component="h3">Your Library</Box>
      <SearchIcon  sx={{ color:"#ffffff",fontSize: 20 }}/>
      </Box>
      <Swiper
      spaceBetween={11}
      slidesPerView="auto"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{paddingBottom:"30px",paddingLeft:"20px"}}
    >
      <SwiperSlide style={{color:"#FFFFFF",border:"2px solid #ffffff",borderRadius:"23px",padding:"4px 17px ",fontSize:"12px",fontFamily:"Century Gothic",flexdShrink: 1,width: "40px"}}>Folders</SwiperSlide>
      <SwiperSlide style={{color:"#FFFFFF",border:"2px solid #ffffff",borderRadius:"23px",padding:"4px 17px ",fontSize:"12px",fontFamily:"Century Gothic",flexdShrink: 1,width: "40px"}}>Playlists</SwiperSlide>
      <SwiperSlide style={{color:"#FFFFFF",border:"2px solid #ffffff",borderRadius:"23px",padding:"4px 17px ",fontSize:"12px",fontFamily:"Century Gothic",flexdShrink: 1,width: "40px"}}>Artists</SwiperSlide>
      <SwiperSlide style={{color:"#FFFFFF",border:"2px solid #ffffff",borderRadius:"23px",padding:"4px 17px ",fontSize:"12px",fontFamily:"Century Gothic",flexdShrink: 1,width: "40px"}}>Albums</SwiperSlide>
      <SwiperSlide style={{color:"#FFFFFF",border:"2px solid #ffffff",borderRadius:"23px",padding:"4px 17px ",fontSize:"12px",fontFamily:"Century Gothic",flexdShrink: 1,width: "105px"}}>Podcasts & Shows</SwiperSlide>
    </Swiper>
    <Link to="/playlists" style={{display:"flex", alignItems:"center",textDecoration: "none",marginBottom:25}}>
        <Box sx={{width:56,height:56,background:"linear-gradient(180deg, #A6F3FF -15.18%, #00C2CB 84.82%)",borderRadius:"50%",boxShadow:"0px 0px 2px #00C2CB",display:"flex",justifyContent:"center",alignItems:"center",color:"#000000"}}>
            <AddRoundedIcon sx={{fontSize: 20 }}/>         
        </Box>
        <Typography sx={{fontFamily:"Century Gothic",fontSize:20,color:"#ffffff",ml:"24px",textDecoration: "none"}}>Add New Playlist</Typography> 
        <Typography/>  
    </Link>
    <Link to="/playlists" style={{display:"flex", alignItems:"center",textDecoration: "none"}}>
        <Box sx={{width:56,height:56,background:"linear-gradient(180deg, #A6F3FF -15.18%, #00C2CB 84.82%)",borderRadius:"50%",boxShadow:"0px 0px 2px #00C2CB",display:"flex",justifyContent:"center",alignItems:"center",color:"#000000"}}>
            <FavoriteBorderRoundedIcon sx={{fontSize: 20 }}/>           
        </Box>
        <Typography sx={{fontFamily:"Century Gothic",fontSize:20,color:"#ffffff",ml:"24px",textDecoration: "none"}}>Your Liked Songs</Typography> 
        <Typography/>  
    </Link>
    </Box>
  )
}

export default Library

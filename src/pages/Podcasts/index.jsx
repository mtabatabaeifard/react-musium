import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import YourLikedSongsBtn from 'components/shared/YourLikedSongsBtn';
import AlbumLibraryCard from 'components/shared/AlbumLibraryCard';
import ButtonsSlider from 'components/shared/buttonsSlider';
import PlayListFooter from 'layout/footer/PlayListFooter';
import image1 from '../../assets/images/library-musium-logo.png';
import songPic1 from '../../assets/images/homePic2-sectionOne.png';
import songPic2 from '../../assets/images/ask-me-another.png';
import songPic3 from '../../assets/images/baking-a-mystery.png';
import songPic4 from '../../assets/images/extra-dynamic.png';
import songPic5 from '../../assets/images/teenager-therapy.png';

function Podcasts() {
  return (
    <Container sx={{backgroundColor:"#000000", height:"86.5rem"}}>
    <Box sx={{backgroundColor:"#000000", maxWidth:"43.3rem", margin:"0 auto"}}>
      <Box sx={{display:"flex",alignItems:'center',pt:"2.8rem",pb:"2.4rem",mx:"2rem"}}>
      <img src={image1} alt="logo"/>
      <Box sx={{color:"#00C2CB",fontFamily:'Century Gothic',fontSize:"2.7rem",flexGrow:"1",my:0}} component="h3">Your Library</Box>
      <Link to="/">
      <SearchIcon  sx={{ color:"#ffffff",fontSize: "2rem" }}/>
      </Link>
    </Box>
    <ButtonsSlider ActiveBtnIs="Podcasts & Shows"/>  
    <YourLikedSongsBtn/>
    <div style={{display:"flex", alignItems:"center",marginBottom:"2.7rem"}}>
    <ImportExportSharpIcon sx={{fontSize: "1.7rem" }} style={{color:"#979797",margin:"0 .5rem 0 2.6rem"}}/>
    <Typography sx={{fontFamily:"Century Gothic",fontSize:"1.6rem",color:"#39C0D4",fontWeight:700}}>A - Z</Typography> 
    </div>
    <AlbumLibraryCard image={songPic1} title="Anything Goes" desc="Updated Aug 31 • Emma Chamberlain" to='/'/>
    <AlbumLibraryCard image={songPic2} title="Ask Me Another" desc="Updated Aug 18 • NPR Studios" to='/'/>
    <AlbumLibraryCard image={songPic3} title="Baking a Mystery" desc="Updated Aug 21• Stephanie Soo" to='/'/>
    <AlbumLibraryCard image={songPic4} title="Extra Dynamic" desc="Updated Aug 10 • ur mom ashley" to='/'/>
    <AlbumLibraryCard image={songPic5} title="Teenager Therapy" desc="Updated Aug 21• iHeart Studios" to='/'/>
    
    <PlayListFooter/>
    </Box>
    </Container>
  )
}

export default Podcasts

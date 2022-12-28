import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import ButtonsSlider from 'components/shared/buttonsSlider';
import SingerCard from 'components/shared/SingerCard';
import PlayListFooter from 'layout/footer/PlayListFooter';
import image1 from '../../assets/images/library-musium-logo.png';
import singer1 from '../../assets/images/conan-gary.png';
import singer2 from '../../assets/images/chase-atlantic.png';
import singer3 from '../../assets/images/beabadoobee.png';
import singer4 from '../../assets/images/new-jeans.png';
import singer5 from '../../assets/images/keshi.png';

function Artists() {
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
      <ButtonsSlider ActiveBtnIs="Artists"/>
      <Box sx={{display:"flex", alignItems:"center" ,mb:"2.7rem",mt:".9rem"}}>
      <Typography sx={{fontFamily:"Century Gothic",fontSize:"1.6rem",fontWeight: 700,color:"#FFFFFF",flexGrow:1,marginLeft:"2.4rem"}}>Sort By </Typography> 
      <div style={{display:"flex", alignItems:"center"}}>
      <Typography sx={{fontFamily:"Century Gothic",fontSize:"1.6rem",color:"#39C0D4",fontWeight:700}}>Add New Playlist</Typography> 
      <ImportExportSharpIcon sx={{fontSize: "1.7rem" }} style={{color:"#979797",marginRight:"1.7rem",marginLeft:".3rem"}}/>
      </div>
      </Box>
      <SingerCard image={singer1} name='Conan Gray' to='/'/>
      <SingerCard image={singer2} name='Chase Atlantic' to='/'/>
      <SingerCard image={singer3} name='beabadoobee' to='/'/>
      <SingerCard image={singer4} name='New Jeans' to='/'/>
      <SingerCard image={singer5} name='keshi' to='/'/>
      <SingerCard image={singer1} name='Conan Gray' to='/'/>
      <PlayListFooter/>
      </Box>
      </Container>
    )
  }

  export default Artists;
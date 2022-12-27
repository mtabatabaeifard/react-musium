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
import folder from '../../assets/images/folder-picture.png';

function PlayLists() {
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
    <ButtonsSlider ActiveBtnIs="Playlists"/>  
    <YourLikedSongsBtn/>
    <div style={{display:"flex", alignItems:"center",marginBottom:"2.7rem"}}>
    <ImportExportSharpIcon sx={{fontSize: "1.7rem" }} style={{color:"#979797",margin:"0 .5rem 0 2.6rem"}}/>
    <Typography sx={{fontFamily:"Century Gothic",fontSize:"1.6rem",color:"#39C0D4",fontWeight:700}}>Add New Playlist</Typography> 
    </div>
    <AlbumLibraryCard image={folder} title="Superache" desc="Conan Gray" to='/'/>
    <AlbumLibraryCard image={folder} title="DAWN FM" desc="The Weekend" to='/'/>
    <AlbumLibraryCard image={folder} title="Planet Her" desc="Doja Cat" to='/'/>
    <AlbumLibraryCard image={folder} title="Wiped Out!" desc="The Neighbourhood" to='/'/>
    <AlbumLibraryCard image={folder} title="Bloom" desc="Troye Sivan" to='/'/>
    
    <PlayListFooter/>
    </Box>
    </Container>
  )
}

export default PlayLists

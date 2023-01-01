import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import AddNewPlaylistBtn from 'components/shared/AddNewPlaylistBtn';
import YourLikedSongsBtn from 'components/shared/YourLikedSongsBtn';
import SingerCard from 'components/shared/SingerCard';
import AlbumLibraryCard from 'components/shared/AlbumLibraryCard';
import ButtonsSlider from 'components/shared/buttonsSlider';
import PlayListFooter from 'layout/core/PlayListFooter';
import image1 from '../../assets/images/library-musium-logo.png';
import singerImg from '../../assets/images/conan-gary.png';
import album1 from '../../assets/images/3amvibes.png';
import album2 from '../../assets/images/wiped-out.png';
import album3 from '../../assets/images/extra-dynamic.png';

function Library() {
  return (
    <Container sx={{ backgroundColor: "#000000", height: "86.5rem" }}>
      <Box sx={{ backgroundColor: "#000000", maxWidth: "43.3rem", margin: "0 auto" }}>
        <Box sx={{ display: "flex", alignItems: 'center', pt: "2.8rem", pb: "2.4rem", mx: "2rem" }}>
          <img src={image1} alt="logo" />
          <Box sx={{ color: "#00C2CB", fontFamily: 'Century Gothic', fontSize: "2.7rem", flexGrow: "1", my: 0 }} component="h3">Your Library</Box>
          <Link to="/">
            <SearchIcon sx={{ color: "#ffffff", fontSize: "2rem" }} />
          </Link>
        </Box>
        <ButtonsSlider ActiveBtnIs="" />
        <AddNewPlaylistBtn />
        <YourLikedSongsBtn />
        <div style={{ display: "flex", alignItems: "center", marginBottom: "2.7rem" }}>
          <ImportExportSharpIcon sx={{ fontSize: "1.7rem" }} style={{ color: "#979797", margin: "0 .5rem 0 2.6rem" }} />
          <Typography sx={{ fontFamily: "Century Gothic", fontSize: "1.6rem", color: "#39C0D4", fontWeight: 700 }}>Add New Playlist</Typography>
        </div>
        <SingerCard image={singerImg} name="conan gary" to='/' />
        <AlbumLibraryCard image={album1} title="3:00am vibes" desc="18 songs" to='/' />
        <AlbumLibraryCard image={album2} title="Wiped Out!" desc="The Neighbourhood" to='/' />
        <AlbumLibraryCard image={album3} title="Extra Dynamic" desc="Updated Aug 10 • ur mom ashley" to='/' />
        <PlayListFooter />
      </Box>
    </Container>
  )
}

export default Library;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import React from 'react';
// import NavBar from "../src/components/NavBar"
// import VideoDetail from "../src/components/VideoDetail"
// import ChannelDetail from "../src/components/ChannelDetail"
// import SearchFeed from "../src/components/SearchFeed"
// import Feed from "../src/components/Feed"
import { NavBar, VideoDetail, ChannelDetail, SearchFeed, Feed } from "./components"


function App() {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000'}}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />



      </Routes>

    </Box>
    
      </BrowserRouter>


  );
}

export default App;

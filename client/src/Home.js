import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PostsAlbum from './Components/PostsAlbum';
import SearchBar from './Components/SearchBar';
import Map from './Components/Map';

function Home() {
  return (
    <div>
      <Header />
      <Map />
      <SearchBar />
      <PostsAlbum />
      <Footer />
    </div>
  )
}

export default Home
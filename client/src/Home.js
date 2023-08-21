import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PostsAlbum from './Components/PostsAlbum';
import Map from './Components/Map';
import './Home.css'

function Home() {
  return (
    <div>
      <Header />
      <Map />
      <PostsAlbum />
      <Footer />
    </div>
  )
}

export default Home
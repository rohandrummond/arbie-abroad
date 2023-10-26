import React from 'react'
import Header from './Components/Header'
import HomeMap from './Components/HomeMap';
import HomePostsAlbum from './Components/HomePostsAlbum';
import HomePostsAlbumSVG from './HomePostsAlbumSVG.svg'
import Footer from './Components/Footer'
import './Home.css'

function Home() {
  return (
    <div>
      <Header />
      <div className="home-posts-album-svg">
        <img src={HomePostsAlbumSVG} alt="Home Posts Album SVG"></img>
      </div>
      <HomeMap />
      <HomePostsAlbum />
      <Footer />
    </div>
  )
}

export default Home
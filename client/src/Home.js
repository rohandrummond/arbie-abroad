import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import RecentPostsAlbum from './Components/RecentPostsAlbum';
import Map from './Components/Map';
import './Home.css'
import image from './recent-posts-background.svg'


function Home() {
  return (
    <div>
      <Header />
      <div className="recent-posts-background-svg">
        <img src={image}></img>
      </div>
      <Map />
      <RecentPostsAlbum />
      <Footer />
    </div>
  )
}

export default Home
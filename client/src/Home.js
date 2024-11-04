import React from 'react'
import Header from './components/Header'
import HomeMap from './components/HomeMap';
import Loader from './components/Loader';

function Home() {
  return (
    <>
      <Header></Header>
      <HomeMap></HomeMap>
    </>
  )
}

export default Home
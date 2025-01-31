import React from 'react'
import Nav from '../../components/Nav/Nav'
import Map from '../../components/Map/Map';

function Home() {
  return (
    <div className='flex column full-vp'>
      <div className='flex column'>
        <Nav></Nav>
      </div>
      <Map></Map>
    </div>
  )
}

export default Home
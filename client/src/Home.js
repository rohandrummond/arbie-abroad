import React from 'react'
import Nav from './components/Nav'
import Map from './components/Map';

function Home() {
  return (
    <>
      <div className='flex column'>
        <Nav></Nav>
      </div>
      <Map></Map>
    </>
  )
}

export default Home
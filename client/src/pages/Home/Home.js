import Nav from '../../components/Nav/Nav'
import Map from '../../components/Map/Map'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <div className="flex column full-vp home-ctr">
        <div className="flex column">
          <Nav></Nav>
        </div>
        <Map></Map>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home

import React from 'react';
import Header from './Components/Header'
import CountriesPostsAlbum from './Components/CountriesPostsAlbum'
import CountriesPostsAlbumSVG1 from './CountriesPostsAlbumSVG-1.svg'
import CountriesPostsAlbumSVG2 from './CountriesPostsAlbumSVG-2.svg'
import Footer from './Components/Footer'
import './Countries.css'

function Countries() {

    return (
        <div>
            <Header />
            <img className="countries-posts-album-svg-1" alt="Countries Posts Album SVG 1" src={CountriesPostsAlbumSVG1}></img>
            <img className="countries-posts-album-svg-2" alt="Countries Posts Album SVG 2" src={CountriesPostsAlbumSVG2}></img>
            <h1 id="indonesia">Indonesia</h1>
            <CountriesPostsAlbum
                countryName="Indonesia"
            />
            <h1 id="malaysia">Malaysia</h1>
            <CountriesPostsAlbum
                countryName="Malaysia"
            />
            <h1 id="singapore">Singapore</h1>
            <CountriesPostsAlbum
                countryName="Singapore"
            />
            <Footer />
        </div>
    )
}

export default Countries
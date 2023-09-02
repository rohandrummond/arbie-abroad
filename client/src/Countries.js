import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import CountryPostsAlbum from './Components/CountryPostsAlbum'
import image1 from './CountriesBackground1.svg'
import image2 from './CountriesBackground2.svg'
import './Countries.css'

function Countries() {

    return (
        <div>
            <Header />
            <img className="countries-background-image-1" src={image1}></img>
            <img className="countries-background-image-2" src={image2}></img>
            <h1 id="malaysia">Malaysia</h1>
            <CountryPostsAlbum
                countryName="Malaysia"
            />
            <h1 id="singapore">Singapore</h1>
            <CountryPostsAlbum
                countryName="Singapore"
            />
            <Footer />
        </div>
    )
}

export default Countries
import React, { useState, useEffect } from 'react'
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from 'react-simple-maps'
import { Tooltip } from 'react-tooltip'

function HomeMap() {

    const [highlightedCountries, setHighlightedCountries] = useState([]);

    useEffect(() => {
        async function getAllPosts() {
            try {
                const response = await fetch('/api/posts');
                const data = await response.json();
                data.forEach((post) => {
                    if(highlightedCountries.indexOf(post) === -1) {
                        setHighlightedCountries(prevHighlightedCountries => [
                            ...prevHighlightedCountries,
                            post.country
                        ])
                    };
                });
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        getAllPosts();
    }, []);

    function handleClick() {
        window.location.href = '/posts';
    }

    const [content, setContent] = useState("");

    return (
        <div 
            className='home-map'
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
        }}>
            <Tooltip anchorSelect=".country" place="top">
                {content}
            </Tooltip>
            <div style={{
                width: "75%",
            }}>
                <ComposableMap
                    projectionConfig={{
                        rotate: [-10, 0, 0],
                        scale: 145
                    }}
                    height={435}>
                    <Sphere stroke="#000000" strokeWidth={0.5} />
                    <Graticule stroke="#000000" strokeWidth={0.5} />
                    <Geographies geography="/features.json">
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const isHighlighted = highlightedCountries.includes(geo.properties.name)
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        className={`country ${!isHighlighted && 'disable-mouse'}`}
                                        fill={isHighlighted ? "#FFA24C" : "#453A2F"}
                                        onMouseEnter={() => {
                                            setContent(`${geo.properties.name}`);
                                        }}
                                        onMouseLeave={() => {
                                            setContent("");
                                        }}
                                        onClick={isHighlighted ? handleClick : undefined}
                                        style={{
                                            hover: {
                                                fill: "#000000",
                                                outline: "none"
                                            }
                                        }} />
                                )
                            })
                        }
                    </Geographies>
                </ComposableMap>
            </div>
        </div>
    )
}

export default HomeMap
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
        window.location.href = '/places';
    }

    const [content, setContent] = useState("");

    return (
        <div className='flex column centered map-otr-ctr'>
            <Tooltip anchorSelect=".country" place="top">{content}</Tooltip>
            <div className='map-inr-ctr'>
                <ComposableMap
                    projectionConfig={{
                        rotate: [-10, 0, 0],
                        scale: 145
                    }}
                    height={435}>
                    <Sphere stroke="#F2F2F2" strokeWidth={0.5} />
                    <Graticule stroke="#F2F2F2" strokeWidth={0.5} />
                    <Geographies geography="/topology.json">
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const isHighlighted = highlightedCountries.includes(geo.properties.name)
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        className={`country ${!isHighlighted && 'disable-mouse'}`}
                                        fill={isHighlighted ? "#F2F2F2" : "#F2F2F2"}
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
import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from 'react-simple-maps'
import { Tooltip } from 'react-tooltip'

// Create interactive SVG map using React Simple Maps (https://www.react-simple-maps.io/)

function HomeMap() {

    const highlighted = [
        "Singapore",
        "Malaysia",
        "Indonesia",
    ];

    function handleValidCountryClick() {
        window.location.href = '/countries';
    }

    function handleInvalidCountryClick() {
        window.location.href = '/countries';
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
                                const isHighlighted = highlighted.includes(geo.properties.name)
                                const handleClick = isHighlighted ? handleValidCountryClick : handleInvalidCountryClick
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        className="country"
                                        fill={isHighlighted ? "#453A2F" : "#453A2F"}
                                        onMouseEnter={() => {
                                            setContent(`${geo.properties.name}`);
                                        }}
                                        onMouseLeave={() => {
                                            setContent("");
                                        }}
                                        onClick={handleClick}
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
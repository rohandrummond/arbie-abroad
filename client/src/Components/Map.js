import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker, Annotation, Sphere, Graticule } from 'react-simple-maps'
import { Tooltip } from 'react-tooltip'

const geoURL = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";

const highlighted = [
    "Singapore",
    "Malaysia",
    "Indonesia",
    // "Cambodia",
    // "Laos",
    // "Thailand",
    // "India",
    // "Vietnam",
    // "Philippines"
];

function handleValidCountryClick() {
    window.location.href = '/countries';
}

function handleInvalidCountryClick() {
    window.location.href = '/register';
}

function Map() {

    const [content, setContent] = useState("");

    return (
        <div style={{
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
                    <Geographies geography={geoURL}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const isHighlighted = highlighted.includes(geo.properties.name)
                                const handleClick = isHighlighted ? handleValidCountryClick : handleInvalidCountryClick
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        className="country"
                                        fill={isHighlighted ? "#1746A2" : "#5F9DF7"}
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

export default Map
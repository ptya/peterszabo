import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

import Arrow from './elements/Arrow'
import MapWrapper from './styles/MapWrapper'
import MapBtn from './styles/MapBtn'

const Map = () => {
  const [isExtended, setExtended] = useState(false)
  const [viewport, setViewport] = useState({
    latitude: 47.51414,
    longitude: 19.02196,
    zoom: 12,
  })

  return (
    <MapWrapper isExtended={isExtended}>
      <MapBtn onClick={() => setExtended(!isExtended)} isExtended={isExtended}>
        <Arrow />
      </MapBtn>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken={process.env.GATSBY_MAPBOX_API_TOKEN}
        mapStyle="mapbox://styles/ptrszb/ck31d7k641qsn1co8k393vc5l"
        onViewportChange={vp => {
          setViewport({ ...vp })
        }}
      />
    </MapWrapper>
  )
}

export default Map

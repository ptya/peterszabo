import React, { useState, useLayoutEffect } from 'react'
import ReactMapGL from 'react-map-gl'

import { useWindowResize } from '../hooks/useWindowResize'

import MapWrapper from './styles/MapWrapper'

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100%",
    latitude: 47.514140,
    longitude: 19.021960,
    zoom: 12,
  })

  const { width: windowWidth } = useWindowResize()

  useLayoutEffect(() => {
    if (viewport.width !== windowWidth) {
      setViewport({...viewport, width: windowWidth})
    }
  })

  return (
    <MapWrapper>
      <ReactMapGL
        {...viewport}
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

import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { useSpring, animated } from 'react-spring'

import Pic from 'assets/images/avatar.jpg'
import Arrow from './elements/Arrow'
import MapWrapper from './styles/MapWrapper'
import MapBtn from './styles/MapBtn'
import Avatar from './styles/Avatar'

const AnimWrapper = animated(MapWrapper)

const Map = () => {
  const [isExtended, setExtended] = useState(false)
  const [on, setOn] = useState(false)
  const [viewport, setViewport] = useState({
    latitude: 47.51414,
    longitude: 19.02196,
    zoom: 12,
  })

  const { x } = useSpring({ from: { x: 200 }, x: 0, delay: 700 })

  return (
    <AnimWrapper
      isExtended={isExtended}
      style={{ transform: x.interpolate(x => `translateY(${x}px)`) }}
    >
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
      >
        <Marker
          latitude={47.51}
          longitude={19.02}
          offsetLeft={-25}
          offsetTop={-25}
        >
          <Avatar src={Pic} alt="my marker" onClick={() => setOn(!on)} />
        </Marker>
        {on && (
          <Popup
            latitude={47.51}
            longitude={19.02}
            closeButton={false}
            closeOnClick
            onClose={() => setOn(false)}
            offsetLeft={15}
            anchor="left"
          >
            <p>Heyho!</p>
          </Popup>
        )}
      </ReactMapGL>
    </AnimWrapper>
  )
}

export default Map

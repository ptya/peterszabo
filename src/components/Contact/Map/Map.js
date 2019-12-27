import React, { useState, useRef, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { useSpring, useChain, animated } from 'react-spring'
import PropTypes from 'prop-types'

// change avatar
import Pic from 'assets/images/avatar.jpg'
import Arrow from './elements/Arrow'
import MapWrapper from './styles/MapWrapper'
import MapBtn from './styles/MapBtn'
import Avatar from './styles/Avatar'

const AnimWrapper = animated(MapWrapper)
const AnimAvatar = animated(Avatar)

const Map = ({ delay }) => {
  const [ready, setReady] = useState(false)
  const [isExtended, setExtended] = useState(false)
  const [on, setOn] = useState(false)
  const [viewport, setViewport] = useState({
    latitude: 47.51414,
    longitude: 19.02196,
    zoom: 11,
  })

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  const enterRef = useRef()
  const resizeRef = useRef()

  const { x } = useSpring({
    from: { x: 250 },
    x: 0,
    ref: enterRef,
    delay: 950,
  })
  const resize = useSpring({
    height: isExtended ? '100vh' : '20vh',
    ref: resizeRef,
  })

  useChain([enterRef, resizeRef])

  return (
    <>
      {ready && (
        <AnimWrapper
          style={{
            transform: x.interpolate(n => `translateY(${n}px)`),
            ...resize,
          }}
        >
          <MapBtn
            onClick={() => setExtended(!isExtended)}
            isExtended={isExtended}
          >
            <Arrow>
              {isExtended && 'Close map'}
              {!isExtended && 'Open map'}
            </Arrow>
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
            reuseMaps
          >
            <Marker
              latitude={47.51}
              longitude={19.02}
              offsetLeft={-25}
              offsetTop={-25}
            >
              <AnimAvatar
                src={Pic}
                alt="my marker"
                onClick={() => setOn(!on)}
              />
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
      )}
    </>
  )
}

Map.propTypes = {
  delay: PropTypes.number,
}

Map.defaultPropTypes = {
  delay: 0,
}

// TODO popup styling

export default Map

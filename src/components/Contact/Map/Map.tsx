import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { useSpring, useChain, useSpringRef } from 'react-spring'

// local elements
import Arrow from './elements/Arrow'

// local styles
import { AnimatedMapWrapper } from './styles/MapWrapper'
import MapBtn from './styles/MapBtn'
import { AnimatedAvatar } from './styles/Avatar'
import StyledPopup from './styles/StyledPopup'

// assets
import Pic from 'assets/images/profile.jpg'

type Props = {
  delay?: number
  isMobile: boolean
}

const Map: React.FC<Props> = ({ delay = 0, isMobile }) => {
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

  const enterRef = useSpringRef()
  const resizeRef = useSpringRef()

  const { x } = useSpring({
    from: { x: isMobile ? 0 : 250 },
    x: 0,
    ref: enterRef,
    delay: isMobile ? 0 : 950,
  })

  const baseHeight = isMobile ? '35rem' : '20vh'

  const resize = useSpring({
    height: isExtended ? '100vh' : baseHeight,
    ref: resizeRef,
  })

  useChain([enterRef, resizeRef])

  return (
    <>
      {ready && (
        <AnimatedMapWrapper
          isExtended={isExtended}
          style={{
            transform: x.interpolate(n => `translateY(${n}px)`),
            ...resize,
          }}
        >
          {!isMobile && (
            <MapBtn onClick={() => setExtended(!isExtended)} isExtended={isExtended}>
              <Arrow>
                {isExtended && 'Close map'}
                {!isExtended && 'Open map'}
              </Arrow>
            </MapBtn>
          )}
          <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            mapboxApiAccessToken={process.env.GATSBY_MAPBOX_API_TOKEN}
            mapStyle="mapbox://styles/ptrszb/ck31d7k641qsn1co8k393vc5l"
            onViewportChange={(vp: typeof viewport) => {
              setViewport({ ...vp })
            }}
            reuseMaps
          >
            <Marker latitude={47.51} longitude={19.02} offsetLeft={-25} offsetTop={-25}>
              <AnimatedAvatar src={Pic} alt="my marker" onClick={() => setOn(!on)} />
            </Marker>
            {on && (
              <StyledPopup
                latitude={47.51}
                longitude={19.02}
                closeButton={false}
                closeOnClick
                onClose={() => setOn(false)}
                offsetLeft={15}
                anchor="left"
              >
                <p>
                  Heyho!{' '}
                  <span role="img" aria-label="waving hand">
                    👋
                  </span>
                </p>
              </StyledPopup>
            )}
          </ReactMapGL>
        </AnimatedMapWrapper>
      )}
    </>
  )
}

export default Map

import React, { useState, useLayoutEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import ScreenContext from 'components/context/ScreenContext'

import ScreensWrapper from './styles/ScreensWrapper'
import Screen, { screenImgStyle } from './styles/Screen'

const Screens = ({ images, title, className }) => {
  const [active, setActive] = useState(null)
  const { isClient, isTouch } = useContext(ScreenContext)

  const isHoverAvailable = isClient && !isTouch
  return (
    <ScreensWrapper className={className}>
      {images.map((image, i) => (
        <a
          href={image.childImageSharp.original.src}
          rel="noopener noreferrer"
          target="_blank"
          onMouseOver={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(i)}
          onBlur={() => setActive(null)}
          key={i}
        >
          <Screen
            fluid={image.childImageSharp.fluid}
            alt={`${title} ${i + 1}`}
            imgStyle={screenImgStyle(
              isHoverAvailable && (active !== null && i === active)
            )}
            isInActive={isHoverAvailable && (active !== null && i !== active)}
          />
        </a>
      ))}
    </ScreensWrapper>
  )
}

Screens.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Screens.defaultProps = {
  className: '',
}

export default Screens

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ScreensWrapper from './styles/ScreensWrapper'
import Screen, { screenImgStyle } from './styles/Screen'

const Screens = ({ images, title, className }) => {
  const [active, setActive] = useState(null)
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
        >
          <Screen
            fluid={image.childImageSharp.fluid}
            key={i}
            alt={`${title} ${i + 1}`}
            imgStyle={screenImgStyle(active !== null && i === active)}
            isInActive={active !== null && i !== active}
          />
        </a>
      ))}
    </ScreensWrapper>
  )
}

Screens.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.array.isRequired,
  className: PropTypes.array,
}

Screens.defaultProps = {
  className: '',
}

export default Screens

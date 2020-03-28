import React, { useState } from 'react'

import { TImage } from 'types'

import ScreensWrapper from './styles/ScreensWrapper'
import Screen, { screenImgStyle } from './styles/Screen'

type Props = {
  images: TImage[],
  title: string,
  className?: string
}

const Screens: React.FC<Props> = ({ images, title, className = '' }) => {
  const [active, setActive] = useState<null | number>(null)

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
            imgStyle={screenImgStyle(active !== null && i === active)}
            isInActive={active !== null && i !== active}
          />
        </a>
      ))}
    </ScreensWrapper>
  )
}

export default Screens

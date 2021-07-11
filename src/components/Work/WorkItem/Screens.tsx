import React, { useState } from 'react'
import { getImage } from 'gatsby-plugin-image'

import { TImage } from 'types'

import ScreensWrapper from './styles/ScreensWrapper'
import Screen from './styles/Screen'

type Props = {
  images: TImage[]
  title: string
  className?: string
}

const Screens: React.FC<Props> = ({ images, title, className = '' }) => {
  const [active, setActive] = useState<null | number>(null)

  return (
    <ScreensWrapper className={className}>
      {images.map((image, i) => {
        const gImage = getImage(image.childImageSharp.gatsbyImageData)
        return (
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
            {gImage && <Screen image={gImage} alt={`${title} ${i + 1}`} isActive={active !== null && i === active} />}
          </a>
        )
      })}
    </ScreensWrapper>
  )
}

export default Screens

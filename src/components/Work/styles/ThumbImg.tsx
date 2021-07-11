import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { SpringValue, animated } from 'react-spring'

import { colors, device } from 'components/styles/variables'

const ThumbImg = styled(GatsbyImage)`
  position: relative;
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  position: relative;
  height: 25rem;
  border-left: 0.05rem solid ${colors.shadow};
  border-right: 0.05rem solid ${colors.shadow};

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    height: 100%;
  }
`

const thumbImgStyle: React.CSSProperties = {
  objectFit: 'cover',
  objectPosition: 'center center',
}

export default ThumbImg

type Props = {
  style: Record<string, SpringValue>
  image: IGatsbyImageData
  alt: string
}

const AnimatedWrapper = animated(Wrapper)

const AnimatedThumbImg = ({ style, image, alt }: Props): JSX.Element => {
  return (
    <AnimatedWrapper style={style}>
      <ThumbImg image={image} alt={alt} imgStyle={thumbImgStyle} />
    </AnimatedWrapper>
  )
}

export { AnimatedThumbImg, thumbImgStyle }

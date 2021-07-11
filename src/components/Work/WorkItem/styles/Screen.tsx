import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type StyleProps = {
  isInActive: boolean
}

export const ScreenWrapper = styled.div<StyleProps>`
  position: relative;
  max-height: 27rem;
  height: 100%;
  filter: ${props => (props.isInActive ? 'brightness(0.7)' : 'brightness(1)')};
  transition: all 0.2s ease-in-out;
`

const screenImgStyle = (isActive: boolean): React.CSSProperties => ({
  objectPosition: 'left center',
  width: isActive ? '102%' : '100%',
  height: isActive ? '102%' : '100%',
  transition: 'all 0.3s ease-in-out',
})

type Props = {
  isActive: boolean
  image: IGatsbyImageData
  alt: string
}

const Screen = ({ isActive, image, alt }: Props): JSX.Element => {
  return (
    <ScreenWrapper isInActive={!isActive}>
      <GatsbyImage image={image} imgStyle={screenImgStyle(isActive)} alt={alt} />
    </ScreenWrapper>
  )
}

export default Screen

export { screenImgStyle }

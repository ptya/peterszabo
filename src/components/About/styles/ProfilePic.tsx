import React from 'react'
import styled from 'styled-components'
import Img, { FluidObject } from 'gatsby-image'

import { colors } from 'components/styles/variables'

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  position: relative;
  clip-path: polygon(0 2%, 100% 0, 100% 100%, 0 98%);
`

const Wrapper = styled.figure`
  position: relative;
  margin: 0 auto;
  width: 25rem;
  height: 25rem;
  filter: drop-shadow(0.1rem 0.1rem 0.2rem ${colors.shadow});
`

type ImageProps = {
  className?: string,
  fluid: FluidObject,
  alt?: string,
}

const ProfilePic: React.FC<ImageProps> = ({ className, fluid, alt }: ImageProps) => (
  <Wrapper>
    <StyledImg className={className} alt={alt} fluid={fluid} />
  </Wrapper>
)

export default ProfilePic

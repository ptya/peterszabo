import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { colors } from 'components/styles/variables'

const StyledImg = styled(Img)`
  width: 250px;
  height: 250px;
  position: relative;
  clip-path: polygon(0 2%, 100% 0, 100% 100%, 0 98%);
`

const Wrapper = styled.figure`
  position: relative;
  margin: 0 auto;
  filter: drop-shadow(1px 1px 2px ${colors.shadow});
`

const ProfilePic = props => (
  <Wrapper>
    <StyledImg {...props} />
  </Wrapper>
)

export default ProfilePic

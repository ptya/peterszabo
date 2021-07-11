import styled from 'styled-components'
import { animated } from 'react-spring'

import { device } from './variables'

const StyledTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 400;
  position: relative;
  margin: 0;

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    font-size: 3.2rem;
  }
`

const AnimatedTitle = animated(StyledTitle)

export default StyledTitle

export { AnimatedTitle }

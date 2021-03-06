import styled from 'styled-components'
import { animated } from 'react-spring'

const StyledOops = styled.p`
  padding-left: 8.5rem;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto 0;
  }

  .oops {
    margin-bottom: 3rem;
    background: red;
  }
`

const AnimatedOops = animated(StyledOops)

export default StyledOops
export { AnimatedOops }

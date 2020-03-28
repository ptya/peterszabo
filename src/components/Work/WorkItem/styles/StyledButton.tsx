import styled from 'styled-components'
import { animated } from 'react-spring'

import { colors } from 'components/styles/variables'

const StyledButton = styled.svg`
  width: 5rem;
  height: 4.5rem;
  position: relative;

  .line {
    stroke: ${colors.white};
    stroke-width: 6;
    transition: all 0.3s ease-in-out;
  }

  .one {
    transform: rotate(45deg);
    transform-origin: center;
  }

  .two {
    transform: rotate(-45deg);
    transform-origin: center;
  }

  :active {
    .edges {
      transform: translateY(-1.5rem);
    }
  }
`

const AnimatedButton = animated(StyledButton)

export default StyledButton
export { AnimatedButton }
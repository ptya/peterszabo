import { animated } from 'react-spring'
import styled from 'styled-components'

import { colors } from './variables'

const Underline = styled(animated.div)`
  position: absolute;
  bottom: 0;
  :after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0.4rem;
    background: ${colors.blue};
    border-radius: 0.5rem;
  }
`

export default Underline

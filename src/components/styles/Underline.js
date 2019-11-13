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
    height: 4px;
    background: ${colors.blue};
    border-radius: 5px;
  }
`

export default Underline

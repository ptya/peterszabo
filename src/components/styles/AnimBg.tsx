import styled from 'styled-components'
import { animated } from 'react-spring'
import { colors } from './variables'

const AnimBgLeft = styled(animated.div)`
  position: absolute;
  height: 100%;
  background: ${colors.blue};
  top: -15%;
  left: -10%;
`

const AnimBgRight = styled(animated.div)`
  position: absolute;
  height: 100%;
  background: ${colors.blue};
  bottom: -15%;
  right: -10%;
`

export { AnimBgLeft, AnimBgRight }

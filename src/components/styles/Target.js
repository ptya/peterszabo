import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'

import { colors } from './variables'

const Div = styled(animated.div)`
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

const Target = ({ pos }) => {
  const [left, width] = pos
  const animation = useSpring({
    left,
    width,
    config: config.stiff,
  })

  return <Div style={animation} />
}

export default Target

import React from 'react'
import { useSpring, config } from 'react-spring'

import Underline from '../styles/Underline'

type Props = {
  pos: number[]
}

const Target: React.FC<Props> = ({ pos }) => {
  const [left, width] = pos
  const animation = useSpring({
    left,
    width,
    config: config.stiff,
  })

  return <Underline style={animation} />
}

export default Target

import React from 'react'
import { animated } from 'react-spring'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

type Props = {
  tag: string,
  delay: number,
}

const WorkTag: React.FC<Props> = ({ tag, delay }) => {
  const fadeIn = useFadeIn({ delay })
  return <animated.span style={fadeIn}>{tag}</animated.span>
}

export default WorkTag

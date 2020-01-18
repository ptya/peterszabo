import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

const WorkTag = ({ tag, delay }) => {
  const fadeIn = useFadeIn({ delay })
  return <animated.span style={fadeIn}>{tag}</animated.span>
}

WorkTag.propTypes = {
  tag: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
}

export default WorkTag

import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'

const WorkTag = ({ tag, delay }) => {
  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
  })
  return <animated.span style={spring}>{tag}</animated.span>
}

WorkTag.propTypes = {
  tag: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
}

export default WorkTag

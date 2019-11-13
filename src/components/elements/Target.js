import React from 'react'
import { useSpring, config } from 'react-spring'
import PropTypes from 'prop-types'

import Underline from '../styles/Underline'

const Target = ({ pos }) => {
  const [left, width] = pos
  const animation = useSpring({
    left,
    width,
    config: config.stiff,
  })

  return <Underline style={animation} />
}

Target.propTypes = {
  pos: PropTypes.shape({
    left: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
}

export default Target

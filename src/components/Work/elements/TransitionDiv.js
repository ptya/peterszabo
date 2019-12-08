import React from 'react'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'

import { colors } from 'components/styles/variables'

import TransitionWrapper from '../styles/TransitionWrapper'

const TransitionDiv = ({ data, fromWork, callback }) => {
  const { top, left } = data
  const spring = useSpring({
    from: {
      top: fromWork ? 0 : top,
      left: fromWork ? 0 : left,
      width: fromWork ? '100%' : '0%',
      height: fromWork ? '100%' : '0%',
      opacity: fromWork ? 1 : 0,
      background: fromWork ? colors.darkBg : colors.lightBlue,
      borderRadius: fromWork ? '0%' : '100%',
    },
    width: fromWork ? '0%' : '100%',
    height: fromWork ? '0%' : '100%',
    top: fromWork ? top : 0,
    left: fromWork ? left : 0,
    opacity: fromWork ? 0 : 1,
    background: fromWork ? colors.lightBlue : colors.darkBg,
    borderRadius: fromWork ? '100%' : '0%',
    config: {
      // pretty quick
      mass: 1,
      tension: 500,
      friction: 50,
      duration: 350,
    },
    onRest: callback,
  })

  return (
    <TransitionWrapper>
      <animated.div style={spring} />
    </TransitionWrapper>
  )
}

TransitionDiv.propTypes = {
  data: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
  fromWork: PropTypes.bool,
  callback: PropTypes.func.isRequired,
}

TransitionDiv.defaultProps = {
  fromWork: false,
}

export default TransitionDiv

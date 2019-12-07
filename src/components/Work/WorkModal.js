import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fn } from 'moment'

const StyledDiv = styled.div`
  background: red;
  position: absolute;
`
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
`

const AnimDiv = animated(StyledDiv)

const WorkModal = ({ data, fromWork, callback }) => {
  const { top, left } = data
  const modalSpring = useSpring({
    from: {
      top: fromWork ? 0 : top,
      left: fromWork ? 0 : left,
      width: fromWork ? '100%' : '0%',
      height: fromWork ? '100%' : '0%',
    },
    width: fromWork ? '0%' : '100%',
    height: fromWork ? '0%' : '100%',
    top: fromWork ? top : 0,
    left: fromWork ? left : 0,
    config: {
      mass: 1,
      tension: 500,
      friction: 50,
    },
    delay: fromWork ? 500 : 0,
    onRest: callback,
  })

  return (
    <Wrapper>
      <AnimDiv style={modalSpring}>hello</AnimDiv>
    </Wrapper>
  )
}

WorkModal.propTypes = {
  data: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    // item: PropTypes.object.isRequired,
  }).isRequired,
  fromWork: PropTypes.bool,
  callback: PropTypes.func.isRequired,
}

WorkModal.defaultProps = {
  fromWork: false,
}

export default WorkModal

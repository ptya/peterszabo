import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const WorkModal = ({ data }) => {
  const { top, left, item } = data
  const modalSpring = useSpring({
    from: {
      top,
      left,
      width: '0%',
      height: '0%',
    },
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    config: config.normal,
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
    item: PropTypes.object.isRequired,
  }).isRequired,
}

export default WorkModal

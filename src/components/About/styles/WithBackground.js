import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const baseMoving = keyframes`
  0% {
    transform: translateX(10px) rotate3d(0,1,0, 10deg);
  }
  50% {
    transform: translateX(8px) rotate3d(0,0.8,0, 8deg);
  }
  100% {
    transform: translateX(10px) rotate3d(0,1,0, 10deg);
  }
`

const beforeMoving = keyframes`
  0% {
    transform: translateX(10px) rotate3d(1, 0.3, 0, 17deg);
  }
  50% {
    transform: translateX(10px) rotate3d(0.8, 0.5, 0, 19deg);
  }
  100% {
    transform: translateX(10px) rotate3d(1, 0.3, 0, 17deg);
  }
`

const afterMoving = keyframes`
  0% {
    transform: translateX(10px) rotate3d(1, 0, 1, -2deg);
  }
  50% {
    transform: translateX(9px) rotate3d(0.8, 0,0.9, -1deg);
  }
  100% {
    transform: translateX(10px) rotate3d(1, 0, 1, -2deg);
  }
`

const Perspective = styled.div`
  perspective: 1000px;
  position: relative;
`

const Background = styled.div`
  background-color: rgba(35, 50, 71, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(10px) rotate3d(0, 1, 0, 10deg);
  animation: ${baseMoving} 4s ease-in-out infinite;
  /* box-shadow: 2px 2px 2px 0px yellow; */

  :before {
    content: '';
    width: 100%;
    height: 100%;
    background: green;
    position: absolute;
    background: rgba(35, 50, 71, 0.3);
    transform: translateX(10px) rotate3d(1, 0.3, 0, 17deg);
    animation: ${beforeMoving} 3s ease-in-out infinite;
  }

  :after {
    content: '';
    width: 100%;
    height: 100%;
    background: yellow;
    position: absolute;
    background: rgba(35, 50, 71, 0.5);
    transform: translateX(5px) rotate3d(1, 0, 1, -2deg);
    animation: ${afterMoving} 6s ease-in-out infinite;
  }
`

const WithBackground = ({ children }) => (
  <Perspective>
    <Background />
    {children}
  </Perspective>
)

WithBackground.propTypes = {
  children: PropTypes.any.isRequired,
}

export default WithBackground

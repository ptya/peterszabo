import styled, { keyframes } from 'styled-components'

import { colors, z } from './variables'

const baseMoving = keyframes`
  0% {
    transform: translateX(10px) rotate3d(0,1,0, 10deg);
  }
  50% {
    transform: translateX(8px) rotate3d(-0.2,0.8,0, 8deg);
  }
  100% {
    transform: translateX(10px) rotate3d(0,1,0, 10deg);
  }
`

const beforeMoving = keyframes`
  0% {
    transform: translateX(0px) rotate3d(0, 0.3, 0, 12deg);
  }
  50% {
    transform: translateX(-5px) translateY(-5px) rotate3d(0.3, 0.5, -0.1, 15deg);
  }
  100% {
    transform: translateX(0px) rotate3d(0, 0.3, 0, 12deg);
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

const Background = styled.div`
  background-color: ${colors.textBgHighOpacity};
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(10px) rotate3d(0, 1, 0, 10deg);
  animation: ${baseMoving} 4s ease-in-out infinite;
  z-index: ${z.back};

  :before {
    content: '';
    width: 103%;
    height: 100%;
    background: green;
    position: absolute;
    background: ${colors.textBgLowOpacity};
    transform: translateX(0px) rotate3d(0, 0.3, 0, 12deg);
    animation: ${beforeMoving} 8s ease-in-out infinite;
  }

  :after {
    content: '';
    width: 100%;
    height: 100%;
    background: yellow;
    position: absolute;
    background: ${colors.textBgMidOpacity};
    transform: translateX(10px) rotate3d(1, 0, 1, -2deg);
    animation: ${afterMoving} 6s ease-in-out infinite;
  }
`

export default Background

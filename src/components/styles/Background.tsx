import styled, { keyframes } from 'styled-components'

import { colors, z, device } from './variables'

const baseMovingLaptop = keyframes`
  0% {
    transform: translateX(1rem) rotate3d(0,1,0, 10deg);
  }
  50% {
    transform: translateX(0.8rem) rotate3d(-0.2,0.8,0, 8deg);
  }
  100% {
    transform: translateX(1rem) rotate3d(0,1,0, 10deg);
  }
`

const baseMovingMobile = keyframes`
  0% {
    transform: translateX(0.2rem) rotate3d(0,1,0, 10deg);
  }
  50% {
    transform: translateX(0rem) rotate3d(-0.2,0.8,0, 8deg);
  }
  100% {
    transform: translateX(0.2rem) rotate3d(0,1,0, 10deg);
  }
`

const beforeMovingLaptop = keyframes`
  0% {
    transform: translateX(0rem) rotate3d(0, 0.3, 0, 12deg);
  }
  50% {
    transform: translateX(-0.5rem) translateY(-0.5rem) rotate3d(0.3, 0.5, -0.1, 15deg);
  }
  100% {
    transform: translateX(0rem) rotate3d(0, 0.3, 0, 12deg);
  }
`

const beforeMovingMobile = keyframes`
  0% {
    transform: translateX(0rem) rotate3d(-1,-1,1,-1.5deg);
  }
  50% {
    transform: translateX(-0.2rem) translateY(-0.2rem) rotate3d(-1,-1,1,0deg);
  }
  100% {
    transform: translateX(0rem) rotate3d(-1,-1,1,-1.5deg);
  }
`

const afterMovingLaptop = keyframes`
  0% {
    transform: translateX(1rem) rotate3d(1, 0, 1, -2deg);
  }
  50% {
    transform: translateX(0.9rem) rotate3d(0.8, 0,0.9, -1deg);
  }
  100% {
    transform: translateX(1rem) rotate3d(1, 0, 1, -2deg);
  }
`

const afterMovingMobile = keyframes`
  0% {
    transform: translateX(0rem) rotate3d(1, 0, 1, -1.5deg);
  }
  50% {
    transform: translateX(-0.1rem) rotate3d(0.8, 0,0.9, -1deg);
  }
  100% {
    transform: translateX(0rem) rotate3d(1, 0, 1, -1.5deg);
  }
`

const Background = styled.div`
  background-color: ${colors.textBgHighOpacity};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateX(0.2rem) rotate3d(0, 1, 0, 10deg);
  animation: ${baseMovingMobile} 4s ease-in-out infinite;
  z-index: ${z.back};

  :before {
    content: '';
    width: 98%;
    height: 100%;
    position: absolute;
    background: ${colors.textBgLowOpacity};
    transform: translateX(0rem) rotate3d(-1, -1, 1, -1.5deg);
    animation: ${beforeMovingMobile} 8s ease-in-out infinite;
  }

  :after {
    content: '';
    width: 98%;
    height: 100%;
    position: absolute;
    background: ${colors.textBgMidOpacity};
    transform: translateX(0rem) rotate3d(1, 0, 1, -1.5deg);
    animation: ${afterMovingMobile} 6s ease-in-out infinite;
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    transform: translateX(1rem) rotate3d(0, 1, 0, 10deg);
    animation: ${baseMovingLaptop} 4s ease-in-out infinite;

    :before {
      width: 103%;
      transform: translateX(0rem) rotate3d(0, 0.3, 0, 12deg);
      animation: ${beforeMovingLaptop} 8s ease-in-out infinite;
    }

    :after {
      width: 100%;
      transform: translateX(1rem) rotate3d(1, 0, 1, -2deg);
      animation: ${afterMovingLaptop} 6s ease-in-out infinite;
    }
  }
`

export default Background

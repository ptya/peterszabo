import styled, { keyframes } from 'styled-components'

import { colors } from 'components/styles/variables'

const scaleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const drawCircle = keyframes`
  0% {
    stroke-dashoffset: 15.1rem;
  }
  100% {
    stroke-dashoffset: 0;
  }
`

const drawCheck = keyframes`
  0% {
    stroke-dashoffset: 2.83rem;
  }
  100% {
    stroke-dashoffset: 0;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Cross = styled.svg`
  /* credits to https://dribbble.com/shots/3492735-Success-Animation-SVG-CSS */
  animation: 1s ease-out 0s 1 both ${scaleAnimation};

  #failAnimationCircle {
    stroke-dasharray: 15.1rem 15.1rem;
    stroke: ${colors.darkRed};
    animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both ${drawCircle}, 0.3s linear 1.2s 1 both ${fadeOut};
  }

  #failAnimationCross1,
  #failAnimationCross2 {
    stroke-dasharray: 2.83rem 2.83rem;
    stroke: ${colors.darkRed};
  }

  #failAnimationCross1 {
    animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both ${drawCheck}, 0.3s linear 1.2s 1 both ${fadeOut};
  }
  #failAnimationCross2 {
    animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0.3s 1 both ${drawCheck}, 0.3s linear 1.2s 1 both ${fadeOut};
  }
  #failAnimationResult {
    fill: ${colors.blue};
    opacity: 0;
    animation: 0.3s linear 1.2s both ${fadeIn};
  }
`

export default Cross

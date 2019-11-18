import styled, { keyframes } from 'styled-components'

const attention = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(-10px);
  }
  75% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`

const StyledArrow = styled.svg`
  padding: 0 20px;
  width: 89px;
  .edges {
    transition: all 0.3s ease-in-out;
    animation: ${attention} 1s ease-in-out 1s;
  }

  :hover {
    .edges {
      transform: translateY(-20px);
    }
  }

  :active {
    .edges {
      transform: translateY(-15px);
    }
  }
`

export default StyledArrow

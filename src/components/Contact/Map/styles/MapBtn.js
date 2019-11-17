import styled, { keyframes, css } from 'styled-components'
import { colors, z } from 'components/styles/variables'

const attention = keyframes`
  0% {
    top: -40px;
  }
  5% {
    top: -50px;
  }
  10% {
    top: -42px;
  }
  15% {
    top: -50px;
  }
  20% {
    top: -40px;
  }
  100% {
    top: -40px;
  }
`

const MapBtn = styled.button`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: ${props => (props.isExtended ? '40px' : '-40px')};
  background: none;
  border: none;
  cursor: pointer;
  padding: 20px;

  z-index: ${z.top};
  img {
    transform: ${props =>
      props.isExtended ? `rotateX(180deg)` : `rotateX(0)`};
    width: 35px;
    height: 22px;
    transition: all 0.3s;
  }
  :hover {
    animation: step-end;
    img {
      transform: ${props =>
        props.isExtended
          ? `translateY(-10px) rotateX(180deg)`
          : `translateY(-10px) rotateX(0)`};
      width: 40px;
      height: 27px;
    }
  }

  ${props =>
    !props.isExtended &&
    css`
      animation: ${attention} 5s ease-in-out 2s infinite;
    `}
`

export default MapBtn

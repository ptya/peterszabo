import styled, { keyframes } from 'styled-components'
import { colors } from 'components/styles/variables'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Avatar = styled.img`
  width: 50px;
  border: 2px solid ${colors.blue};
  border-radius: 25px;
  cursor: pointer;
  animation: ${fadeIn} 3s linear;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: rotateZ(30deg);
    width: 60px;
    border-radius: 30px;
  }
`

export default Avatar

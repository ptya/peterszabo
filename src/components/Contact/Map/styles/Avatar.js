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
  width: 5rem;
  border: 0.2rem solid ${colors.blue};
  border-radius: 2.5rem;
  cursor: pointer;
  /* animation: ${fadeIn} 3s linear; */
  transition: all 0.3s ease-in-out;

  :hover {
    transform: rotateZ(30deg);
    width: 6rem;
    border-radius: 3rem;
  }
`

export default Avatar

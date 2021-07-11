import styled from 'styled-components'
import { colors } from 'components/styles/variables'
import { animated } from 'react-spring'

const Avatar = styled.img`
  width: 5rem;
  border: 0.2rem solid ${colors.blue};
  border-radius: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    transform: rotateZ(30deg);
    width: 6rem;
    border-radius: 3rem;
  }
`

const AnimatedAvatar = animated(Avatar)

export default Avatar
export { AnimatedAvatar }

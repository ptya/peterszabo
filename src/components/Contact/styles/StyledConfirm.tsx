import styled from 'styled-components'
import { animated } from 'react-spring'

const StyledConfirm = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AnimatedConfirm = animated(StyledConfirm)

export default StyledConfirm
export { AnimatedConfirm }

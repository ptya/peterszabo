import styled from 'styled-components'
import { colors } from 'components/styles/variables'

const Error = styled.span`
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  color: ${colors.red};
  letter-spacing: 0.15rem;
  font-size: 1.4rem;
  text-transform: lowercase;
`

export default Error

import styled from 'styled-components'
import { colors } from 'components/styles/variables'

const Error = styled.span`
  position: absolute;
  right: 10px;
  top: 5px;
  color: ${colors.red};
  letter-spacing: 1.5px;
  font-size: 1.4rem;
  text-transform: lowercase;
`

export default Error
